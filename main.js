const btn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//logo
window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");
  const content = document.getElementById("main-content");
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 1000); //1 sec
});
