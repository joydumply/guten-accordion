
import { registerBlockType, useState } from '@wordpress/blocks';
import { useEffect } from '@wordpress/element';


import AccordionParentEdit from './edit';


import iconPlus from '../assets/icon-plus.svg';
import './style.scss';
// import './_lazy.scss';
import './editor.scss';



registerBlockType('test/accordion', {
  title: 'Accordion',
  icon: 'editor-ul',
  category: 'common',

  attributes: {
    accordions: {
      type: 'array',
      default: [
        {
          isOpen: false,
          title: '',
          message: '',
        },
      ],
    },
    block_title: {
      type: 'string',
      default: ''
    }
  },

  edit: AccordionParentEdit,

  save: ({ attributes, setAttributes  }) => {

    
    const { accordions, block_title } = attributes;

    const toggleAccordion = (index) => {
      console.log('click');
      const newAccordions = [...accordions];
      newAccordions[index].isOpen = !newAccordions[index].isOpen;
      setAttributes({ accordions: newAccordions });
    };
    // Получение пути к корневой папке

    return (
      <div className='accordion-wrap'>
        {block_title ? <h2  className='accordion-block-title'>{block_title}</h2> : null}
        {accordions.map((accordion, index) => (
          <div className={`accordion`} key={index}>
            <div className='accordion-head'>
              <h3 className="accordion-title">{accordion.title}</h3>
              
              <div className='accordion-toggle-btn accordion-toggler'>
                  <object data={iconPlus} type="image/svg+xml"></object>
              </div>
            </div>
            
            <div className="accordion-content">
              <div className="accordion-message">
                {accordion.message}
              </div>
              {accordion.image ? <div className='accordion-image'><img className='lazy' data-src={accordion.image.url} alt={accordion.image.alt} /></div> : null}
            </div>
            
          </div>
        ))}
      </div>
    );
  },
});
