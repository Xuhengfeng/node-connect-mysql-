//用node.js操作 mysql 更新数据
let mysql = require('mysql')

let connection = mysql.createConnection({
	host :'localhost',
	user :'root',
	password :'',
	port :'3306',
	database:'websites'
})

connection.connect()

let updateSql = 'update websites set name = ?,url = ? where id = ?'
let updateSqlParams = ['菜鸟移动站','https://m.runoob.com',6]

connection.query(updateSql,updateSqlParams,(err,result)=>{
	if(err){
		console.log('[update error]-',err.message)
		return
	}
	console.log('----------update-------------------')
	console.log('update affectedRows',result.affectedRows)
	console.log('------------------------------------')
})

connection.end()
