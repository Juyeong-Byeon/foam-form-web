import AuthValidator from './AuthValidator';

export default class SignUpValidator implements AuthValidator {
	public validateUsername(username: string) {
		return { message: username, isValid: true };
	}
	public validatePassword(password: string) {
		return { message: password, isValid: true };
	}
	public validatePasswordCheck(password: string, passwordCheck: string) {
		return { message: passwordCheck, isValid: password === passwordCheck };
	}
}
