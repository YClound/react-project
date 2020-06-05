/* eslint-disable import/extensions */
import { lazy } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import BlankLayout from '../layouts/BlankLayout';

const config = [{
  path: '/user',
  component: BlankLayout, // 空白页布局
  children: [{
    path: '/user/login/:from?', // 路由路径
    name: '登录页', // 菜单名称 (不设置,则不展示在菜单栏中）
    icon: 'setting', // 菜单图标
    component: lazy(() => import('../pages/Login')), // 懒加载 路由组件
  }, {
    path: '*',
    component: lazy(() => import('../pages/NotFound')),
  }]
}, {
  path: '/',
  component: BasicLayout, // 基本布局
  admin: ['admin'],
  children: [{
    path: '/',
    exact: true,
    redirect: '/home'
  }, {
    path: '/home',
    name: '主页',
    icon: 'home',
    component: lazy(() => import('../pages/Hello')),
  }, {
    path: '/hello',
    name: '欢迎页',
    icon: 'smile',
    component: lazy(() => import('../pages/App')),
  }, {
    path: '/base',
    name: '基础用法',
    icon: 'smile',
    children: [{
      path: '/base/HOC',
      name: '高阶组件(HOC)',
      component: lazy(() => import('../pages/HOC')),
    }, {
      path: '/base/hook',
      name: 'Hook',
      component: lazy(() => import('../pages/Hooks')),
    }, {
      path: '/base/context',
      name: 'Context',
      component: lazy(() => import('../pages/Context')),
    }, {
      path: '/base/contextConsumer',
      name: 'contextConsumer',
      component: lazy(() => import('../pages/Context/consumer')),
    }, {
      path: '/base/propsComp',
      name: 'propsComp',
      component: lazy(() => import('../pages/ContextVsRedux/index')),
    }, {
      path: '/base/propsRedux',
      name: 'propsRedux',
      component: lazy(() => import('../pages/ContextVsRedux/reduxTest')),
      hideMenu: true
    }, {
      path: '/base/game',
      name: 'Game',
      component: lazy(() => import('../pages/Game')),
    }, {
      path: '/base/todoList',
      name: 'TodoList',
      component: lazy(() => import('../pages/TodoList')),
    }]
  }, {
    path: '*',
    component: lazy(() => import('../pages/NotFound')),
  }],
}, {
  path: '*',
  component: lazy(() => import('../pages/NotFound')),
}];

export default config;
