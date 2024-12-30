export const staticRoutes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      layout: 'blank'
    }
  },
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/views/profile/index.vue'),
    meta: {
      title: '账户资料'
    }
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '页面飞走了'
    }
  }
]

export const dynamicRoutes = [
  {
    name: 'system',
    path: '/system',
    redirect: '/system/user',
    requireAdmin: true,
    meta: {
      title: '系统管理',
      icon: 'bi:gear-fill'
    },
    children: [
      {
        name: 'system-user',
        path: '/system/user',
        component: () => import('@/views/system/user.vue'),
        requireAdmin: true,
        meta: {
          title: '用户管理',
          icon: 'bi:person-vcard-fill'
        }
      },
      {
        name: 'system-role',
        path: '/system/role',
        component: () => import('@/views/system/role.vue'),
        requireAdmin: true,
        meta: {
          title: '角色管理',
          icon: 'bi:person-badge-fill'
        }
      },
      {
        name: 'system-perm',
        path: '/system/perm',
        component: () => import('@/views/system/permission.vue'),
        requireAdmin: true,
        meta: {
          title: '权限管理',
          icon: 'bi:shield-lock-fill'
        }
      },
      {
        name: 'system-tenant',
        path: '/system/tenant',
        component: () => import('@/views/system/tenant.vue'),
        requireAdmin: true,
        meta: {
          title: '租户管理',
          icon: 'bi:person-circle'
        }
      }
    ]
  }
]
