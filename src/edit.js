import { InspectorControls} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';

import AccordionEdit from './components/accordion-edit';


const AccordionParentEdit = (props) => {
  const { attributes, setAttributes } = props;
  const { accordions, block_title } = attributes;

  const addAccordion = () => {
    const newAccordion = {
      isOpen: true,
      title: '',
      message: '',
    };
    setAttributes({ accordions: [...accordions, newAccordion] });
  };

  const updateAccordion = (index, newAccordion) => {
    const newAccordions = [...accordions];
    newAccordions[index] = newAccordion;
    setAttributes({ accordions: newAccordions });
  };

  const onBlockTitleChange = (newTitle) => {
    const newAttributes = {
      ...attributes,
      block_title: newTitle, 
    };
    setAttributes(newAttributes);
  }

  return (
    <div className='accordion_editor'>
      <InspectorControls>
        <PanelBody title="Settings">
          <Button onClick={addAccordion}>
            Add accordion
          </Button>
        </PanelBody>
      </InspectorControls>
      <h3 className="accordion-block-title" >
        <TextControl placeholder='Enter block title' value={block_title} onChange={onBlockTitleChange} />
      </h3>
      {accordions.map((accordion, index) => (
        <AccordionEdit
          key={index}
          attributes={accordion}
          setAttributes={(newAccordion) => updateAccordion(index, newAccordion)}
        />
      ))}
    </div>
  );
};

export default AccordionParentEdit;