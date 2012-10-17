(function($) {
	/**
     * Handles Ajax Requests
     *
     * @author Namics\samschmid
     * @namespace Responsive
     * @class AjaxRequests
     * @extends Class
     */
	Responsive.AjaxRequests = Class.extend({  
		
		requestNavigation: function(callback,absender) {
			var sender = absender;
			$.ajax({
					url:"html/nav.html",
					context: document.body,
					success: function(response,status,jqXHR) {
						callback(response,sender);
					}
			});
		}
	});  
})($); 