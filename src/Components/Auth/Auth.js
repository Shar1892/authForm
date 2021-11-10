import './Auth.css';
import {useFormWithValidation} from '../../utils/useFormWithValidation';

const Auth = ({popupOpen}) => {
	const {values, handleChange, errors, isFormValid} = useFormWithValidation();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		popupOpen(values.email, values.password);
		console.log(values.email, values.password, 'ping');
	};

	const handleToRegistr = () => {
		popupOpen();
	};

	return (
		<main className='auth'>
			<h1 className='auth__title'>Вход</h1>
			<form className='auth__form' onSubmit={handleSubmit} noValidate>
				<div className='auth__inputs-container'>
					<div className='auth__input-container'>
						<input
							className='auth__input'
							type='email'
							name='email'
							value={values.email || ''}
							onChange={handleChange}
							placeholder='Почта'
							required
						></input>
						<p className='auth__input-error'>{errors.email}</p>
					</div>
					<div className='auth__input-container'>
						<input
							className='auth__input'
							type='password'
							name='password'
							value={values.password || ''}
							onChange={handleChange}
							placeholder='Пароль'
							minLength='2'
							maxLength='40'
							required
						></input>
						<p className='auth__input-error'>{errors.password}</p>
					</div>
				</div>
				<button
					type='submit'
					className={`auth__submin-button ${
						isFormValid ? '' : 'auth__submin-button_disabled'
					}`}
				>
					Войти
				</button>
			</form>
			<p className='auth__to-register' onClick={handleToRegistr}>
				Регистрация
			</p>
		</main>
	);
};

export default Auth;
