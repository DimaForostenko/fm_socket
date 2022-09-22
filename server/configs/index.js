module.exports = {
  port: 5000,
  db: {
    development: {
      host: 'localhost',
      port: 27017,
      database: "fm_socket"
    },
    test: {
      host: 'localhost',
      port: 27017,
      database: "fm_socket_test"
    }
  }
};