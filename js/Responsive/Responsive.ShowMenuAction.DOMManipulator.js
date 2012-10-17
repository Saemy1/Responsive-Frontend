(function($) {
	 /**
     * DOMManipulator implementation. Add html to Sender and sets Hide Action
     *
     * @author Namics\samschmid
     * @namespace Responsive.ShowMenuAction
     * @class DOMManipulator
     * @extends Class
     */
	Responsive.ShowMenuAction.DOMManipulator = Class.extend({  
		
		cloneNavigationToBeModal : function(selector, sender) {
			var navbar = $(selector).clone().addClass("nav-bar-modal");
			var body = $("body").append(navbar);
			sender._navbar = navbar;
			sender.setHideAction();
		}
	});  
})($); 