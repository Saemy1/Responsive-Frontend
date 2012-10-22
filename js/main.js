/**
 * Responsive Design Experiment
 *   
 * Author: Samuel Schmid
 * 		   Namics
 */
$(document).ready(function(){
						
	bindMenuActionButtons();
	bindCarouselButtons();
	
}); 

function bindMenuActionButtons() {
	var hideMenuAction = new Responsive.HideMenuAction();
	hideMenuAction.settings = {
		elementToHide: ".nav-bar-modal"
	}
	
	var settings = {
		navigationSelector:'nav.main-navigation',
		hideButtonSelector: ".nav-bar-modal >  ul > li:first-child > a",
		hideAction: hideMenuAction
	}
	
	var showMenuAction = new Responsive.ShowMenuAction(settings);
	
	$('nav.menu-button a').each(function(){
			var element = $(this);
			showMenuAction.setClickHandlerOfElement(element);
	});
}

function bindCarouselButtons() {
	
	
	var settings = {
		CarouselSelector:'.carousel',
		itemSelector: "> section",
		previousButtonSelector: "> div.buttons > a:first-child",
		nextButtonSelector: "> div.buttons > a:last-child"
	}
	var carousel = new Responsive.Carousel(settings);
	
}
