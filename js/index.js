$(document).ready(function () {
	
	$('body').css('opacity',1);

	var s = $("body").width();

	var posterContainer = (s-350)/2;

	$(".fancy_title").lettering();

	$(".word_split").lettering('words');

	$(".stripes").lettering('words');

	$(".line_split").lettering('lines');

	var category = ['Coffee', 'Seattle', 'Beer', 'Classic', 'Presidential-Race-2016', ];

	function createMenu(){
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
	}

	createMenu();
	function updateMenu(){
		$('#submit-btn').empty();
		$('#submit-btn').append('<option value="select" >select</option>');
		category.splice(0,1);
		createMenu();
	}

	var clear = function () {
		TweenLight.to('#masterContainer',5, {delay: 0,ease:Elastic.easeOut});
		$('#masterContainer').
		$('#masterContainer').hide('slow');
		$('.poster').hide('slow');
		$('.stripes').hide('slow');
	};

	var fadePosterIn = function(){
		$('#masterContainer').fadeIn('slow'),
		$('.stripes').fadeIn('slow')
	}

	$('form').on('change', submitCategory);
	
	var test = new TimelineMax('#masterContainer',500,{ ease: Power0.easeOut, left:0 });		

	function submitCategory(event) {
		
		event.preventDefault();

		Category = $('#submit-btn').val();

		if ( Category == 'Coffee' && $('#coffee').hasClass('active')) {
			updateMenu();
			$('#coffee').removeClass('active');
			var tl = new TimelineMax(); 
			tl.to('.calmContainer',.5,{transform: 'rotate(15deg) translateX(330px) scale(1.2)',zindex:-99,delay: .5,ease: Power4.easeNone, y: -1000 })
			tl.to('.coffeeContainer',1,{left:posterContainer,right:posterContainer,top:0,display:'block',rotation: "+=720", ease: Linear.easeNone },0)
			count++;

		} else if (Category == 'Seattle') {
			updateMenu();
			var tlb = new TimelineMax(); 
			tlb.to('.coffeeContainer',.5,{transform: 'rotate(15deg) translateX(-230px) scale(1.2)',zindex:-99,delay: .5,ease: Power4.easeNone })
			tlb.to('.seattleContainer',1,{left:posterContainer,right:posterContainer,top:0,display:'block',rotation: "+=720", ease: Linear.easeNone },0)


		} else if (Category == 'Beer') {
			updateMenu();
			var tl = new TimelineMax();
			tl.to('.seattleContainer',.5,{transform: 'rotate(15deg) translateY(230px) translateX(230px) scale(1.2)',zindex:-99,delay: .5,ease: Power4.easeNone, y: -1000 })
			tl.to('.beerContainer',1,{left:posterContainer,right:posterContainer,top:0,display:'block',rotation: "+=720", ease: Linear.easeNone },0)


		} else if (Category == 'Classic') {
			updateMenu();
			var tl = new TimelineMax();
			tl.to('.beerContainer',.5,{transform: 'rotate(15deg) translateY(430px) translateX(-430px) scale(1.2)',zindex:-99,delay: .5,ease: Power4.easeNone, y: -1000 })
			tl.to('.classicContainer',1,{left:posterContainer,right:posterContainer,top:0,display:'block',rotation: "+=720", ease: Linear.easeNone },0)


		} else if (Category == 'Presidential-Race-2016') {
			updateMenu();
			var tl = new TimelineMax();
			tl.to('.classicContainer',.5,{transform: 'rotate(15deg) translateY(430px) translateX(430px) scale(1.2)',zindex:-99,delay: .5,ease: Power4.easeNone, y: -1000 })
			tl.to('.presContainer',1,{left:posterContainer,right:posterContainer,top:0,display:'block',rotation: "+=720", ease: Linear.easeNone },0)
			$('#submit-btn').hide();


		} else{
			console.log('sorry')
		}
	}
});
// });
