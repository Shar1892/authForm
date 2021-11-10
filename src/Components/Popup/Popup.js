import './Popup.css';

const Popup = ({popupClose, isOpen, message}) => {
	const handleClose = (evt) => {
		if (evt.target === evt.currentTarget) {
			popupClose();
		}
	};

	return (
		<div
			className={`popup__overlay ${isOpen ? 'popup__overlay_visible' : ''}`}
			onClick={handleClose}
		>
			<div className='popup'>
				<p className='popup__title'>{message}</p>
			</div>
		</div>
	);
};

export default Popup;
