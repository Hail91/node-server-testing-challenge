module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // SQLite3 only
    connection: {
      filename: './database/users.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // Foreign key enforcement
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
