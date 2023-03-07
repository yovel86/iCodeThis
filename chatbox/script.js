const alertMsg = document.querySelector('.cookies-msg');
const chatContainer = document.querySelector('.chat-container');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup img');
const popupClose = document.querySelector('.popup span');
const admins = document.querySelectorAll('.contacts img');
const adminName = document.querySelector('.top-row .info h3');
const currentAdmin = document.querySelector('.admin-msg img');
const currentAdminMsg = document.querySelector('.admin-msg .text');

const imgs = [
    {
        src: 'https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        msg: 'Hi there, Looking to get started? I can help answer to your questions'
    },
    {
        src: 'https://images.unsplash.com/photo-1534119768988-c496213eff76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        msg: 'Hello, Any questions related to our product?'
    },
    {
        src: 'https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        msg: 'For any general queries. Feel free to ping me'
    }
];

alertMsg.addEventListener('click', () => {
    alertMsg.style.display = 'none';
});

popup.addEventListener('click', () => {
    popupClose.classList.toggle('hide');
    popupImg.classList.toggle('hide');
    chatContainer.classList.toggle('hide');
});

admins.forEach((admin, i) => {
    admin.addEventListener('click', () => {
        admins.forEach(admin => admin.classList.remove('active'));
        admin.classList.add('active');
        if (i === 0) {
            adminName.textContent = 'Einora';
            currentAdmin.src = imgs[0].src;
            currentAdminMsg.textContent = imgs[0].msg;
            popupImg.src = imgs[0].src;
        } else if (i === 1) {
            adminName.textContent = 'Leila';
            currentAdmin.src = imgs[1].src;
            currentAdminMsg.textContent = imgs[1].msg;
            popupImg.src = imgs[1].src;
        } else {
            adminName.textContent = 'Lucinda';
            currentAdmin.src = imgs[2].src;
            currentAdminMsg.textContent = imgs[2].msg;
            popupImg.src = imgs[2].src;
        }
    });
});