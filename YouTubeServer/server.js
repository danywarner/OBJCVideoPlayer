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
		iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/F-k5gwz_91o" frameborder="0" allowfullscreen></iframe></div>',
		thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/androidwhite-learn.png"
	},
	{
		id: 2,
		title: "iOS App Icon Design In Photoshop",
		description: "I'll teach you how to do some art-hacking to make a nice iOS app icon when you don't have any design skills. I'll also teach you how to export the app icon for the various sizes you need for the Apple App Store.",
		iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/jpRBucuml2M" frameborder="0" allowfullscreen></iframe></div>',
		thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/ios-image-sizes.png"
	},
	{
		id: 3,
		title: "how to support hight resolution on iOS",
		description: "Learn how to support multiple screen resolutions and devices such as iPhone 4, iPhone 5, iPhone 6, iPhone 6 Plus",
		iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/WOnczJSsMqk" frameborder="0" allowfullscreen></iframe></div>',
		thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/tv-test.png"
	}, 
	{
		id: 4,
		title: "Photoshop Tutorial For Beginners How To Create a Logo",
		description: "Learn how to make a professional logo in Photoshop without any design experience. This is a Photoshop tutorial for beginners that will give you all the basics of Photoshop that you need to make a logo.",
		iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/CrKnswpftp4" frameborder="0" allowfullscreen></iframe></div>',
		thumbnail: "https://s3-us-west-2.amazonaws.com/devslopesvideo/logo.png"
	}
];


var comments = [
	{
		username: "Jack94d",
		comment: "This video was really cool. Any chance whatever the fawk"
	}
];


app.put('/comments',function(req,res) {
	var someOBJ = req.body;

	var theID = someOBJ.uniqueId;

	//talk to the DB, find the record by id
	//the replace the existing record with req.body
	res.send("successfully updated");
});

app.post('/comments', function(req, res) {
	var comment = req.body;
	if (comment.username && comment.comment) {
		comments.push(comment);
	} else {
		res.send("you posted invalid data");
	}
	res.send("you successfully posted a new comment");
	console.log(comments);
});

app.get('/tutorials', function(req, res) {
	console.log("GET from server");
	res.send(tutorials);
});

app.listen(6069);