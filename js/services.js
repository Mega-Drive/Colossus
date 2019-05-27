/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init ScrollMagic
5. Init Tabs
6. Init Gallery


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
	initScrollMagic();
	initTabs();
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

	4. Init ScrollMagic

	*/

	function initScrollMagic()
	{
		// Service icon scale up effect
		if($('.service').length)
		{
			var services = $('.service_icon > div img');
			var tween1 = TweenMax.staggerFrom(services, 1, {scale:0.5, alpha:0}, 0.05);
			var scene1 = new ScrollMagic.Scene(
			{
				triggerElement:'#service_trigger',
				triggerHook:'onEnter',
				reverse: false
			})
			.setTween(tween1)
			.addTo(ctrl);
		}
	}

	/* 

	5. Init Tabs

	*/

	function initTabs()
	{
		if($('.tab').length)
		{
			var tabs = $('.tab');
			var panels = $('.tab_panel');
			$('.tab').on('click', function()
			{
				var tab = $(this);
				tabs.removeClass('active');
				tab.addClass('active');
				var tabIndex = tabs.index(tab);
				panels.removeClass('active');
				$(panels[tabIndex]).addClass('active');
				$(window).trigger('resize.px.parallax');
			});
		}
	}

	/* 

	6. Init Gallery

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