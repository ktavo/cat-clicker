//console.log('Hi from cat-clicker.js');
function cat_clicked(){
	//console.log('Cat was indeed clicked!');
	var $click_counter = $('.clicks-made');
	var click_count = parseInt($click_counter.text());
	click_count++;
	//console.log(click_count);
	$click_counter.text(click_count);
};
//window.addEventListener('load', cat_clicked, false);