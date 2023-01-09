const runQuery = async (db, query) => {
    let queryType = query?.split(' ')[0]?.toUpperCase()
    let Type = (db?.QueryTypes?.[queryType]) ? (db?.QueryTypes?.[queryType]) : (db?.QueryTypes?.["SELECT"]) 
    const data = await db.query(query, { type: Type })
    return Array.isArray(data) ? data?.flat() : data
}


module.exports = {
    runQuery
}