//运用node.js方式操作 删除 mysql的数据
let mysql = require('mysql')

let connection = mysql.createConnection({
	host :'localhost',
	user :'root',
	password :'',
	port :'3306',
	database:'websites'                 //配置数据库
})

connection.connect()

let delSql = 'delete from websites where id=7'       

connection.query(delSql,(err,result)=>{
	if(err){
		console.log('[delete error]-',err.message)
		return
	}
	console.log('------------delete---------------------')
	console.log('delete affectedRows',result.affectedRows)
	console.log('---------------------------------------')
})

connection.end()
