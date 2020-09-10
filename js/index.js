'use strict';
const ref = {
  btnPhoneList: document.querySelector('.js-phone-list-btn'),

  listPhone: document.querySelector('.js-list-phone'),
  document: document.querySelector('body'),
};

ref.btnPhoneList.addEventListener('click', btnPhoneListHandler);
ref.document.addEventListener('click', bodyHandler);

function btnPhoneListHandler() {
  ref.listPhone.classList.toggle('visually-hidden');
  ref.btnPhoneList.firstElementChild.classList.toggle('btn__svg--rotate');
}

function bodyHandler(event) {
  if (
    event.target === ref.btnPhoneList ||
    event.target === ref.btnPhoneList.firstElementChild ||
    event.target === ref.btnPhoneList.firstElementChild.firstElementChild
  ) {
    return;
  }
  ref.btnPhoneList.firstElementChild.classList.remove('btn__svg--rotate');
  ref.listPhone.classList.add('visually-hidden');
}
