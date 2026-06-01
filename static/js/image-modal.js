const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImage");

const images = document.querySelectorAll(".guide-content img");

const closeBtn = document.querySelector(".close-modal");

images.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "block";

        modalImg.src = img.src;
    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";
    }

});