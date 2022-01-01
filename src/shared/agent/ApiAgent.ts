import axios from 'axios';

class ApiAgent {
	private readonly SERVER_PATH = `http://localhost:8000/api`;

	public async get<T>(path: string, data?: any) {
		return await (
			await axios.get<T>(`${this.SERVER_PATH}/${path}`, data)
		).data;
	}
	public async post<T>(path: string, data?: any) {
		return (await axios.post<T>(`${this.SERVER_PATH}/${path}`, data)).data;
	}

	public async put<T>(path: string, data?: any) {
		return (await axios.put<T>(`${this.SERVER_PATH}/${path}`, data)).data;
	}

	public async delete<T>(path: string, data?: any) {
		return (await axios.delete<T>(`${this.SERVER_PATH}/${path}`, data)).data;
	}
}

export default new ApiAgent();
