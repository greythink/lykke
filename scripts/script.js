// Close mobile menu when nav item is selected
(function (window) {
  var toggleSelector = '.toggle-trigger';
  var toggleTrigger = document.querySelector(toggleSelector);
  var toggleController = document.getElementById(toggleTrigger.getAttribute('for'));
  var toggleControllerParent = toggleController.parentElement;
  var toggleTarget = toggleControllerParent.querySelector('.toggle-content');
  var toggleTargetLinks = toggleTarget.querySelectorAll('ul > li > a');

  toggleTargetLinks.forEach(function (navItem) {
    navItem.addEventListener('click', function () {
      toggleController.checked = false;
    });
  });
})(this);