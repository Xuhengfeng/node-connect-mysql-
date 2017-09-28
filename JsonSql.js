//运用node.js的方式 添加json的数据到 mysql数据中
let mysql = require('mysql')
let GoodsData = require('./goods.json')   //导入json文件

let connection = mysql.createConnection({
	host :'localhost',
	user :'root',
	password :'',
	port :'3306',
	database:'test'                        //配置数据库
})

connection.connect()


let JsonString=JSON.stringify(GoodsData)   //将对象转为字符串


//添加json的数据到数据库  ,字段json_col
let addSql = 'insert into json_table(id,json_col) values(0,?)' //sql插入语句 ,js文件执行一次,数据就插入一次
let addSqlParams = [JsonString]

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




//json 数据 存入mysql里面只有两个字段,一个是id(默认自增字段,每张表都有),一个是json_col(可以修改字段名称)
