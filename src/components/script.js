// Select all cards marked as collapsible
const collapsibleCards = document.querySelectorAll(".collapsible-card");

collapsibleCards.forEach(card => {
  card.addEventListener("click", function () {
    // Toggle active class for styling
    this.classList.toggle("active");

    // Get the content inside this card
    const content = this.querySelector(".content");
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

// Optional: open the first card by default
// if (collapsibleCards.length > 0) {
//   const first = collapsibleCards[0];
//   first.classList.add("active");
//   const content = first.querySelector(".content");
//   content.style.maxHeight = content.scrollHeight + "px";
//   content.style.paddingTop = "15px";
//   content.style.paddingBottom = "15px";
// }