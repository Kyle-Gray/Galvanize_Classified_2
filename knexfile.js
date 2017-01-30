// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds'
   },
  production: {
    connection:process.env.DATABASE_URL
  },

};
