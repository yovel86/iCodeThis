const topics = document.querySelectorAll(".topic");
const stars = document.querySelectorAll(".rating span");

topics.forEach((topic, i) => {
  topic.addEventListener("click", () => {
    topics.forEach((t) => t.classList.remove("active"));
    topic.classList.add("active");
  });
});

stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    const parentEle = star.parentElement;
    let start = i < 5 ? 0 : 5;
    for (var j = start; j <= i; j++) {
      if (stars[j] === parentEle.lastElementChild) {
        stars[j].textContent = "star";
        return;
      } else {
        stars[j].textContent = "star";
      }
    }
    for (let k = j; k < stars.length; k++) {
      if (stars[k] === parentEle.lastElementChild) {
        stars[k].textContent = "star_border";
        return;
      } else {
        stars[k].textContent = "star_border";
      }
    }
  });
});
