const toggleBtn = document.getElementById("toggleFeatures");
const allCards = document.querySelectorAll(".feature-card");

let expanded = false;

toggleBtn.addEventListener("click", () => {
    expanded = !expanded;

    allCards.forEach((card, index) => {
        if (index >= 3) {
            card.classList.toggle("hidden", !expanded);
        }
    });

    toggleBtn.innerHTML = expanded 
        ? `Show Less <img src="assets/icon3.svg"/>`
        : `Show More <img src="assets/Icon2.svg"/>`;
});