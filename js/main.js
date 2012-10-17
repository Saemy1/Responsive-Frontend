/**
 * Responsive Design Experiment
 *   
 * Author: Samuel Schmid
 * 		   Namics
 */
$(document).ready(function(){
						
	var showMenuAction = new Responsive.ShowMenuAction();
	var hideMenuAction = new Responsive.HideMenuAction();
	
	showMenuAction.settings = {
		navigationSelector:'nav.main-navigation',
		hideButtonSelector: ".nav-bar-modal >  ul > li:first-child > a",
		hideAction: hideMenuAction,
	}
	
	hideMenuAction.settings = {
		elementToHide: ".nav-bar-modal"
	}
	
	$('nav.menu-button a').each(function(){
			var element = $(this);
			showMenuAction.setClickHandlerOfElement(element);
	});
	
}); 