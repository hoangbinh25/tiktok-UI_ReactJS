// Layouts
import { HeaderOnly } from '~/components/Layouts';

import HomePage from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Route không cần đăng nhập vẫn vào được
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Route đăng nhập mới vào được
const privateRoutes = [];

export { privateRoutes, publicRoutes };
