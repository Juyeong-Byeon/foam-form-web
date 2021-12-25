import AuthValidator, { ValidationResult } from './model/AuthValidator';

export const useLogin = () => {
	const submit = (id: string, password: string) => {
		alert(`${id}, ${password}`);
	};

	return {
		submit,
	};
};

export function useAuthValidator(
	authValidator: AuthValidator,
	userName: string,
	password: string,
	passwordCheck: string,
): {
	userNameValidation: ValidationResult;
	passwordValidation: ValidationResult;
	passwordCheckValidation: ValidationResult;
	canSubmit: boolean;
} {
	const { validatePassword, validatePasswordCheck, validateUsername } = authValidator;

	const userNameValidation = validateUsername(userName);
	const passwordValidation = validatePassword(password);
	const passwordCheckValidation = validatePasswordCheck(password, passwordCheck);

	return {
		userNameValidation,
		passwordValidation,
		passwordCheckValidation,
		canSubmit:
			userNameValidation.isValid &&
			passwordValidation.isValid &&
			passwordCheckValidation.isValid,
	};
}
