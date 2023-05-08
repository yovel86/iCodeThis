const users = [
  {
    name: "Violet Webb",
    lastMsg: "Hey, what's up???",
    img: "https://xsgames.co/randomusers/assets/avatars/female/42.jpg"
  },
  {
    name: "Corey Burns",
    lastMsg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "https://xsgames.co/randomusers/assets/avatars/male/72.jpg"
  },
  {
    name: "Charlie Aquilar",
    lastMsg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "https://xsgames.co/randomusers/assets/avatars/female/49.jpg"
  },
  {
    name: "Florence Hardy",
    lastMsg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
  },
  {
    name: "Elsie Clark",
    lastMsg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "https://xsgames.co/randomusers/assets/avatars/female/31.jpg"
  }
];

const userList = document.querySelector('.users');

let searchUser = (e) => {
  userList.textContent = "";
  const filteredUsers = users.filter(user => user.name.toLowerCase().startsWith(e.value.toLowerCase()));
  if(filteredUsers.length == 0) {
    userList.insertAdjacentHTML('beforeend', "<p class='not-found'>No user found :(</p>");
  }
  updateUser(filteredUsers);
}

let updateUser = (users) => {
  users.forEach(user => {
    const template = `
      <div class="user">
        <div class="image">
          <img src="${user.img}">
        </div>
        <div class="details">
          <h5>${user.name}</h5>
          <p>${user.lastMsg}</p>
        </div>
      </div>`;
    userList.insertAdjacentHTML('beforeend', template);
  });
}

updateUser(users);



