(function($) {
	 /**
     * ShowMenuAction implementation. Activates onClickEvent on Element
     *
     * @author Namics\samschmid
     * @namespace Responsive
     * @class ShowMenuAction
     * @extends Class
     * 
     * Settings {
     * 	navigationSelector : '',
     * 	hideButtonSelector : '',
     *  hideAction : null
     * }
     */
	Responsive.ShowMenuAction = Class.extend({  
		
		
		_navbar: null,
		_dommanipulator: null,
		_settings: null,
		
		init: function(settings) {
			this._settings = settings;
		},
		
		setClickHandlerOfElement: function(element) {
			
			var self = this;
			
			$(element).click(function(event){
				event.preventDefault();
				self.loadNavigation();
			});
		},
		
		loadNavigation:  function() {
			if(this._navbar===null) {
				this.cloneNavigationToBeModal();
			} else {
				this.showNavigation();
			}
		},
		
		cloneNavigationToBeModal: function() {
			this.checkAndInitDomManiuplator();
			this._dommanipulator.cloneNavigationToBeModal(this._settings.navigationSelector, this);
		
		},
			
		checkAndInitDomManiuplator: function() {
			if(this._dommanipulator === null) {
				this._dommanipulator = new Responsive.ShowMenuAction.DOMManipulator();
			}
		},
		
		setHideAction: function() {
			var self = this;
			if(this._settings.hideButtonSelector!=='' && this._settings.hideAction !== null) {
				$(this._settings.hideButtonSelector).each(function(){
					self._settings.hideAction.setClickHandlerOfElement(this);
				});
			}
		},
		
		showNavigation: function() {
			this._navbar.show();
		}
		
	});  
})($); 