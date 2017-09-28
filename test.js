//运用node.js 方式连接到 数据库  查询数据
let mysql = require('mysql')                  //引入数据库模块
let connection = mysql.createConnection({     //配置参数
	host :'localhost',
	user : 'root',
	password : '',
	port :'3306',                             //默认端口号是3306 
	database : 'websites'
})

connection.connect()                           //连接数据库


let sql = 'select * from websites'            //sql语句查询数据库

connection.query(sql,(err,result)=>{          //根据sql语句进行查询操作
	if(err){
		console.log('[select error] -',err.message)
		return
	}
	console.log('-------------select-------------------')
	console.log(result)
	console.log('--------------------------------------')
})

connection.end()                              //结束连接
