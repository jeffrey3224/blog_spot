// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import "trix"
import "@rails/actiontext"

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("dropdown-button")
    const menu = document.getElementById("dropdown-menu");

    button.addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none"
        } else {
            menu.style.display = "block"
        }
    })

    window.addEventListener("click", function(event) {
        if (!button.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = "none"
        }
    })
})
