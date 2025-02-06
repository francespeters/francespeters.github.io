document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach(tab => {
      tab.addEventListener("click", () => {
          const target = document.querySelector(tab.dataset.tabTarget);
          
          // Remove 'active' class from all tabs and contents
          tabs.forEach(t => t.classList.remove("active"));
          tabContents.forEach(tc => tc.classList.remove("active"));

          // Add 'active' class to clicked tab and corresponding content
          tab.classList.add("active");
          target.classList.add("active");

          // Update URL without reloading
          history.pushState(null, "", `#${target.id}`);
      });
  });

  // Handle back/forward navigation
  window.addEventListener("popstate", () => {
      const hash = window.location.hash;
      if (hash) {
          const activeTab = document.querySelector(`.tab[data-tab-target="${hash}"]`);
          if (activeTab) {
              activeTab.click();
          }
      }
  });

  // Ensure correct tab is open on page load (if URL has a hash)
  const hash = window.location.hash;
  if (hash) {
      const activeTab = document.querySelector(`.tab[data-tab-target="${hash}"]`);
      if (activeTab) {
          activeTab.click();
      }
  }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) { slideIndex = 1 }
if (n < 1) { slideIndex = slides.length }

for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}

slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}

function navigateTo(url) {
window.location.href = url;
}