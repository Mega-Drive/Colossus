/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Tilt
5. Init Testimonials
6. Init Accordions
7. Init Gallery
8. Init ScrollMagic
9. Init Home Slider


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var ctrl = new ScrollMagic.Controller();

	setHeader();
	initMenu();
	initTilt();
	initTestimonials();
	initAccordions();
	initGallery();
	initScrollMagic();
	initHomeSlider();

	$(window).on('resize', function()
	{
		setHeader();

		if($(window).innerWidth() > 991)
		{
			if(menu.hasClass('active'))
			{
				menu.removeClass('active');
			}
		}

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		var header = $('.header');
		var menuBtn = $('.menu_button_wrap');

		if($(window).scrollTop() > 180)
		{
			header.addClass('scrolled');
			menuBtn.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
			menuBtn.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length && $('.menu_button').length)
		{
			var hamburger = $('.menu_button');

			hamburger.on('click', function()
			{
				menu.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Tilt

	*/

	function initTilt()
	{
		var tilt = $('.js-tilt').tilt();
	}

	/* 

	5. Init Testimonials

	*/

	function initTestimonials()
	{
		if($('.testimonials_slider').length)
		{
			var testSlider = $('.testimonials_slider');
			testSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				autoplayTimeout:8000,
				autoplayHoverPause:true,
				smartSpeed:1200,
				nav:false,
				dots:true
			});

			if($('.test_prev').length)
			{
				var prev = $('.test_prev');
				prev.on('click', function()
				{
					testSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.test_next').length)
			{
				var next = $('.test_next');
				next.on('click', function()
				{
					testSlider.trigger('next.owl.carousel');
				});
			}
		}	
	}

	/* 

	6. Init Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);

				if(acc.hasClass('active'))
				{
					var panel = $(acc.find($('.accordion_panel')));
					var panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						var panel = $(acc.find($('.accordion_panel')));
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						var panel = $(acc.find($('.accordion_panel')));
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}

	/* 

	7. Init Gallery

	*/

	function initGallery()
	{
		if($('.gallery_slider').length)
		{
			var gallerySlider = $('.gallery_slider');
			gallerySlider.owlCarousel(
			{
				items:8,
				loop:true,
				autoplay:false,
				autoplayTimeout:8000,
				autoplayHoverPause:true,
				nav:false,
				dots:false,
				responsive:
				{
					0:{items:3},
					768:{items:4},
					991:{items:6},
					1200:{items:8}
				}
			});

			$(document).ready(function()
			{
				$('.gallery_slide').magnificPopup(
				{
					type:'image',
					gallery:
					{
						enabled: true
					}
				});
			});
		}
	}

	/* 

	8. Init ScrollMagic

	*/

	function initScrollMagic()
	{
		// Service icon scale up effect
		if($('.service').length)
		{
			var services = $('.service_icon > div img');
			var tween1 = TweenMax.staggerFrom(services, 1, {scale:0.5}, 0.05);
			var scene1 = new ScrollMagic.Scene(
			{
				triggerElement:'#service_trigger',
				triggerHook:'onEnter',
				reverse: false
			})
			.setTween(tween1)
			.addTo(ctrl);
		}

		// Work image reveal effect
		if($('.magic_a').length)
		{
			var elements = $('.magic_a');
			elements.each(function()
			{
				var element = this;

				var scene2 = new ScrollMagic.Scene(
				{
					triggerElement:element,
					triggerHook:'onEnter',
					reverse: false
				})
				.setClassToggle(element, 'active')
				.addTo(ctrl);
			});
		}

		// Clients scale up effect
		if($('.client').length)
		{
			var clients = $('.client > div img');
			var tween2 = TweenMax.staggerFrom(clients, 1, {scale:0.5}, 0.05);
			var scene3 = new ScrollMagic.Scene(
			{
				triggerElement:'#clients_trigger',
				triggerHook:'onEnter',
				reverse: false
			})
			.setTween(tween2)
			.addTo(ctrl);
		}
	}

	/* 

	9. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var slider = $('.home_slider');
			var homeContent = $('.home_content');
			var sliderBar = $('#slider_bar > div');

			// Initialized has to go before the slider initialization
			slider.on('initialized.owl.carousel', function(event)
			{
				sliderBar.css({width: "100%", transition: "width 8000ms"});
			});

			slider.owlCarousel(
			{
				items:1,
				animateOut: 'slideOutDown',
   				animateIn: 'fadeIn',
				loop:true,
				autoplay:true,
				autoplayTimeout:8000,
				smartSpeed:1200,
				mouseDrag:false,
				nav:false,
				dots:true
			});

			slider.on('translate.owl.carousel', function(event)
			{
				sliderBar.css({width: "0%", transition: "width 0s"});
				slider.trigger('stop.owl.autoplay');
        		slider.trigger('play.owl.autoplay');
			});

			slider.on('translated.owl.carousel', function(event)
			{
				//subtract smartSpeed value from the autoplayTimeout value
				sliderBar.css({width: "100%", transition: "width 6800ms"});
			});

			slider.on('change.owl.carousel', function(event)
			{
				$('.home_content').removeClass('active');
			});

			slider.on('changed.owl.carousel', function(event)
			{
				var currentItem = $('.slide', slider).eq(event.item.index);
				var asd = currentItem.find('.home_content');
				asd.addClass('active');
			});
		}
	}

});