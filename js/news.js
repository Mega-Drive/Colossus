/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init ScrollMagic


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
		// Link reveal
		if($('.link_box').length)
		{
			var links = $('.link_box');
			links.each(function()
			{
				var link = this;
				var scene2 = new ScrollMagic.Scene(
				{
					triggerElement: link,
					triggerHook: 'onEnter',
					reverse:false,
					offset:300
				})
				.setClassToggle(link, 'active')
				.addTo(ctrl);
			});
		}
	}

});