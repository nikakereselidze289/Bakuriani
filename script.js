document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const header = document.querySelector("header");
const sticky = header.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function () {
  stickyNav();
};

const images = document.querySelectorAll(".rooms-gallery img, .pool-item img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.toggle("zoomed");
  });
});

const style = document.createElement("style");
style.innerHTML = `
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    background-color: #1a1a1a;
  }
  
  .zoomed {
    transform: scale(1.5);
    transition: transform 0.3s ease;
  }
  
  .rooms-gallery img, .pool-item img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .rooms-gallery img:hover, .pool-item img:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .rooms-gallery img.zoomed, .pool-item img.zoomed {
    transform: scale(1.5);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  }
`;
document.head.appendChild(style);
