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
		$('.poster').fadeOut();
		$('.stripes').fadeOut();
	};


	$('form').on('change', submitCategory);
	var clear;

	function submitCategory(event) {

		event.preventDefault();

		currentCategory = $('#submit-btn').val();

		if (currentCategory == 'Coffee') {
			$('#masterContainer').hide('slow');
			$('.poster').hide('slow');
			$('.stripes').hide('slow');
			setTimeout([
				$('.coffeeContainer').fadeIn('slow'),
				$('.stripes').fadeIn('slow'),
				$('#masterContainer').fadeIn('slow')
			], 500);
		} else if (currentCategory == 'Seattle') {
			$('#masterContainer').hide("slow");
			$('.poster').hide('slow');
			$('.stripes').hide('slow');
			setTimeout([
				$('.seattleContainer').fadeIn('slow'),
				$('.stripes').fadeIn('slow'),
				$('#masterContainer').fadeIn('slow')
			], 500);

		} else if (currentCategory == 'Beer') {
			$('#masterContainer').hide("slow");
			$('.poster').hide('slow');
			$('.stripes').hide('slow');
			setTimeout([
				$('.beerContainer').fadeIn('slow'),
				$('.stripes').fadeIn('slow'),
				$('#masterContainer').fadeIn('slow')
			], 500);

		} else if (currentCategory == 'Classic') {
			$('#masterContainer').hide("slow");
			$('.poster').hide('slow');
			$('.stripes').hide('slow');
			setTimeout([
				$('.classicContainer').fadeIn('slow'),
				$('.stripes').fadeIn('slow'),
				$('#masterContainer').fadeIn('slow')
			], 500);

		} else if (currentCategory == 'Presidential-Race-2016') {
			$('#masterContainer').hide("slow");
			$('.poster').hide('slow');
			$('.stripes').hide('slow');
			setTimeout([
				$('.presContainer').fadeIn('slow'),
				$('.stripes').fadeIn('slow'),
				$('#masterContainer').fadeIn('slow')
			], 500);

		}
	}
});