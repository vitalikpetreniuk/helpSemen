// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import 'slick-carousel'

document.addEventListener('DOMContentLoaded', () => {

	const burger = document.querySelector('.header__burger')
	const social = document.getElementById('social')
	
	burger.addEventListener('click', function () {
		if (!social.classList.contains('active')) {
			social.classList.add('active')
		} else {
			social.classList.remove('active')
		}
	})
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.header').addClass('grey')
		} else {
			$('.header').removeClass('grey')
		}
		
		if ($(this).scrollTop() > 600) {
			$('.scroll-top').addClass('show')
		} else {
			$('.scroll-top').removeClass('show')
		}
	})

	$('.scroll-top').click(() => {
		window.scrollTo(pageYOffset, 0)
	})
	
	$('#info-slider').slick({
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1
	})
	
	$('#docs-slider').slick({
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	})

	$('#operation-slider').slick({
		dots: true,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: true,
		// centerPadding: '15px',
	})

	function copytext(el) {
		var $tmp = $("<textarea>");
		$("body").append($tmp);
		$tmp.val($(el).text()).select();
		document.execCommand("copy");
		$tmp.remove();
		console.log(el)
	}
	
	$('.requisites__card-numbers span').on('click', function () {
		copytext($(this))
		$(this).parent().next().toggleClass('show')
	})

})