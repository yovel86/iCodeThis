const testimony = document.querySelector('.content p');
const userImage = document.querySelector('img');
const userName = document.querySelector('.user p');
const dots = document.querySelectorAll('.dot');

const testimonies = [
    {
        testimony: '"This is simply unbelievable! I wish I would have thought of it first. Courses should be nominated for service of the year. It\'s the perfect solution for our business"',
        image: 'https://xsgames.co/randomusers/assets/avatars/female/74.jpg',
        name: 'Olivia Jackson'
    },
    {
        testimony: '"I can\'t recommend this course enough! As someone who was new to the subject matter, I found the content to be engaging and easy to understand. The instructor was knowledgeable and approachable, and always willing to answer my questions."',
        image: 'https://xsgames.co/randomusers/assets/avatars/male/5.jpg',
        name: 'Steve Boz'
    },
    {
        testimony: '"I\'ve taken a lot of courses over the years, but this one really stood out to me. The material was challenging, but the instructor did an excellent job of breaking it down into manageable pieces. I appreciated the hands-on approach"',
        image: 'https://xsgames.co/randomusers/assets/avatars/female/22.jpg',
        name: 'Taina Saak'
    },
    {
        testimony: '"This course exceeded my expectations in every way. The content was not only informative, but also incredibly engaging. The instructor was passionate about the subject matter and clearly invested in our success."',
        image: 'https://xsgames.co/randomusers/assets/avatars/male/18.jpg',
        name: 'Winston Marlett'
    }
];

// setInterval(() => {
//     if (i === 4) {
//         i = 0;
//     }
//     testimony.textContent = testimonies[i].testimony;
//     userImage.src = testimonies[i].image;
//     userName.textContent = testimonies[i].name;
//     updateDot(i);
//     i++;
// }, 2000);

let i = 0;

document.body.addEventListener('keydown', (e) => {

    switch(e.key) {

      case 'ArrowRight': 
        i++;
        if(i === 4) {
          i = 0;
        }
        updateTestimony(i);
        break;

      case 'ArrowLeft':
        i--;
        if(i === -1) {
         i = 3; 
        }
        updateTestimony(i);
        break;

    }

});

let updateTestimony = (index) => {
  testimony.textContent = testimonies[i].testimony;
  userImage.src = testimonies[i].image;
  userName.textContent = testimonies[i].name;
  updateDot(index);
}

let updateDot = (index) => {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}