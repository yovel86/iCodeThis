const colors = document.querySelectorAll(".colors span");
const image = document.querySelector(".image img");
const price = document.querySelector(".price p:first-child");
const discount = document.querySelector(".price p:last-child");

const bags = [
  {
    link: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/6198qGmK4tL._UL1100_.jpg",
    originalPrice: "€ 89.99",
    discountPrice: "€ 69.99",
  },
  {
    link: "https://m.media-amazon.com/images/I/61f2VsfW+2L._UL1000_.jpg",
    originalPrice: "€ 99.99",
    discountPrice: "€ 79.99",
  },
  {
    link: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61W0NGvuiRL._SY355_.jpg",
    originalPrice: "€ 120.99",
    discountPrice: "€ 99.99",
  },
];

colors.forEach((color, i) => {
  color.addEventListener("click", () => {
    colors.forEach((c) => c.classList.remove("selected"));
    color.classList.add("selected");
    image.src = bags[i].link;
    price.textContent = bags[i].originalPrice;
    discount.textContent = bags[i].discountPrice;
  });
});
