const isWebP = () => {
  const testWebP = (callback) => {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height === 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP((support) => {
    let className = support === true ? 'webp' : 'no-webp';
    document.querySelector('body').classList.add(className);
  });
}

const menu = document.querySelector('.js-nav');
const toggler = document.querySelector('.js-toggler');

toggler.addEventListener('click', ()=> {
  menu.classList.toggle('site-nav--close');
})

export {isWebP};
;
