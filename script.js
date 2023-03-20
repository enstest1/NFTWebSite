document.addEventListener("DOMContentLoaded", function () {
  const nftImages = document.querySelectorAll(".nft-item img");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);

  nftImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.style.display = "block";
      const img = document.createElement("img");
      img.src = image.src;
      img.classList.add("lightbox-content");
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
      const closeIcon = document.createElement("span");
      closeIcon.innerHTML = "&times;";
      closeIcon.classList.add("lightbox-close");
      lightbox.appendChild(closeIcon);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.style.display = "none";
  });
});
