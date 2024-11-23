const imageContainer = document.querySelector(".image-container");
const productImage = document.querySelector(".product-image");
const zoomLens = document.querySelector(".zoom-lens");
const zoomResult = document.querySelector(".zoom-result");
const zoomedImage = document.querySelector(".zoomed-image");

imageContainer.addEventListener("mouseenter", () => {
    zoomLens.style.display = "block";
    zoomResult.style.visibility = "visible";
});

imageContainer.addEventListener("mouseleave", () => {
    zoomLens.style.display = "none";
    zoomResult.style.visibility = "hidden";
});

imageContainer.addEventListener("mousemove", (e) => {
    const rect = imageContainer.getBoundingClientRect();
    const lensSize = zoomLens.offsetWidth / 2;

    let x = e.clientX - rect.left - lensSize;
    let y = e.clientY - rect.top - lensSize;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > rect.width - zoomLens.offsetWidth) {
        x = rect.width - zoomLens.offsetWidth;
    }
    if (y > rect.height - zoomLens.offsetHeight) {
        y = rect.height - zoomLens.offsetHeight;
    }

    zoomLens.style.left = `${x}px`;
    zoomLens.style.top = `${y}px`;

    const scaleX = zoomedImage.offsetWidth / rect.width;
    const scaleY = zoomedImage.offsetHeight / rect.height;

    const zoomX = x * scaleX;
    const zoomY = y * scaleY;

    zoomedImage.style.left = `-${zoomX}px`;
    zoomedImage.style.top = `-${zoomY}px`;
});
