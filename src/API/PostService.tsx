import axios from "axios";

export default class PostService {
    static async getAll(limit: number = 10, page: number = 1, url: string = 'https://jsonplaceholder.typicode.com/posts') {
        const res = await axios.get(url, {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return res;
    }

    static async getById(id: string, url: string = 'https://jsonplaceholder.typicode.com/posts/') {
        const res = await axios.get(url + id);
        return res;
    }

    static async getCommets(id: string, url: string = 'https://jsonplaceholder.typicode.com/posts/') {
        const res = await axios.get(url + id + '/comments');
        return res;
    }
}