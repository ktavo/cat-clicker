//console.log('Hi from cat-clicker.js');

function init(){
	var catImage = $('.cat-image');
	catImage.click(cat_clicked);
}

function cat_clicked(){
	//console.log('Cat was indeed clicked!');
	var $click_counter = $('.clicks-made');
	var click_count = parseInt($click_counter.text());
	click_count++;
	//console.log(click_count);
	$click_counter.text(click_count);
};

window.addEventListener('load', init, false);