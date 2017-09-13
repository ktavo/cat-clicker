//console.log('Hi from cat-clicker.js');

var catsInfo = new Array();

function init(){


	var Venus = {
		'name': 'Venus',
		'clicksMade': 0,
		'image': 'images/venus.jpg'
	};
	var Isis = {
		'name': 'Isis',
		'clicksMade': 0,
		'image': 'images/isis.jpg'
	};
	var Fluffy = {
		'name': 'Fluffy',
		'clicksMade': 0,
		'image': 'images/fluffy.jpg'
	};
	var Blacky = {
		'name': 'Blacky',
		'clicksMade': 0,
		'image': 'images/black-cat.jpg'
	};
	var Leo = {
		'name': 'Leo',
		'clicksMade': 0,
		'image': 'images/leopard-like.jpg'
	};
	var Trippy = {
		'name': 'Trippy',
		'clicksMade': 0,
		'image': 'images/trippyCat.jpg'
	};
	var JohnSnow = {
		'name': 'JohnSnow',
		'clicksMade': 0,
		'image': 'images/whitecat.jpg'
	};

	catsInfo = {Venus, Isis, Fluffy, Blacky, Leo, Trippy, JohnSnow};

	//console.log(catsInfo);

	//Loading first cat by default
	for (var key in catsInfo)
	{
		$('#theCat .main-cat-name').text(catsInfo[key].name);
		$('#cat-image').attr('src', catsInfo[key].image);
		$('#clicks-made').text(catsInfo[key].clicksMade);
		break;
	}
	
	var $catList = $('#cat-list');
	for (var cat in catsInfo)
	{
		$catList.append('<li class="listed-cat"></li>');
		$lastListedCat = $('.listed-cat').last();
		$lastListedCat.append('<div class="cat-name-container"><p><a class="cat-name">' + catsInfo[cat].name + '</a></p></div>');
		$lastListedCat.append('<div class="cat-thumbnail-container"><img src="' + catsInfo[cat].image + '"></div>');
		$lastListedCat.click(listed_cat_clicked);
	}
	var catImage = $('#cat-image');
	catImage.click(cat_clicked);
}

function listed_cat_clicked(){
	var catName = $(this).find('.cat-name').text();
	alert('You clicked: ' + catName);
	$('#theCat .main-cat-name').text(catsInfo[catName].name);
	$('#cat-image').attr('src', catsInfo[catName].image);
	$('#clicks-made').text(catsInfo[catName].clicksMade);
}

function cat_clicked(){
	var catName = $('.main-cat-name').text();
	console.log('Cat was indeed clicked! ' + catName);
	var $click_counter = $('#clicks-made');
	var click_count = parseInt($click_counter.text());
	click_count++;
	//console.log(click_count);
	$click_counter.text(click_count);
	catsInfo[catName].clicksMade = click_count;
};

window.addEventListener('load', init, false);