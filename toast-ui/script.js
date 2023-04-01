const toasts    = document.querySelectorAll(".toast");
const removeBtn = document.querySelector(".remove-btn");

removeBtn.addEventListener("click", () => {
  toasts.forEach((toast) => {
    toast.classList.add("show");
    removeBtn.classList.add('hide');
    setTimeout(() => {
      toast.classList.remove("show");
      removeBtn.classList.remove('hide');
    }, 4000);
  });
});
