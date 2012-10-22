(function($) {
	 /**
     * Carousel implementation. 
     * to Hide Element
     *
     * @author Namics\samschmid
     * @namespace Responsive
     * @class Carousel
     * @extends Class
     */
	Responsive.Carousel = Class.extend({  
			
		settings : {
			CarouselSelector:'',
			itemSelector: '',
			previousButtonSelector: '',
			nextButtonSelector: ''
		},
		
		init: function(settings) {
			this.settings = settings;
			var counter = 1;
			var carouselSelector = settings.CarouselSelector ;
			var itemSelector = settings.itemSelector ;
			var previousButtonSelector = settings.previousButtonSelector ;
			var nextButtonSelector = settings.nextButtonSelector ;
			
			$(carouselSelector + itemSelector).addClass("hidden");
			$(carouselSelector + itemSelector + ':first-child').removeClass("hidden");
			$(carouselSelector + previousButtonSelector).each(function(){
					$(this).click(function (){
						
						$(carouselSelector +itemSelector + ':nth-child('+counter+')').addClass("hidden");
						counter -= 1;
						$(carouselSelector +itemSelector + ':nth-child('+counter+')').removeClass("hidden");
					});
			});
			$(carouselSelector + nextButtonSelector).each(function(){
					$(this).click(function (){
						$(carouselSelector +itemSelector + ':nth-child('+counter+')').addClass("hidden");
						counter += 1;
						$(carouselSelector +itemSelector + ':nth-child('+counter+')').removeClass("hidden");
					});
			});
		}
		
	
	});  
})($); 