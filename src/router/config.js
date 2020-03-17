/* eslint-disable import/extensions */
import { lazy } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import BlankLayout from '../layouts/BlankLayout';

const config = [{
  path: '/',
  component: BlankLayout, // 空白页布局
  children: [{
    path: '/login', // 路由路径
    name: '登录页', // 菜单名称 (不设置,则不展示在菜单栏中）
    icon: 'setting', // 菜单图标
    component: lazy(() => import('../pages/Login')), // 懒加载 路由组件
  }, {
    path: '/',
    component: BasicLayout, // 基本布局
    children: [{
      path: '/home',
      name: 'home主页',
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
      children: [{
        path: '/base/hook',
        name: 'Hook',
        icon: 'smile',
        component: lazy(() => import('../pages/Hooks')),
      }, {
        path: '/base/context',
        name: 'Context',
        icon: 'smile',
        component: lazy(() => import('../pages/Context')),
      }, {
        path: '/base/route',
        name: 'Router',
        icon: 'smile',
        component: lazy(() => import('../pages/Router')),
      }, {
        path: '/base/game',
        name: 'Game',
        icon: 'form',
        component: lazy(() => import('../pages/Game')),
      }, {
        path: '/base/todoList',
        name: 'TodoList',
        icon: 'form',
        component: lazy(() => import('../pages/TodoList')),
      }]
    },
    {
      path: '/',
      exact: true,
      redirect: '/home'
    }, {
      path: '',
      component: lazy(() => import('../pages/NotFound')),
    }],
  }, {
    path: '',
    component: lazy(() => import('../pages/NotFound')),
  }]
}];

export default config;
