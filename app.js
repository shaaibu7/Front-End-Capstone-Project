const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
const mainContainer = document.querySelector('.main-content');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navmenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
  });
});

const content = [
  {
    id: 'box1',
    image: 'assets/images/profileimg.jpeg',
    name: 'Lowie Dan',
    work: 'Sity Computer Engineer',
    comment: 'A sound and outstanding proffesor with proven track.',
  },

  {
    id: 'box2',
    image: 'assets/images/profileimg.jpeg',
    name: 'Lowie Dan',
    work: 'Sity Computer Engineer',
    comment: 'A sound and outstanding proffesor with proven track.',
  },

  {
    id: 'box3',
    image: 'assets/images/profileimg.jpeg',
    name: 'Lowie Dan',
    work: 'Sity Computer Engineer',
    comment: 'A sound and outstanding proffesor with proven track.',
  },
];

content.forEach((item) => {
  mainContainer.innerHTML += `
  <div class="client-room">
  
          <div class="client-container">
            <div class="client-image">
              <img src="${item.image}" alt="Cleint image" width="90px" height="100px" class="client-picture">
            </div>
      
            <div class="client-info">
                <h5>${item.name}</h4>
                  <p class="client-paragraph">${item.work}</p>
                  <div class="client-line"></div>
                  <p class="client-text pad-class">${item.comment}
                  </p>
            </div>
            
          </div>
    
          <div class="client-container">
            <div class="client-image">
              <img src="${item.image}" alt="Cleint image" width="90px" height="100px" class="client-picture">
            </div>
      
            <div class="client-info">
              <h5>${item.name}</h5>
              <p class="client-paragraph">${item.work}</p>
              <div class="client-line"></div>
              <p class="client-text pad-class">${item.comment}
              </p>
            </div>
            
          </div>
        </div>`;
});