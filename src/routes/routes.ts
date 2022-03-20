import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";
import TodosPage from "../pages/TodosPage";
import { IRoute } from "../types/routesTypes";


export const privateRoutes: IRoute[] = [
    {path: '/', elem: MainPage, inHeader: 'Main', k: `pr-main`},
    {path: '/about', elem: AboutPage, inHeader: 'About', k: `pr-about`},
    {path: '/posts', elem: PostsPage, inHeader: 'Posts', k: `pr-posts`},
    {path: '/todos', elem: TodosPage, inHeader: 'Todos', k: `pr-todos`},
    {path: '/posts/:id', elem: PostPage, k: `pr-post`},
]

export const publicRoutes: IRoute[] = [
    {path: '/', elem: MainPage, inHeader: 'Main', k: `pu-main`},
    {path: '/about', elem: AboutPage, inHeader: 'About', k: `pu-about`},
    {path: '/log', elem: LoginPage, inHeader: 'Login', k: `pu-login`}
]