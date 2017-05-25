var http = require('http');
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

//Set up the Get functions
app.get('/',function(req,res){
	res.render('home');
});
app.get('/get', function(req,res){
	var gParameters = [];
	for(var p in req.query){
		gParameters.push({'name':p,'value':req.query[p]})
	}
	var context = {};
	context.dataList = gParameters;
	res.render('get',context);
});

//Set Up the Post functions
app.post('/post', function(req,res){
  var qParams = [];
  for (var p in req.body){
    qParams.push({'name':p,'value':req.body[p]})
  }
  console.log(qParams);
  console.log(req.body);
  var context = {};
  context.dataList = qParams;
  res.render('post', context);
});

app.use(function(request,res){
	res.status(404);
	res.render('404');
});
app.use(function(err, request, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on 52.38.54.183:' + app.get('port') + '. Press Ctrl-C to terminate.'); 
});