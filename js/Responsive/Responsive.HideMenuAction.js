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
			
			$(element).click({elementToHide: self.settings.elementToHide}, self._handleClick);
		},
		
		_handleClick: function(event) {
			event.preventDefault();
			var elementToHide = event.data.elementToHide;
			$(elementToHide).hide();
		}
	});  
})($); 