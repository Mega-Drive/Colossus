/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Tilt
5. Init Milestones
6. Init Timeline
7. Init Gallery


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
	initMilestones();
	initTimeline();
	initGallery();

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

	5. Init Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = '<span class="progress_perc">' + ele.attr('data-sign-before') + '</span>';
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = '<span class="progress_perc">' + ele.attr('data-sign-after') + '</span>';
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut,  
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

	/* 

	6. Init Timeline

	*/

	function initTimeline()
	{
		if($('.timeline_slider').length)
		{
			var swiper = new Swiper('.timeline_slider',
			{
				slidesPerView: 'auto',
				spaceBetween: 5,
				freeMode: true,
				freeModeMomentum: true,
				freeModeMomentumRatio: 0.2
			});
		}

		var buttons = $('.swiper_button');
		var panels = $('.timeline_panel');

		buttons.each(function()
		{
			var button = $(this);
			button.on('click', function()
			{
				buttons.removeClass('active');
				button.addClass('active');
				var clickedIndex = buttons.index(this);
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
				$(window).trigger('resize.px.parallax');
			});
		});
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

});