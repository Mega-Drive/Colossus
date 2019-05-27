/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Scroll
3. Init ScrollMagic


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var ctrl = new ScrollMagic.Controller();

	initScroll();
	initScrollMagic();

	/* 

	2. Init Scroll

	*/

	function initScroll()
	{
		if($('.scrollLink').length)
		{
			var links = $('.scrollLink');
			links.each(function(i)
			{
				var link = $(this);
				link.on('click', function()
				{
					var target = link.data('scroll-to');
					if($(target).length)
					{
						TweenMax.to(window, 1.5, {scrollTo:target, ease:Power2.easeInOut});
					}
				});
			});
		}
	}

	/* 

	3. Init ScrollMagic

	*/

	function initScrollMagic()
	{
		var videos = $('.page_option_video');
		videos.each(function()
		{
			this.pause();
		});

		// Clients scale up effect
		if($('.page_option').length)
		{
			var items = $('.page_option');
			var tween = TweenMax.staggerTo(items, 2, {alpha:1, y:-30, ease:Power2.easeOut}, 0.15);
			var scene = new ScrollMagic.Scene(
			{
				triggerElement:'.page_option',
				triggerHook:'onEnter',
				reverse: false,
				offset:200
			})
			.on('start', function()
			{
				videos.each(function()
				{
					this.play();
				});
			})
			.setTween(tween)
			.addTo(ctrl);
		}
	}

});