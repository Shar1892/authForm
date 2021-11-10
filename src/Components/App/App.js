import {useState} from 'react';

import Auth from '../Auth/Auth';
import Popup from '../Popup/Popup';
import './App.css';

function App() {
	const [popupMessage, setPopupMessage] = useState('');
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handlePopupOpen = (email, password) => {
		if (email) {
			setPopupMessage(`Отдаем данные: почта - ${email}; пароль - ${password}`);
		} else {
			setPopupMessage('По ссылке открываем страницу регистрации');
		}
		setIsPopupOpen(true);
	};

	const handlePopupClose = () => {
		setPopupMessage('');
		setIsPopupOpen(false);
	};

	return (
		<div className='App'>
			<Auth popupOpen={handlePopupOpen} />
			<Popup
				popupClose={handlePopupClose}
				isOpen={isPopupOpen}
				message={popupMessage}
			/>
		</div>
	);
}

export default App;
