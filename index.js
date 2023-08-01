
//BURGER_MENU START
(function () {
   const closeB = document.querySelector('.wrapper_nav');
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.header_nav');
   const menuCloseItem = document.querySelector('.header_nav_close');
   const menuLink = document.querySelectorAll('.header_item-link');
   closeB.addEventListener('click', () => {
      menu.classList.remove('header_nav_active');
   });
   burgerItem.addEventListener('click', () => {
      menu.classList.add('header_nav_active');
   });
   menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header_nav_active');
   });
   if (window.innerWidth <= 455) {
      for (let i = 0; i < menuLink.length; i += 1) {
         menuLink[i].addEventListener('click', () => {
            menu.classList.remove('header_nav_active');
         });
      }
   }
}());
//BURGER_MENU END

//BLUR SERVICE START
const btnGardens = document.querySelector('.gardens');
const btnLawn = document.querySelector('.lawn');
const btnPlanting = document.querySelector('.planting');
const img = document.querySelectorAll('.service_img');
const btn = document.querySelectorAll('.service_btn-item')

//btnGardens 
btnGardens.addEventListener('click', () => {
   if (!btnGardens.classList.contains('active_btn')) {
      btnGardens.classList.add('active_btn')
      for (let elem of img) {
         if (!elem.classList.contains('blur') && !elem.classList.contains('gardens_img')) {
            elem.classList.add('blur')
         }
      }
   }
   else {
      btnGardens.classList.remove('active_btn')
      for (let elem of img) {
         if (elem.classList.contains('blur') && !elem.classList.contains('gardens_img')) {
            elem.classList.remove('blur')
         }
      }
   }
});

//btnLawn
btnLawn.addEventListener('click', () => {
   if (!btnLawn.classList.contains('active_btn')) {
      btnLawn.classList.add('active_btn')
      for (let elem of img) {
         if (!elem.classList.contains('blur') && !elem.classList.contains('lawn_img')) {
            elem.classList.add('blur')
         }
      }
   } else {
      btnLawn.classList.remove('active_btn')
      for (let elem of img) {
         if (elem.classList.contains('blur') && !elem.classList.contains('lawn_img')) {
            elem.classList.remove('blur')
         }
      }
   }
});

//btnPlanting
btnPlanting.addEventListener('click', () => {
   if (!btnPlanting.classList.contains('active_btn')) {
      btnPlanting.classList.add('active_btn')
      for (let elem of img) {
         if (!elem.classList.contains('blur') && !elem.classList.contains('planting_img')) {
            elem.classList.add('blur')
         }
      }
   } else {
      btnPlanting.classList.remove('active_btn')
      for (let elem of img) {
         if (elem.classList.contains('blur') && !elem.classList.contains('planting_img')) {
            elem.classList.remove('blur')
         }
      }
   }
});
//////BLUR SERVICE END

//Accordeon STRAT
const arrow = document.querySelectorAll('.accordeon_pic');
const title = document.querySelectorAll('.accordeon_title');
const accordeonInfo = document.querySelectorAll('.accordeon_info');
let accordeon = document.querySelectorAll('.accordeon');



accordeon.forEach(item => item.addEventListener('click', () => {
   const activeContent = document.querySelector('#' + item.dataset.tab)

   if (activeContent.classList.contains('active_1')) {
      activeContent.classList.remove('active_1');
      item.classList.remove('active_1');
      activeContent.style.maxHeight = '';
      arrow.forEach(arrowW => {
         arrowW.style.transform = 'rotate(0deg)'
      });

   } else {
      accordeonInfo.forEach(elem => {
         elem.classList.remove('active_1');
         elem.style.maxHeight = '';
      });
      arrow.forEach(arrowW => {
         arrowW.style.transform = 'rotate(180deg)'
      });
      accordeon.forEach(elem => elem.classList.remove('active_1'));
      item.classList.add('active_1');
      activeContent.classList.add('active_1');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
   }

}));

//Accordeon END


//CONTACTS START 
const btnContact = document.querySelector('.contacts_select');
const itemContact = document.querySelectorAll('.select_list-item');
const list = document.querySelector('.select_list');
const input = document.querySelector('.select_input_hidden');
const addres = document.querySelectorAll('.select_city_info');
const one = document.querySelector('#ggOne');
const two = document.querySelector('#ggTwo');
const three = document.querySelector('#ggThree');
const four = document.querySelector('#ggFour');


//Клик по кнопке(отк/закр)
btnContact.addEventListener('click', () => {
   list.classList.toggle('select_list--visible');
});

//Выбор из списка 
itemContact.forEach(itemElem => {
   itemElem.addEventListener('click', (elem) => {
      elem.stopPropagation();

      btnContact.innerText = itemElem.innerText;
      btnContact.classList.add('contacts_select_title--visible');
      btnContact.focus();
      list.classList.remove('select_list--visible');
      input.value = itemElem.dataset.value;
      if (btnContact.innerText === 'Canandaigua, NY') {
         one.style.display = 'block';
      } else {
         one.style.display = 'none';
      };

      if (btnContact.innerText === 'New York City') {
         two.style.display = 'block';
      } else {
         two.style.display = 'none';
      };

      if (btnContact.innerText === 'Yonkers, NY') {
         three.style.display = 'block';
      } else {
         three.style.display = 'none';
      };

      if (btnContact.innerText === 'Sherrill, NY') {
         four.style.display = 'block';
      } else {
         four.style.display = 'none';
      };
      if (window.innerWidth <= 380) {
         document.querySelector('.contacts_img_pic').style.display = 'none';
      } else {
         document.querySelector('.contacts_img_pic').style.display = 'block';
      }

   })
});

//Закрытие селекта если клик вне селекта
document.addEventListener('click', (elem) => {
   if (elem.target !== btnContact) {
      list.classList.remove('select_list--visible');
      one.style.display = 'none';
      two.style.display = 'none';
      three.style.display = 'none';
      four.style.display = 'none';
   }
});

//Закрытие при нажатии клавиш Esc or Tab
document.addEventListener('keydown', (elem) => {
   if (elem.key === 'Tab' || elem.key === 'Escape') {
      list.classList.remove('select_list--visible');

   }
});




//CONTACTS END 




console.log('1.Выполнен 1 и 3 пунк.(+30)\n2.Выполнено(Есть маленькие недочеты, надеюсь не повлияют на вашу оценку))(+50)\n3.Выполнено полностью.(+25)\n Score: 105=)')
