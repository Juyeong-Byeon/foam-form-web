import AuthValidator from './AuthValidator';

export default class SignUpValidator implements AuthValidator {
	public validateUsername(username: string) {
		const regExp =
			/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{1,3}$/i;
		const isValid = !!username?.match(regExp);

		if (!username) return { message: '', isValid: false };

		return { message: isValid ? '' : '이메일 형식을 확인해주세요', isValid };
	}
	public validatePassword(password: string) {
		const regLength = /.{6,16}$/;
		const regChar = /^(?=.*[a-zA-Z])/;
		const regNumber = /(?=.*[0-9])/;
		const regSpacialChar = /(?=.*[!@#$%^*+=-])/;

		if (!password) return { message: '', isValid: false };

		if (!password.match(regLength)) {
			return { message: '비밀번호 길이는 6~16이에요', isValid: false };
		} else if (!password.match(regChar)) {
			return { message: '문자가 포함되어야해요', isValid: false };
		} else if (!password.match(regNumber)) {
			return { message: '숫자가 포함되어야해요', isValid: false };
		} else if (!password.match(regSpacialChar)) {
			return { message: '특수문자가 포함되어야해요', isValid: false };
		}

		return { message: '', isValid: true };
	}
	public validatePasswordCheck(password: string, passwordCheck: string) {
		const isValid = password === passwordCheck;

		if (!password || !passwordCheck) return { message: '', isValid: false };

		return { message: isValid ? '' : '비밀번호를 확인해 주세요.', isValid };
	}
}
