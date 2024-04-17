/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardTransactionsImport } from './routes/dashboard/transactions'
import { Route as DashboardHomeImport } from './routes/dashboard/home'
import { Route as DashboardGoalsImport } from './routes/dashboard/goals'
import { Route as DashboardCategoriesImport } from './routes/dashboard/categories'
import { Route as AboutTosImport } from './routes/about/tos'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardTransactionsRoute = DashboardTransactionsImport.update({
  path: '/dashboard/transactions',
  getParentRoute: () => rootRoute,
} as any)

const DashboardHomeRoute = DashboardHomeImport.update({
  path: '/dashboard/home',
  getParentRoute: () => rootRoute,
} as any)

const DashboardGoalsRoute = DashboardGoalsImport.update({
  path: '/dashboard/goals',
  getParentRoute: () => rootRoute,
} as any)

const DashboardCategoriesRoute = DashboardCategoriesImport.update({
  path: '/dashboard/categories',
  getParentRoute: () => rootRoute,
} as any)

const AboutTosRoute = AboutTosImport.update({
  path: '/about/tos',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about/tos': {
      preLoaderRoute: typeof AboutTosImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/categories': {
      preLoaderRoute: typeof DashboardCategoriesImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/goals': {
      preLoaderRoute: typeof DashboardGoalsImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/home': {
      preLoaderRoute: typeof DashboardHomeImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/transactions': {
      preLoaderRoute: typeof DashboardTransactionsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutTosRoute,
  DashboardCategoriesRoute,
  DashboardGoalsRoute,
  DashboardHomeRoute,
  DashboardTransactionsRoute,
])

/* prettier-ignore-end */
