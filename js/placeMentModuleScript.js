// aos-script
AOS.init({
  duration: 1200,
})
// ===[ Progress Scroll Bar ]===

const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", function () {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  scrollProgress.style.width = scrolled + "%";
});
