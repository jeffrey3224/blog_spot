// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"

document.addEventListener("turbo:load", function() {
  // Toggle the dropdown menu
  const button = document.getElementById("dropdown-button");
  const menu = button.parentElement.querySelector(".dropdown-content");

  button.addEventListener("click", function(event) {
    event.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", function(event) {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = "none";
    }
  });
});

