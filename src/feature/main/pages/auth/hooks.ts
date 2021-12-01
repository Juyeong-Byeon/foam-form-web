export const useLogin = () => {
	const submit = (id: string, password: string) => {
		alert(`${id}, ${password}`);
	};

	return {
		submit,
	};
};
