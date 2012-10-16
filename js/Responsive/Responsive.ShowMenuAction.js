(function($) {
	 /**
     * ShowMenuAction implementation. Activates onClickEvent on Element
     *
     * @author Namics\samschmid
     * @namespace Responsive
     * @class ShowMenuAction
     * @extends Class
     */
	Responsive.ShowMenuAction = Class.extend({  
		
		_navbar: null,
		_dommanipulator: null,
		
		settings: {
			hideButtonSelector:'',
			hideAction:null
		},
		
		setClickHandlerOfElement: function(element) {
			
			var self = this;
			
			$(element).click(function(event){
				event.preventDefault();
				self._loadNavigation();
			});
		},
		
		_loadNavigation:  function() {
			if(this._navbar===null) {
				this._sendLoadNavigationAjaxRequest();
			} else {
				this._showNavigation();
			}
		},
		
		_sendLoadNavigationAjaxRequest: function() {
			var request = new Responsive.AjaxRequests()
			this._checkAndInitDomManiuplator();
			request.requestNavigation(this._dommanipulator.appendNav,this);
		
		},
		
		_checkAndInitDomManiuplator: function() {
			if(this._dommanipulator === null) {
				this._dommanipulator = new Responsive.ShowMenuAction.DOMManipulator();
			}
		},
		
		_setHideAction: function() {
			var self = this;
			if(this.settings.hideButtonSelector!=='' && this.settings.hideAction !== null) {
				$(this.settings.hideButtonSelector).each(function(){
					self.settings.hideAction.setClickHandlerOfElement(this);
				});
			}
		},
		
		_showNavigation: function() {
			this._navbar.show();
		}
		
	});  
})($); 