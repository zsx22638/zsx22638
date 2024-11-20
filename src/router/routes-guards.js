
import { Router } from 'vue-router';
import { useUserStore } from '@/stores/modules/user';


// 定义路由守卫
export function setupRouterGuard(router) {
    // 全局前置守卫
    router.beforeEach(async (to, from, next) => {


        const userStore = useUserStore(); // 在守卫中访问 store
        const token = userStore.token;
        const username = userStore.username

        if (to.meta.title) {
            document.title = '硅谷甄选：' + to.meta.title
        }

        if (token) {
            // 已经登录的用户
            if (to.path === '/login') {
                console.log('已经登陆过的用户！')
                next({ path: '/' });
            } else {
                // 登录成功访问其余路由（登录排除）
                if (username) {
                    next(); // 用户信息存在
                } else {
                    try {
                        console.log('用户信息不存在！')
                        await userStore.userInfo(); // 确保这是一个异步操作
                        next(); // 获取用户信息成功后继续导航
                    } catch (error) {
                        // token 过期或获取用户信息失败
                        await userStore.userLogOut(); // 用户登出
                        next({ path: '/login', query: { path: to.path } });
                    }
                }
            }
        } else {
            //没有登录的用户
            if (to.path == '/login') {
                next()
            } else {
                next({ path: '/login' })
            }
        }
        // next()
    });

    // 全局后置守卫
    router.afterEach(() => {
        NProgress.done(); // 进度条结束
    });
}
