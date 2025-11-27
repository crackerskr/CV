const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");

    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingTop = "0";
      content.style.paddingBottom = "0";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = "15px";
      content.style.paddingBottom = "15px";
    }
  });
});
