import Ukraine from '../pages/Ukraine/Ukraine.jsx';
import Europe from '../pages/Europe/Europe.jsx';
import Main from '../pages/Main/Main.jsx';
import Blog from '../pages/Blog/Blog.jsx';
import News from '../pages/News/News.jsx';
import AdminPanel from '../pages/AdminPanel/AdminPanel.jsx';

export const routes = [
    {
        name: 'Main',
        component: Main,
        path: '/',
        exact: true,
    },
    {
        name: 'Ukraine',
        component: Ukraine,
        path: '/ukraine',
        exact: true,
    },
    {
        name: 'Europe',
        component: Europe,
        path: '/europe',
        exact: true,
    },
    {
        name: 'Blog',
        component: Blog,
        path: '/blog',
        exact: true,
    },
    {
        name: 'News',
        component: News,
        path: '/news',
        exact: true,
    },
    {
        name: 'AdminPanel',
        component: AdminPanel,
        path: '/admin',
        exact: false,
    },
];
