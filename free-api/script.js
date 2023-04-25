const items = document.querySelectorAll(".item");
const meta = document.querySelectorAll(".meta");
const bookmark = document.querySelectorAll(".bookmark span");
const para = document.querySelectorAll(".details p");

items.forEach((item, i) => {
  item.addEventListener("mouseover", () => {
    meta[i].classList.remove("hide");
    para[i].classList.add("hide");
  });
  item.addEventListener("mouseleave", () => {
    meta[i].classList.add("hide");
    para[i].classList.remove("hide");
  });
});

bookmark.forEach((bm) => {
  bm.addEventListener("click", () => {
    bm.textContent =
      bm.textContent === "bookmark" ? "bookmark_border" : "bookmark";
  });
});
