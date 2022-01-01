import { ApiResponseStatus } from '../../../../../shared/model/ApiResponseStatus';

const signUpStatusMessageMap: {
	[key in ApiResponseStatus]: { message: string; isSuccess: boolean };
} = {
	['SUCCESS']: {
		message: '회원가입에 성공했습니다.',
		isSuccess: true,
	},
	['EXIST']: {
		message: '이미 등록된 이메일입니다.',
		isSuccess: false,
	},
	['ERROR']: {
		message: '잠시후에 다시시도해주세요.',
		isSuccess: false,
	},
};

export { signUpStatusMessageMap };
