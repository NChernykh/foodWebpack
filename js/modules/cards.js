import {getResource} from '../services/services';

function cards() {
    // Используем классы для карточек

  class MenuCard {
    constructor(img, alt, title, descr, price, parentSelector, ...classes) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.classes = classes;
      this.course = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.course;
    }

    render() {
      const div = document.createElement('div');

      if (this.classes.length === 0) {
        this.classes = 'menu__item'; 

        // переопределение переменной, был массив, стала сторока
        div.classList.add(this.classes);
      } else {
        this.classes.forEach(className => div.classList.add(className));
      }

      div.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>  
            `;
      this.parent.append(div);
    }

  }

  // рендер карточек из db.json

  getResource('http://localhost:3000/menu')
    .then(data => { // здесь data - это массив объектов (карточек) из db.json
      data.forEach(({img, altimg, title, descr, price}) => { // деструктуризация объекта
        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      });
    });
}

export default cards;