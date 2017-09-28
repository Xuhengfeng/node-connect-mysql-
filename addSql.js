//运用nodejs方式 插入数据到数据库   添加数据
let mysql = require('mysql')

//连接池
let connection = mysql.createConnection({  //配置参数
	host : 'localhost',
	user : 'root',
	password : '',
	port : '3306',
	database : 'websites'
})

connection.connect()

let addSql = 'insert into websites(id,name,url,alexa,country) values(0,?,?,?,?)' //sql插入语句 ,js文件执行一次,数据就插入一次
let addSqlParams = ['菜鸟工具','https://c.runoob.com','23453','cn']

connection.query(addSql,addSqlParams,(err,result)=>{
	if(err){
		console.log('[insert error]-',err.message)
		return
	}
	console.log('----------insert--------------')
	console.log('insert id:'+result.insertId)
	console.log('----------------------------')
})

connection.end()
