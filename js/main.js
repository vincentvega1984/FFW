"use strict";

// Missing forEach on NodeList for IE11
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

window.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll('[role="tab"]'); 
  
  // Add a click event handler to each tab
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", changeTabs);
  }

});

function changeTabs(e) {
  var target = e.target;
  var parent = target.parentNode;
  var grandparent = parent.parentNode;

  // Remove all current selected tabs
  parent.querySelectorAll('[aria-selected="true"]').forEach(function (t) {
    return t.setAttribute("aria-selected", false);
  }); 
  
  // Set this tab as selected
  target.setAttribute("aria-selected", true); 
  
  // Hide all tab panels
  grandparent.querySelectorAll('[role="tabpanel"]').forEach(function (p) {
    return p.setAttribute("hidden", true);
  }); 
  
  // Show the selected panel
  grandparent.parentNode.querySelector("#".concat(target.getAttribute("aria-controls"))).removeAttribute("hidden");
}