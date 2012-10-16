(function($) {
	 /**
     * HideMenuAction implementation. Activates onClickEvent on Element
     * to Hide Element
     *
     * @author Namics\samschmid
     * @namespace Responsive
     * @class HideMenuAction
     * @extends Class
     */
	Responsive.HideMenuAction = Class.extend({  
		settings : {
			elementToHide : ''
		},
		setClickHandlerOfElement: function(element) {
			var self = this;
			$(element).click(function(event){
				event.preventDefault();
				$(self.settings.elementToHide).hide();
				
			});
		}
	});  
})($); 