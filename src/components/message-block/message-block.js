import { MediaUpload, PlainText} from '@wordpress/block-editor';
const MessageBlock = ({ message, image, onMessageChange, onImageSelect }) => {
    return (
      <div className="message-block-wrap">
        <div className='column'>
          <PlainText
            tagName="div"
            multiline="p"
            placeholder="Enter text..."
            value={message}
            onChange={onMessageChange}
          />
        </div>
        <div className='column'>
          <MediaUpload
            onSelect={onImageSelect}
            type="image"
            value={image ? image.id : ''}
            render={({ open }) => (
              <button onClick={open}>
                {image ? (
                  <img src={image.url} alt={image.alt} style={{ maxWidth: '100%' }} />
                ) : (
                  'Add image'
                )}
              </button>
            )}
          />
        </div>
      </div>
    );
  };
  export default MessageBlock;