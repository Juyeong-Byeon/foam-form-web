import AuthValidator from './AuthValidator';

export default class LoginValidator implements AuthValidator {
	public validateUsername(username: string) {
		return { message: '', isValid: false };
	}
	public validatePassword(password: string) {
		return { message: '', isValid: false };
	}
	public validatePasswordCheck(password: string, passwordCheck: string) {
		return { message: '', isValid: false };
	}
}
