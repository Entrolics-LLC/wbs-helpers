const { v4: uuidv4 } = require('uuid')
const axios = require('axios')
const Fuse = require('fuse.js')
const _ = require('lodash')
const moment = require('moment')
var jwt = require('jwt-simple')
const isNull = require('./isNull')
const codes = require('./codes.json')
const { runQuery, runQueryWithReplacements } = require('./postgresQueries')

const arrayIntoBigqueryArray = (array) => ( //Convert JS Array into Bigquery Array, Use only for array of strings.
    Boolean(Array.isArray(array) && array?.length) ?
        `['${array.toString().split(',').join(`','`)}']`
        : `[]`
)

const arrayIntoPostgresqlArray = (array) => {
    if (Array.isArray(array) && array.length) {
        // Map the array elements into properly escaped strings for PostgreSQL, and join them into a PostgreSQL array format.
        const pgArray = array.map(element => `"${element.replace(/"/g, '\\"')}"`).join(',');
        return `'{${pgArray}}'`;
    }
    else {
        return "'{}'"; // PostgreSQL empty array syntax
    }
}

const keyPairTable = `context.schema_form_key_pairs`
const graphSchemaTable = `context.template_graph_schemas`
const projects_graph_schema = `projects_graph_schemas`

const templatedTable = `context.templates`

const tokenSecret = 'access_token'
let minutes = process.env.NODE_ENV === 'production' ? 15 : 60

const origin = process.env?.NODE_ENV ? `https://context-2my7afm7yq-ue.a.run.app` : 'http://localhost:3000'

const getAuthUrl = async (uri, storage) => {
    if (uri && uri.length) {
        try {
            const expires = moment(moment(), 'MM-DD-YYYY').add(2, 'days')
            const bucketName = uri.split('/')[2]
            const myBucket = storage.bucket(bucketName)

            const config = {
                action: 'read',
                expires: expires,
                accessibleAt: expires
            }

            let file = myBucket.file(uri.replace(`gs://${bucketName}/`, ''))
            let [url] = await file.getSignedUrl(config)
            return url
        }
        catch (e) {
            return uri
        }
    }
    return undefined
}

const getAuthS3Url = async (uri, storage) => {
    if (uri && uri.length) {
        try {
            const match = uri?.match(/s3:\/\/(.+?)\/(.+)/i)
            const file_name = match?.[2]
            const bucket_name = match?.[1]
            const signedUrlExpireSeconds = 60 * 60 * 24 * 2
            const url = await storage.getSignedUrl('getObject', {
                Bucket: bucket_name,
                Key: file_name,
                Expires: signedUrlExpireSeconds
            })
            console.log("NEW URL ==>", url)
            return url
        }
        catch (e) {
            console.log('e', e)
            return uri
        }
    }
    return undefined
}

