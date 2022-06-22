import axios from 'axios';

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        return response.data
    }
}
