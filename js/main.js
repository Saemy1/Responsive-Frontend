/**
 * Responsive Design Experiment
 *   
 * Author: Samuel Schmid
 * 		   Namics
 */
$(document).ready(function(){
						
	
	var hideMenuAction = new Responsive.HideMenuAction();
	hideMenuAction.settings = {
		elementToHide: ".nav-bar-modal"
	}
	
	var settings = {
		navigationSelector:'nav.main-navigation',
		hideButtonSelector: ".nav-bar-modal >  ul > li:first-child > a",
		hideAction: hideMenuAction,
	}
	
	var showMenuAction = new Responsive.ShowMenuAction(settings);
	
	
	
	$('nav.menu-button a').each(function(){
			var element = $(this);
			showMenuAction.setClickHandlerOfElement(element);
	});
	
}); 