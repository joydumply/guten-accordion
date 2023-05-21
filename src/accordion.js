import {addLazyLoad} from './addLazyLoad.js';
addLazyLoad();
// console.log(addLazyLoad);
// alert();

const accordionItems = document.querySelectorAll('.accordion');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
  
    title.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
  
      closeAllAccordionItems();
  
      if (!isOpen) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  function closeAllAccordionItems() {
    accordionItems.forEach(item => {
      item.classList.remove('open');
      item.querySelector('.accordion-content').style.maxHeight = '0';
    });
  }