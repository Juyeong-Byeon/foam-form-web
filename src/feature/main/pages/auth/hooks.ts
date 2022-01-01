import ApiAgent from '../../../../shared/agent/ApiAgent';
import { AuthResultCode } from '../../../../shared/model/AuthResultCode';
import AuthValidator, { ValidationResult } from './model/AuthValidator';

export const useLogin = () => {
	const submit = async (id: string, password: string) => {
		try {
			const res = await ApiAgent.post<{ resultCode: AuthResultCode; userToken: string }>(
				'auth/signin/local',
				{
					id,
					password,
				},
			);

			if (res.resultCode !== 'SUCCESS') throw new Error(res.resultCode);
		} catch (e) {
			alert(e.message);
		}
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
