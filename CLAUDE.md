# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The wbs-helpers project is a Node.js library that provides helper functions and database models for working with PostgreSQL databases in the Context application ecosystem. It's focused on database interactions, Google Cloud service integrations, and utility functions.

## Key Components

1. **Database Models**: 
   - Uses Sequelize ORM for PostgreSQL database interactions
   - Has two model directories:
     - `/models`: Standard models for admin operations
     - `/dynamicModels`: Dynamic models that can be created with different schemas

2. **Helpers**:
   - Utility functions for database operations
   - Integration with Google Cloud services (DocumentAI, Vision, Workflows, Scheduler)
   - Text processing and validation utilities
   - Authentication and token management

3. **Configuration**:
   - Database connection management
   - Environment-specific configuration

## Development Commands

```bash
# Start the development server
npm run dev

# Start the production server
npm run start

# Database Management
npm run createDB                # Create development database
npm run createDBProduction      # Create production database
npm run createMigration         # Run migrations for development
npm run createMigrationProduction # Run migrations for production
npm run createAll               # Create DB and run migrations for development
npm run createAllProduction     # Create DB and run migrations for production

# Specific Sequelize Commands
npm run sequelize:context_oltp:create           # Create development OLTP database
npm run sequelize:context_oltp:migrate          # Run migrations for development OLTP database
npm run sequelize:context:migrate               # Run migrations for development context database
npm run sequelize:context_oltp:migrate:undo     # Undo last migration for development OLTP database
npm run sequelize:context_oltp_prod:create      # Create production OLTP database
npm run sequelize:context_oltp_prod:migrate     # Run migrations for production OLTP database
npm run sequelize:context_prod:migrate          # Run migrations for production context database
```

## Code Architecture

### Database Initialization

The database connection is initialized in `/config/db.js` with two main methods:
- `init`: Initializes a database connection and loads models
- `initPromise`: Promise-based version of the initialization

Both methods:
1. Create a Sequelize instance
2. Authenticate the connection
3. Sync the models (with option for schema alterations)
4. Create schemas if needed
5. Load models

### Model Loading

Two separate model loading systems:
1. `/models/index.js`: Loads models from subdirectories for admin operations
2. `/dynamicModels/index.js`: Loads models that can be created with different schemas

### Helper Functions

The helpers (`/helpers/index.js`) include a variety of utility functions:
- Google Cloud service integrations
- PostgreSQL query utilities
- Authentication and token management
- Text processing and validation
- PDF and form processing

## Working with the Codebase

When adding new functionality:
1. For new models, add them to the appropriate directory (`/models` or `/dynamicModels`)
2. Follow the Sequelize model structure used in existing files
3. Utility functions should be added to `/helpers/index.js` and exported
4. Database configuration changes should be made in `/config/db.js` or `/config/config.js`

## Dependencies

Key dependencies:
- Sequelize ORM for database operations
- Google Cloud libraries for various services
- JWT for authentication
- Axios for HTTP requests
- Moment for date/time operations
- Fuse.js for fuzzy searching