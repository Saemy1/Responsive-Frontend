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
		appendNav : function(html, sender) {
			var navbar = $(html);
			var body = $("body").append(navbar);
			sender._navbar = navbar;
			sender._setHideAction();
		}
	});  
})($); 