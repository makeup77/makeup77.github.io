jQuery.fn.quickGalTheme5 = function(attribs) {
	var preload =[new Image().src=attribs.sitePath+"/plugins/content/quickgallery/images/preloader.gif"];
	this.children(".slides").children(".slide").css("width", attribs.width).find(".titledesc").equalHeights();
	if(typeof isIE === 'undefined'){this.preloader();}
	this.children(".slides").nwrapper({wrapEvery:attribs.slidesPerRow});
	//console.log("tpp:"+attribs.thumbsPerPage+",spr:"+attribs.slidesPerRow);
	myGroupWrap = Math.ceil(attribs.thumbsPerPage / attribs.slidesPerRow);
	this.children(".slides").nwrapper({wrapEvery:myGroupWrap, groupClass:"pageGroup"});
	if(this.children(".slides").children(".pageGroup").size()==1){
		this.children(".slides").siblings(".slideNav").remove();
	}
	
    this.find("a.quickCbox").colorbox({
        rel: "id" + attribs.uid, maxWidth:"95%",maxHeight:"95%"
    });
	
	this.find(".titledesc .title:empty, .titledesc .description:empty").each(function(){
		if(jQuery(this).siblings().text()==""){
			jQuery(this).parent().hide().parents(".slide").css("borderRadius", 0);
		}
	});
	
	pageCount = this.find(".slides").children().size();
	if(pageCount>1){
		this.children(".slides").cycle({
			pager: "." + attribs.uid + " .slidePager",
			prev: "." + attribs.uid + " .slideNav a.slidePagerPrev, ." + attribs.uid + " .prevNext a.slidePrev",
			next: "." + attribs.uid + " .slideNav a.slidePagerNext, ." + attribs.uid + " .prevNext a.slideNext",
			timeout: attribs.timer,
			pause: true,
			pauseOnPagerHover: true,
			fx: attribs.effect,
			speed: attribs.transitionTime,
			sync: attribs.sync,
			attribs: attribs,
			easing: attribs.easing
		}).cycle("pause");
	}
	
	if(typeof isIE === 'undefined'){
		this.preloader({
			ondone:function(){
				if(attribs.autoplay == 1){jQuery(".quickgalleryWrap."+attribs.uid).children(".slides").cycle('resume');}
			}
		});
	}else{
		if(attribs.autoplay == 1){jQuery(".quickgalleryWrap."+attribs.uid).children(".slides").cycle('resume');}
	}
	if(typeof isIE8 !== 'undefined'){
		this.find(".slide").width(attribs.width).height(attribs.height);
	}
};