$(document).ready(function () {
	var innerWindow;
	var s;

	function checkWindow() {
		s = $("body").width();
		innerWindow = s / .90;
		$('#container').css("width", "'" + innerWindow + "'");
	}
	checkWindow();
	console.log(innerWindow);


	$(".fancy_title").lettering();

	$(".word_split").lettering('words');

	$(".stripes").lettering('words');

	$(".line_split").lettering('lines');

	var category = ['Coffee', 'Seattle', 'Beer', 'Classic', 'Presidential-Race-2016', ];

	for (i = 0; i < category.length; i++) {
		$('#submit-btn').append('<option value="' + category[i] + '">' + category[i] + '</option>');
		$('#submit-btn').css({
			'position': 'relative',
			'left': '0%',
			'right': '0%',
			'top': '-50px',
			'text-align': 'center'
		});
	}
	var clear = function () {
		$('#masterContainer').hide('slow');
		$('.poster').hide('slow');
		$('.stripes').hide('slow');
	};
	var fadePosterIn = function(){
		$('#masterContainer').fadeIn('slow'),
		$('.stripes').fadeIn('slow')
	}


	$('form').on('change', submitCategory);
	var clear;

	function submitCategory(event) {

		event.preventDefault();

		Category = $('#submit-btn').val();

		if (Category == 'Coffee') {
			clear();
			setTimeout([
				fadePosterIn(),
				$('.coffeeContainer').fadeIn('slow'),
			], 500);
		} else if (Category == 'Seattle') {
			clear();
			setTimeout([
				fadePosterIn(),
				$('.seattleContainer').fadeIn('slow'),
			], 500);

		} else if (Category == 'Beer') {
			clear();
			setTimeout([
				fadePosterIn(),
				$('.beerContainer').fadeIn('slow'),			
			], 500);

		} else if (Category == 'Classic') {
			clear();
			setTimeout([
				fadePosterIn(),
				$('.classicContainer').fadeIn('slow'),			
			], 500);

		} else if (Category == 'Presidential-Race-2016') {
			clear();
			setTimeout([
				fadePosterIn(),
				$('.presContainer').fadeIn('slow'),			
			], 500);

		}
	}
});