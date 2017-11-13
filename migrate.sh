# Create migration.js, looking migration_example.js in root. WARNING: To create the migration file, the line must be uncommented
# knex migrate:make migration --knexfile db/knexfile.js

# Migrate 
knex migrate:latest --knexfile db/knexfile.js