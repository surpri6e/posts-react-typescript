import axios from "axios";
import { IComment } from "../types/commentsTypes";
import { IPost } from "../types/postsTypes";

export default class PostService {
    static async getAll(limit: number = 10, page: number = 1, url: string = 'https://jsonplaceholder.typicode.com/posts') {
        const res = await axios.get<IPost[]>(url, {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return res;
    }

    static async getById(id: string, url: string = 'https://jsonplaceholder.typicode.com/posts/') {
        const res = await axios.get<IPost>(url + id);
        return res;
    }

    static async getCommets(id: string, url: string = 'https://jsonplaceholder.typicode.com/posts/') {
        const res = await axios.get<IComment[]>(url + id + '/comments');
        return res;
    }
}