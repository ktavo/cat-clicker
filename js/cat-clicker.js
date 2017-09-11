//console.log('Hi from cat-clicker.js');

function init(){
	var catImage = $('.cat-image');
	var elGatoName = ' elGato';
	var theCatName = ' theCat';
	$('#elGato p:first').append(elGatoName);
	$('#theCat p:first').append(theCatName);
	catImage.click(cat_clicked);
}

function cat_clicked(){
	var $parentId = $(this).parent().attr('id');
	//console.log('Cat was indeed clicked! from: ' + $parentId);
	var $click_counter = $('#'+ $parentId +' .clicks-made');
	var click_count = parseInt($click_counter.text());
	click_count++;
	//console.log(click_count);
	$click_counter.text(click_count);
};

window.addEventListener('load', init, false);