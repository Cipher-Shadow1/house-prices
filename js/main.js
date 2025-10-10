(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

})(jQuery);


// JavaScript function to toggle the visibility of content sections
function showContent(sectionId,elemen) {
	// Hide all content sections
	var contentSections = document.querySelectorAll('.content-section');
	contentSections.forEach(function (section) {
		section.style.display = 'none';
	});

	// Show the selected content section
	var selectedSection = document.getElementById(sectionId);
	if (selectedSection) {
		selectedSection.style.display = 'block';
	}
	setActiveNavItem(elemen)
}

function setActiveNavItem(elemen) {
    const navItems = document.querySelectorAll('.nav-item');

    // Remove the "active" class from all nav items
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add the "active" class to the clicked item
	const element=elemen.parentElement;
    element.classList.add('active');
}

