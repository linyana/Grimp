/**
The routing of this file will not show the layout.
It is an independent new page.
the contents of the file still need to log in to access
 */
import { t } from '/@/hooks/web/useI18n';
import { LAYOUT_HOME } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

// test
// http:ip:port/main-out
export const mainOutRoutes: AppRouteModule[] = [
  {
    path: '/home',
    name: 'Home',
    component: LAYOUT_HOME,
    redirect: '/home/index',
    meta: {
      title: t('routes.home.index'),
      ignoreAuth: true,
    },
    children: [
      {
        path: 'w',
        name: 'w',
        meta: {
          title: t('routes.home.w'),
          ignoreAuth: true,
        },
        component: () => import('../../views/components/Nav.vue'),
      },
      {
        path: 'index',
        name: 'Home',
        meta: {
          title: t('routes.home.index'),
          ignoreAuth: true,
        },
        component: () => import('../../views/home/pages/index.vue'),
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: () => import('/@/views/home/feedback/index.vue'),
        meta: {
          title: t('routes.home.feedback'),
          ignoreAuth: true,
        },
      },
      {
        path: '/home/:path(.*)*',
        name: '404',
        component: () => import('/@/views/home/exception/index.vue'),
        meta: {
          title: '404',
          ignoreAuth: true,
        },
      },
      {
        path: 'area',
        name: 'area',
        meta: {
          title: t('routes.home.area'),
          ignoreAuth: true,
        },
        component: () => import('/@/views/home/pages/Area.vue'),
      },
      {
        path: 'dataquery',
        name: 'dataquery',
        meta: {
          title: t('routes.home.dataquery'),
          ignoreAuth: true,
        },
        component: () => import('/@/views/home/pages/DataQuery.vue'),
      },
      {
        path: 'feedback',
        name: 'feedback',
        meta: {
          title: t('routes.home.feedback'),
          ignoreAuth: true,
        },
        component: () => import('/@/views/home/pages/FeedBack.vue'),
      },
      {
        path: 'information',
        name: 'information',
        meta: {
          title: t('routes.home.information'),
          ignoreAuth: true,
        },
        component: () => import('/@/views/home/pages/Information.vue'),
      },
      {
        path: 'map',
        name: 'map',
        meta: {
          title: t('routes.home.map'),
          ignoreAuth: true,
        },
        component: () => import('/@/views/home/pages/Map.vue'),
      },
    ],
  },
];

export const mainOutRouteNames = mainOutRoutes.map((item) => item.name);
