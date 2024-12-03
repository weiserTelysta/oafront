import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import frame_routes from "@/router/frame"
import login_routes from "@/router/login"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: frame_routes.concat(login_routes)
})

router.beforeEach((to, from) => {
  // 判断用户是否登录，如果没有登录
  // 并且访问的页面不是登录页面，那么就要跳转到登录页面
  const authStore = useAuthStore()
  if(!authStore.is_logined && to.name != 'login'){
    return {name: 'login'}
  }
})


export default router





