var express=require("express")
var app=express()
const https=require("https");
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
var router = express.Router();

var server = require('http').Server(app);

var url="https://api.fixer.io/latest?base="



app.post("/webhook",function(req,res){
 
  	
		
	var t=req.body.result.parameters.t[0]; 
	var a=req.body.result.parameters.f[0]["amount"];
	var f=req.body.result.parameters.f[0]["currency"];
		
	
	var exchange_rate;
	https.get(url+f,resp=>
		{
			let data=""
			resp.on("data",(chunk)=>
			{
				data+=chunk;
			});
			resp.on("end",()=>
			{
				
				r=(data.rates[t]);
				var c=a;
				var output=" "+amount+" " +convert_from+" equals "+c+" "+convert_to;
				
				         res.setHeader('Content-Type', 'application/json');
				         res.send(JSON.stringify({ 'speech': output, 'displayText': output }));
				
			});

		}).on("error",err=>{
			var error="error"+err.message;	
			// If there is an error let the user know
			     res.setHeader('Content-Type', 'application/json');
			    res.send(JSON.stringify({ 'speech': error, 'displayText': error }));
		});
	
});
app.listen(8080,function(){
console.log("Server is running")});
