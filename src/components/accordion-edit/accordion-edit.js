import { TextControl } from '@wordpress/components';
import MessageBlock from '../message-block';
const AccordionEdit = (props) => {
    const { attributes, setAttributes } = props;
    const { isOpen, title, message, image } = attributes;
  
    const toggleAccordion = () => {
      const newAttributes = {
        ...attributes,
        isOpen: !isOpen
      }
      setAttributes(newAttributes);
    };
  
    const onTitleChange = (newTitle) => {
      const newAttributes = {
        ...attributes,
        title: newTitle, 
      };
      setAttributes(newAttributes);
    };
  
    const onImageSelect = (newImage) => {
      const newAttributes = {
        ...attributes,
        image: newImage, 
      };
      setAttributes(newAttributes);
    };
  
    const onMessageChange = (newMessage) => {
      const newAttributes = {
        ...attributes,
        message: newMessage, 
      };
      setAttributes(newAttributes);
    };
  
    return (
      <div className={`accordion ${isOpen ? 'open' : ''}`}>
        <h3 className="accordion-title" >
          <TextControl placeholder="Title" value={title} onChange={onTitleChange} />
        </h3>
        {isOpen && (
          <div className="accordion-content-edit">
            <MessageBlock
            message={message}
            image={image}
            onMessageChange={onMessageChange}
            onImageSelect={onImageSelect}
            />
          </div>
        )}
        <button className='accordion-show-btn' onClick={toggleAccordion}>{isOpen ? '-' : '+'}</button>
      </div>
    );
  };


  export default AccordionEdit;