//常量路由
export const constantRoute = [

    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/index.vue'),
    },

    /* 首页 */
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/pages/layout/index.vue'),
        redirect: '/home',
        children: [
            {
                path: 'home',  // 注意，这里不需要前面的斜杠
                name: 'Home',
                component: () => import('@/pages/layout/home/index.vue'),
            },
            {
                path: 'datashow',  // 用户管理路由
                name: 'DataShow',
                component: () => import('@/pages/layout/dataShow/index.vue'),  // 假设你有 user 组件
            },
            // 用户管理
            {
                path: 'userinfo',  // 数据展示路由
                name: 'Userinfo',
                component: () => import('@/pages/layout/jobSeeker/info/index.vue'),  // 假设你有 datashow 组件
            },
            {
                path: 'resume',  // 数据展示路由
                name: 'Resume',
                component: () => import('@/pages/layout/jobSeeker/resume/index.vue'),  // 假设你有 datashow 组件
            },

            // 招聘者管理
            {
                path: 'hrinfo',  // 数据展示路由
                name: 'HRInfo',
                component: () => import('@/pages/layout/Recruiter/info/index.vue'),  // 假设你有 datashow 组件
            },
            {
                path: 'position',  // 数据展示路由
                name: 'Position',
                component: () => import('@/pages/layout/Recruiter/position/index.vue'),  // 假设你有 datashow 组件
            },
        ],
    },


    // 404 页面路由
    {
        path: '/:catchAll(.*)',  // 捕获所有未匹配的路径
        name: 'NotFound',
        component: () => import('@/pages/404/index.vue'),
    },
    ]
