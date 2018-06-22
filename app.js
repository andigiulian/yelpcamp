var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('landing');
});

app.get('/campgrounds', function(req, res){
	var campgrounds = [
		{name: 'Salmon Creek', image: 'https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104497f9c77fa1e8bcb0_340.jpg'},
		{name: 'Granite Hill', image: 'https://farm4.staticflickr.com/3483/3211440327_abca47b0a3.jpg'},
		{name: 'Mountain Goat Rest', image: 'https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f9c77fa1e8bcb0_340.jpg'}
	];
	res.render('campgrounds', {campgrounds: campgrounds});
});



app.listen(3000, function(){
	console.log('SERVER RUNNING');
});