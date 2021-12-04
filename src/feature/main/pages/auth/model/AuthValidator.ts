interface AuthValidator {
	validateUsername: (username: string) => ValidationResult;
	validatePassword: (password: string) => ValidationResult;
	validatePasswordCheck: (password: string, passwordCheck: string) => ValidationResult;
}

export interface ValidationResult {
	message: string;
	isValid: boolean;
}

export default AuthValidator;
