const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailercontaierEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
    trailercontaierEl.classList.remove("active");

});

closeIconEl.addEventListener("click", () => {
    trailercontaierEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;

});