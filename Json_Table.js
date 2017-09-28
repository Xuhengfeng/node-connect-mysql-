//运用node.js的方式 添加json的数据到 mysql数据中
let mysql = require('mysql')

let connection = mysql.createConnection({
	host :'localhost',
	user :'root',
	password :'',
	port :'3306',
	database:'test'                 //配置数据库
})

connection.connect()

let JsonObject={"result":[{ "productId":"10008", "productName":"小米6","prodcutPrice":"2499","prodcutImg":"5.jpg"}]}
let JsonString=JSON.stringify(JsonObject)             //将对象转为字符串


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



//下一步要考虑 怎么取数据到前端?????????????????????