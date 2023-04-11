const inputSearch = document.querySelector("#input-search");
const itemsList = document.querySelector(".search-items");

const items = [
  {
    imgLink:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Apple",
    subTitle: "Fruit and tree",
    keywords: ["apple", "Apple", "Fruit", "fruit"],
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Apple Inc",
    subTitle: "Multinational Company",
    keywords: ["apple", "Apple", "company", "Company"],
  },
  {
    imgLink:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20211102115907_Ferrari_Portofino_M_lead.jpg&w=726&h=482&q=75&c=1",
    title: "Ferrari",
    subTitle: "Automobile",
    keywords: ["car", "Car", "ferrari", "Ferrarri"],
  },
  {
    imgLink:
      "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg",
    title: "Beagle",
    subTitle: "Domestic Animal",
    keywords: ["dog", "Dog", "beagle", "Beagle"],
  },
  {
    imgLink:
      "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg",
    title: "Labrador",
    subTitle: "Domestic Animal",
    keywords: ["dog", "Dog", "labrador", "Labrador"],
  },
];

inputSearch.addEventListener("input", (e) => {
  const renderedItems = document.querySelectorAll(".item");
  const searchedItems = searchItems(e.target.value);
  if (searchedItems.length == 0) {
    itemsList.textContent = "";
    itemsList.classList.add("hide");
    return;
  }
  if (renderedItems.length < 2) {
    itemsList.classList.remove("hide");
    searchedItems.forEach((item) => {
      itemsList.insertAdjacentHTML(
        "beforeend",
        `
      <div class="item">
        <img src="${item.imgLink}" alt="">
        <div class="info">
          <h3>${item.title}</h3>
          <p>${item.subTitle}</p>
        </div>
      </div>
      `
      );
    });
  }
});

const searchItems = (inputText) => {
  if (inputText == "") {
    return [];
  }
  const filteredItems = items.filter((item, i) => {
    const requiredItem = item.keywords.filter((keyword) => {
      if (keyword.startsWith(inputText)) {
        return true;
      }
    });

    if (requiredItem.length > 0) {
      return true;
    } else {
      return false;
    }
  });

  return filteredItems;
};
