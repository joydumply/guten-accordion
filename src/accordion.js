import {addLazyLoad} from './addLazyLoad.js';
addLazyLoad();
const accordionItems = document.querySelectorAll('.accordion');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const btn = item.querySelector('.accordion-toggle-btn');
  
    title.addEventListener('click', () => {
      accordionOpen(item);
    });

    btn.addEventListener('click', () => {
      accordionOpen(item);
    });
  });

  const accordionOpen = (item) => {
    const content = item.querySelector('.accordion-content');
    const isOpen = item.classList.contains('open');
    const parent = item.closest('.accordion-wrap');
    const openItem = parent.querySelector('.accordion.open');
  
      // closeAllAccordionItems();
  
      if (!isOpen) {
        if(openItem){
          accordionClose(openItem);
        }

        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }else{
        accordionClose(item);
      }
  }

  const accordionClose = (item) => {
    item.classList.remove('open');
    item.querySelector('.accordion-content').style.maxHeight = '0';
  }
  // function closeAllAccordionItems() {
  //   accordionItems.forEach(item => {
  //     item.classList.remove('open');
  //     item.querySelector('.accordion-content').style.maxHeight = '0';
  //   });
  // }