const validateData = (data) => data ? "'" + data?.replace?.(/'|"/gi, '') + "'" : null

const updateToken = async (id, db) => {
    try {
        let whereStatement = `WHERE id='${id}' AND is_email_verified=true`
        let sqlQuery = `SELECT * EXCEPT(password) FROM users ${whereStatement}`

        let user = await runQuery(db, sqlQuery)

        if (user.length > 0) {
            user = user[0]
            if (user?.access_token) {
                let decoded = jwt.decode(user?.access_token, tokenSecret)
                if (decoded.exp >= moment().valueOf()) {
                    decoded.exp = moment().add(minutes, 'minutes').valueOf()
                    const updatedToken = jwt.encode(decoded, tokenSecret)
                    sqlQuery = `UPDATE users SET access_token='${updatedToken}' ${whereStatement}`
                    console.log('sqlQuery', sqlQuery)
                    await runQuery(db, sqlQuery)

                    return true
                }
            }
        }

        return false
    }
    catch (e) {
        return false
    }
}

const addToken = async (id, db) => {
    try {
        const token = jwt.encode({
            iss: id,
            exp: moment().add(minutes, 'minutes').valueOf()
        }, tokenSecret)

        let whereStatement = `WHERE id='${id}' AND is_email_verified=true`
        let sqlQuery = `UPDATE users SET access_token='${token}' ${whereStatement}`

        await runQuery(db, sqlQuery)
    }
    catch (e) {
    }
}

const getUniqueArrayOfObjects = (ary, objectPropertName) => {
    let cleanProperty = (property) => typeof property == 'string' ? property?.trim().toLowerCase() : property
    return ary.filter((elem, index) => {
        let filteredByProperty = ary?.findIndex(obj => {
            let obj1V = obj?.[objectPropertName]
            let obj2V = elem?.[objectPropertName]
            let value1 = cleanProperty(obj1V)
            let value2 = cleanProperty(obj2V)
            return value1 == value2
        })
        return filteredByProperty == index
    })
}

const cleanFieldName = (name, dontTrim) => {
    /**
     
      A column name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and it must start with a letter or underscore. The maximum column name length is 300 characters. A column name cannot use any of the following prefixes:

     */
    let removeExtraSpacesOrUnderScore = (txt) => txt?.replace(/ |\/|\\/gi, '_')?.replace(/__/gi, '_')

    let cleanedWord = removeExtraSpacesOrUnderScore((dontTrim ? name : name?.trim())?.replace(/[^a-z0-9_/\\ ]/gi, ''))
    if (cleanedWord?.startsWith('_')) {
        cleanedWord = cleanedWord?.slice(1, cleanedWord?.length)
        cleanedWord = removeExtraSpacesOrUnderScore(cleanedWord)
    }

    if (!isNaN(cleanedWord?.[0])) {
        cleanedWord = 'a_' + cleanedWord?.slice(0, cleanedWord?.length)
        cleanedWord = removeExtraSpacesOrUnderScore(cleanedWord)


    }
    return cleanedWord
}

const fuseSearch = (key, list, value) => {
    let options = {
        keys: [key]
    }

    let fuse = new Fuse(list, options)

    let result = fuse.search(value)

    return result
}

const matchTemplate = (template, formData) => {

    template = _.unionBy(template, 'column_name')
    formData = _.unionBy(formData, 'key_x1')
    var match = 0
    var matchArr = []
    var matchObj = {}
    let matchValidated = {}
    for (var v of template) {
        v.key_x1 = v.key_x1 * 100
        v.key_x2 = v.key_x2 * 100
        v.key_y1 = v.key_y1 * 100
        v.key_y2 = v.key_y2 * 100

        var score_x1
        var score_x2
        var score_y1
        var score_y2

        var nameResult = fuseSearch('field_name', formData, v.field_name)

        nameResult = nameResult.map(v => v.item)
        if (nameResult?.length > 1) {
            for (var y of nameResult) {
                var isMatch = false
                score_x1 = Math.abs(v.key_x1 - (y.key_x1 * 100))
                score_x2 = Math.abs(v.key_x2 - (y.key_x2 * 100))
                score_y1 = Math.abs(v.key_y1 - (y.key_y1 * 100))
                score_y2 = Math.abs(v.key_y2 - (y.key_y2 * 100))

                if (score_x1 < 1 && score_x2 < 1 && score_y1 < 1 && score_y2 < 1) {
                    matchArr.push(v?.column_name)
                    match++
                    isMatch = true
                    matchObj[v?.column_name] = y?.field_value
                    matchValidated[y?.field_name] = v?.validated_field_name
                }
            }
            if (!isMatch && matchArr.indexOf(v.column_name) === -1) {
                match++
                matchArr.push(v.column_name)
                matchObj[v.column_name] = nameResult[0]?.field_value
                matchValidated[nameResult[0]?.field_name] = v?.validated_field_name
            }
        }
        else {
            if (nameResult?.length) {
                match++
                matchArr.push(v?.column_name)
                matchObj[v?.column_name] = nameResult[0]?.field_value
                matchValidated[nameResult[0]?.field_name] = v?.validated_field_name
            }
        }
    }
    accuracy = (match / template.length) * 100
    console.log('accuracy', `${accuracy}%`)
    return { matchObj, matchValidated }
}

const apiResponse = (res, code, obj = {}, message = null) => res?.status(code)?.send({ ...obj, message: obj?.message || message || codes[code] || codes[500] })

const successFalse = (res, message, code = 500) => {
    let obj = {
        success: false,
        message
    }

    return apiResponse(res, code || 500, obj)
}

const isValidHttpUrl = (string) => {
    let url;
    try {
        url = new URL(string);
    } catch (e) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

const isFalsyValue = (value) => {
    // console.log(value)
    if (typeof value == "number") { //returns boolean form of number, 0 will be false, all others true.
        return Boolean(value)
    }
    else if (typeof value == "boolean") { //if its boolean return opposite boolean, means if boolean true, it will return false, if boolean is false, returns true.
        return !value
    }
    else if (Array.isArray(value)) { //if its empty array it will return true
        return Boolean(value?.length)
    } else if (value && typeof value == "object") { //if empty object, returns true
        return Boolean(Object.keys(value)?.length)
    }
    else { //now lets check for string
        return !value || value == undefined || value == null || value?.trim()?.toLowerCase() == "null" || value?.trim()?.toLowerCase() == "undefined" || value?.trim()?.toLowerCase() == "false"

    }

}

const validateFields = (input, project_id, rule_id) => {
    if (isNull(project_id)) {
        throw new Error(`Missing Params! #pId`)
    }

    if (isNull(rule_id)) {
        throw new Error(`Missing Params! #rId`)
    }

    if (isNull(input)) {
        throw new Error(`Missing Params! #inputId`)
    }
}

const trimWhitespaceEnv = (input) => {
    if (typeof input === 'string') {
        return input?.trim();
    } else if (typeof input === 'number' || typeof input === 'boolean' || input === null || input === undefined) {
        return input;
    }
    else return input;
}

module.exports = {
    runQuery,
    arrayIntoBigqueryArray,
    arrayIntoPostgresqlArray,
    getUniqueArrayOfObjects,
    getAuthUrl,
    validateData,
    updateToken,
    addToken,
    cleanFieldName,
    matchTemplate,
    apiResponse,
    successFalse,
    isNull,
    isValidHttpUrl,
    isFalsyValue,
    validateFields,
    getAuthS3Url,
    runQueryWithReplacements,
    trimWhitespaceEnv
}