$(document).ready(function(){
	
	function scrollSec (target) {
	    $('html, body').animate({
			scrollTop: $(target).offset().top - 60
		}, 500);
	}

	$("#home_but").click(function() {
	    scrollSec("#home");
	});

	$("#sat_but").click(function() {
	    scrollSec("#sat");
	});

	$("#about_but").click(function() {
	    scrollSec("#about");
	});

	$("#staff_but").click(function() {
	    scrollSec("#staff");
	});

	$("#more_but").click(function() {
	    scrollSec("#more");
	});

	$("#register_but").click(function() {
	    scrollSec("#register");
	});


	//Gallerific image gallery code copyright Trent Foley
	// We only want these styles applied when javascript is enabled
	$('div.navigation').css({'width' : '300px', 'float' : 'left'});
	$('div.content').css('display', 'block');

	// Initially set opacity on thumbs and add
	// additional styling for hover effect on thumbs
	var onMouseOutOpacity = 0.67;
	$('#thumbs ul.thumbs li').opacityrollover({
		mouseOutOpacity:   onMouseOutOpacity,
		mouseOverOpacity:  1.0,
		fadeSpeed:         'fast',
		exemptionSelector: '.selected'
	});
	
	// Initialize Advanced Galleriffic Gallery
	var gallery = $('#thumbs').galleriffic({
		delay:                     2500,
		numThumbs:                 15,
		preloadAhead:              10,
		enableTopPager:            true,
		enableBottomPager:         true,
		maxPagesToShow:            7,
		imageContainerSel:         '#slideshow',
		controlsContainerSel:      '#controls',
		captionContainerSel:       '#caption',
		loadingContainerSel:       '#loading',
		renderSSControls:          false,
		renderNavControls:         false,
		playLinkText:              null,
		pauseLinkText:             null,
		prevLinkText:              '',
		nextLinkText:              '',
		nextPageLinkText:          'Next &rsaquo;',
		prevPageLinkText:          '&lsaquo; Prev',
		enableHistory:             false,
		autoStart:                 false,
		syncTransitions:           false,
		defaultTransitionDuration: 900,
		enableKeyboardNavigation:  false,
		onSlideChange:             function(prevIndex, nextIndex) {
			// 'this' refers to the gallery, which is an extension of $('#thumbs')
			this.find('ul.thumbs').children()
				.eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
				.eq(nextIndex).fadeTo('fast', 1.0);
		},
		onPageTransitionOut:       function(callback) {
			this.fadeTo('fast', 0.0, callback);
		},
		onPageTransitionIn:        function() {
			this.fadeTo('fast', 1.0);
		}
	});
});