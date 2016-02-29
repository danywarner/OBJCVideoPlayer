var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With", "Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET");
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var tutorials = [
	{
		id: 1,
		title: "Android Studio Tutorial For Beginers",
		description: "LEarn how to install android studio and then go through this tutorial to build your very first app",
		iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F-k5gwz_91o" frameborder="0" allowfullscreen></iframe>',
		thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/androidwhite-learn.png"
	},
	{
		id: 2,
		title: "iOS App Icon Design In Photoshop",
		description: "Learn how to install android studio and then go through this tutorial to build your very first app",
		iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jpRBucuml2M" frameborder="0" allowfullscreen></iframe>',
		thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/androidwhite-learn.png"
	}
];


app.get('/tutorials', function(req, res) {
	console.log("GET from server");
	res.send(tutorials);
});

app.listen(6069);