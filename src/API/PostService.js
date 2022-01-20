import axios from "axios";

export default class PostService {
    static async getAll () {
        const response = await axios.get('https://jsonplacasdaseholder.typicode.com/posasts')
        return response.data
    }
}