const mysql = require('mysql');

let pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'vuedata'
});

let query = ( sql, values ) => {

  return new Promise(( resolve, reject ) => {
    pool.getConnection( (err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}

// 用户登录
exports.login = ( value ) => {
  let _sql = "select * from users where username=? and password = ?;"
  return query( _sql, value )
}
// 用户订单
exports.order = ( value ) => {
  let _sql = "select * from orders where owner=?"
  return query( _sql, value )
}