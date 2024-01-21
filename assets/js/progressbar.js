window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = (scrolled / (pageHeight - windowHeight)) * 100 + "%";
});