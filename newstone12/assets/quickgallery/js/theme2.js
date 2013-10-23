jQuery.fn.quickGalTheme2 = function(attribs) {
    this.css("width", attribs.width).css("height", attribs.height).children(".slides").cycle({
        width: attribs.width,
        height: attribs.height,
        timeout: attribs.timer,
        pager: ".thumbs" + attribs.uid,
        prev: "." + attribs.uid + " .slideNav a.slidePagerPrev, ." + attribs.uid + " .prevNext a.slidePrev",
        next: "." + attribs.uid + " .slideNav a.slidePagerNext, ." + attribs.uid + " .prevNext a.slideNext",
        pause: true,
		pauseOnPagerHover: true,
        fx: attribs.effect,
        speed: attribs.transitionTime,
        sync: attribs.sync,
        easing: attribs.easing,
		pagerEvent: attribs.thumbTrigger,
        pagerAnchorBuilder: function(idx, slide) {
            return ".quickgalleryThumbs.thumbs" + attribs.uid + " div.thumbsCntWrap:eq(" + idx + ")";
        },
		updateActivePagerLink: function(pager, currSlideIndex, activePagerClass){
			thumbsPage = Math.ceil((currSlideIndex+1)/attribs.thumbsPerPage) - 1;
			jQuery(pager).children(".thumbSlides").cycle(thumbsPage);
			jQuery(pager).find(".thumbsCntWrap").removeClass('activeSlide').filter('.thumbsCntWrap:eq('+currSlideIndex+')').addClass('activeSlide'); 
		}
    });
	if(this.find(".slide").size()>attribs.thumbsPerPage){
		this.siblings(".quickgalleryThumbs").nwrapper({wrapEvery:attribs.thumbsPerPage}).wrapInner('<div class="thumbSlides" />').append('<div class="thumbsNav T' + attribs.uid + '"><a href="#" class="thumbsPagerPrev"></a><div class="thumbsPager"></div><a href="#" class="thumbsPagerNext"></a></div>');
	
		this.siblings(".quickgalleryThumbs").children(".thumbSlides").cycle({
			timeout:0, 
			pager:".thumbsNav.T"+attribs.uid+" .thumbsPager",
			prev:".thumbsNav.T"+attribs.uid+" .thumbsPagerPrev",
			next:".thumbsNav.T"+attribs.uid+" .thumbsPagerNext",
			fx:"scrollHorz",
			easing:attribs.easing,
			speed:attribs.transitionTime
		});
	}
    
	
	if(typeof isIE === 'undefined'){this.siblings(".quickgalleryThumbs").preloader();}
	if(typeof isIE8 !== 'undefined'){
		this.find(".slide").width(attribs.width).height(attribs.height);
	}
	thumbsNav = this.siblings(".quickgalleryThumbs").children(".thumbsNav");
	myW = thumbsNav.width();
	thumbsNav.css("paddingLeft", (attribs.width - myW)/2);
	
	this.siblings(".quickgalleryThumbs").find(".imageThumbTitle").equalHeights();
	
	this.children(".slides").cycle("pause");
    jQuery("." + attribs.uid + " .prevNext a.slidePrev, ." + attribs.uid + " .prevNext a.slideNext").fadeTo(0, .1).hover(function() {
        jQuery(this).stop(true, true).fadeTo("fast", .8);
    }, function() {
        jQuery(this).fadeTo("fast", .1);
    });
    this.find("a.quickCbox").colorbox({
        rel: "id" + attribs.uid, maxWidth:"95%",maxHeight:"95%"
    });
	if(attribs.thumbTrigger == "mouseover"){
		jQuery(".thumbsCnt > a.imageThumb").click(function(){
			myId = jQuery(this).parents(".thumbsCntWrap").index();
			jQuery(".quickgalleryWrap .slides .slide:eq("+myId+") a").click();
		});
	}
	console.log(attribs);
	this.find(".titledesc .title:empty, .titledesc .description:empty").each(function(){
		if(jQuery(this).siblings().text()==""){
			jQuery(this).parent().hide();
		}
	});
	if(typeof isIE === 'undefined'){
		this.preloader({
			ondone:function(){
				if(attribs.autoplay == 1){jQuery(".quickgalleryWrap."+attribs.uid).children(".slides").cycle('resume');}
			}
		});
	}else{
		if(attribs.autoplay == 1){jQuery(".quickgalleryWrap."+attribs.uid).children(".slides").cycle('resume');}
	}
};