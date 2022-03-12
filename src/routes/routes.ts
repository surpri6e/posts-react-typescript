import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";
import { IRoute } from "../types/routesTypes";


export const privateRoutes: IRoute[] = [
    {path: '/', elem: MainPage, inHeader: 'Main'},
    {path: '/about', elem: AboutPage, inHeader: 'About'},
    {path: '/posts', elem: PostsPage, inHeader: 'Posts'},
    {path: '/posts/:id', elem: PostPage},
]

export const publicRoutes: IRoute[] = [
    {path: '/', elem: MainPage, inHeader: 'Main'},
    {path: '/about', elem: AboutPage, inHeader: 'About'},
    {path: '/log', elem: LoginPage, inHeader: 'Login'}
]