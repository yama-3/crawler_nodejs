var redis = require("redis");
var cli = redis.createClient();

//var obj = { "status": 200, "message": "hogefuga" };
//console.log(JSON.stringify(obj));

cli.on("error", function(err) {
	console.log("Error: " + error);
    });

cli.set("k1", "v1", redis.print);

cli.get("k1", function(error, value) {
	console.log("get succes: s" + value);
	cli.quit();
    });

