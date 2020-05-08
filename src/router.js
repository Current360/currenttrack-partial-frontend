import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/Dashboard'),
          meta: {
            title: 'Dashboard'
          }
        },
        // Notifications
        {
          name: 'Notifications',
          path: 'notifications',
          component: () => import('@/views/Notifications'),
          meta: {
            title: 'Notifications'
          }
        },
        // Pages
        {
          name: 'Icons',
          path: 'pages/icons',
          component: () => import('@/views/pages/Icons')
        },
        {
          name: 'Typography',
          path: 'pages/typography',
          component: () => import('@/views/pages/Typography')
        },
        // Clients
        {
          name: 'Clients',
          path: '/clients',
          component: () => import('@/views/clients/ClientsList'),
          meta: {
            title: 'Clients'
          }
        },
        {
          name: 'Add New Client',
          path: '/clients/add',
          component: () => import('@/views/clients/AddClient'),
          meta: {
            title: 'Add New Client'
          }
        },
        {
          name: 'Update Client',
          path: '/clients/modify/*',
          component: () => import('@/views/clients/ModifyClient'),
          meta: {
            title: 'Update Client'
          }
        },
        // Jobs
        {
          name: 'Jobs',
          path: '/jobs',
          component: () => import('@/views/jobs/JobsList'),
          meta: {
            title: 'Jobs'
          }
        },
        {
          name: 'Add New Job',
          path: '/jobs/add',
          component: () => import('@/views/jobs/AddJob'),
          meta: {
            title: 'Add New Job'
          }
        },
        {
          name: 'Update Job',
          path: '/jobs/modify/*',
          component: () => import('@/views/jobs/ModifyJob'),
          meta: {
            title: 'Update Job'
          }
        },
        // Task
        {
          name: 'Tasks',
          path: '/tasks',
          component: () => import('@/views/tasks/TasksList'),
          meta: {
            title: 'Tasks'
          }
        },
        {
          name: 'Add New Task',
          path: '/tasks/add',
          component: () => import('@/views/tasks/AddTask'),
          meta: {
            title: 'Add New Task'
          }
        },
        {
          name: 'Update Task',
          path: '/tasks/modify/*',
          component: () => import('@/views/tasks/ModifyTask'),
          meta: {
            title: 'Update Task'
          }
        },
        // User
        {
          name: 'Users',
          path: '/users',
          component: () => import('@/views/users/UsersList'),
          meta: {
            title: 'Users'
          }
        },
        {
          name: 'Add New User',
          path: '/users/add',
          component: () => import('@/views/users/AddUser'),
          meta: {
            title: 'Add New User'
          }
        },
        {
          name: 'Update User',
          path: '/users/modify/*',
          component: () => import('@/views/users/ModifyUser'),
          meta: {
            title: 'Update User'
          }
        },
        // Analytics
        {
          name: 'Analytics',
          path: '/analytics',
          component: () => import('@/views/analytics/Analytics'),
          meta: {
            title: 'Analytics'
          }
        },
        {
          name: 'Analytics | Clients',
          path: '/analytics/clients/*',
          component: () => import('@/views/analytics/ClientAnalytics'),
          meta: {
            title: 'Analytics | Clients'
          }
        },
        {
          name: 'Analytics | Jobs',
          path: '/analytics/jobs/*',
          component: () => import('@/views/analytics/JobAnalytics'),
          meta: {
            title: 'Analytics | Jobs'
          }
        },
        {
          name: 'Analytics | Tasks',
          path: '/analytics/tasks/*',
          component: () => import('@/views/analytics/TaskAnalytics'),
          meta: {
            title: 'Analytics | Tasks'
          }
        },
        {
          name: 'Analytics | Users',
          path: '/analytics/users/*',
          component: () => import('@/views/analytics/UserAnalytics'),
          meta: {
            title: 'Analytics | Users'
          }
        },
        // Reports
        {
          name: 'Reports',
          path: '/reports',
          component: () => import('@/views/reports/Reports'),
          meta: {
            title: 'Reports'
          }
        },
        {
          name: 'Reports | Clients',
          path: '/reports/clients/*',
          component: () => import('@/views/reports/ClientReport'),
          meta: {
            title: 'Reports | Clients'
          }
        },
        {
          name: 'Reports | Jobs',
          path: '/reports/jobs/*',
          component: () => import('@/views/reports/JobReport'),
          meta: {
            title: 'Reports | Jobs'
          }
        },
        {
          name: 'Reports | Tasks',
          path: '/reports/tasks/*',
          component: () => import('@/views/reports/TaskReport'),
          meta: {
            title: 'Reports | Tasks'
          }
        },
        {
          name: 'Reports | Users',
          path: '/reports/users/*',
          component: () => import('@/views/reports/UserReport'),
          meta: {
            title: 'Reports | Users'
          }
        },
        // Estimates
        {
          name: 'Estimates',
          path: '/estimates',
          component: () => import('@/views/estimates/Estimates'),
          meta: {
            title: 'Estimates'
          }
        },
        {
          name: 'Job Estimate',
          path: '/estimates/jobs/*',
          component: () => import('@/views/estimates/JobEstimates'),
          meta: {
            title: 'Job Estimate'
          }
        },
        // Settings
        {
          name: 'Settings',
          path: '/settings',
          component: () => import('@/views/settings/Settings'),
          meta: {
            title: 'Settings'
          }
        },
        // Quickbooks
        {
          name: 'Quickbooks',
          path: '/quickbooks',
          component: () => import('@/views/quickbooks/Quickbooks'),
          meta: {
            title: 'Quickbooks'
          }
        },
        // Support
        {
          name: 'Support',
          path: '/support',
          component: () => import('@/views/support/Support'),
          meta: {
            title: 'Support'
          }
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/tables/RegularTables')
        },
        // Group
        {
          name: 'Groups',
          path: '/groups',
          component: () => import('@/views/groups/GroupsList'),
          meta: {
            title: 'Groups'
          }
        },
        {
          name: 'Add New Group',
          path: '/groups/add',
          component: () => import('@/views/groups/AddGroup'),
          meta: {
            title: 'Add New Group'
          }
        },
        {
          name: 'Update Group',
          path: '/groups/modify/*',
          component: () => import('@/views/groups/ModifyGroup'),
          meta: {
            title: 'Update Group'
          }
        },
        // Event
        {
          name: 'Events',
          path: '/events',
          component: () => import('@/views/events/EventsList'),
          meta: {
            title: 'Events'
          }
        },
        {
          name: 'Add New Event',
          path: '/events/add',
          component: () => import('@/views/events/AddEvent'),
          meta: {
            title: 'Add New Event'
          }
        },
        {
          name: 'Update Event',
          path: '/events/modify/*',
          component: () => import('@/views/events/ModifyEvent'),
          meta: {
            title: 'Update Event'
          }
        },
        // WorkCodes
        {
          name: 'WorkCodes',
          path: '/workcodes',
          component: () => import('@/views/workcodes/WorkCodesList'),
          meta: {
            title: 'WorkCodes'
          }
        },
        {
          name: 'Add New WorkCode',
          path: '/workcodes/add',
          component: () => import('@/views/workcodes/AddWorkCode'),
          meta: {
            title: 'Add New WorkCode'
          }
        },
        {
          name: 'Update WorkCode',
          path: '/workcodes/modify/*',
          component: () => import('@/views/workcodes/ModifyWorkCode'),
          meta: {
            title: 'Update WorkCode'
          }
        },
        // Workback
        {
          name: 'Workbacks',
          path: '/workbacks',
          component: () => import('@/views/workbacks/WorkbacksList'),
          meta: {
            title: 'Workbacks'
          }
        },
        {
          name: 'Add New Workback',
          path: '/workbacks/add',
          component: () => import('@/views/workbacks/AddWorkback'),
          meta: {
            title: 'Add New Workback'
          }
        },
        {
          name: 'Update Workback',
          path: '/workbacks/modify/*',
          component: () => import('@/views/workbacks/ModifyWorkback'),
          meta: {
            title: 'Update Workback'
          }
        },
        // Search Result
        {
          name: 'Search Results',
          path: 'search/*',
          component: () => import('@/views/SearchResults')
        },
        // Provider
        {
          name: 'Providers',
          path: '/providers',
          component: () => import('@/views/providers/ProvidersList'),
          meta: {
            title: 'Providers'
          }
        },
        {
          name: 'Add New Provider',
          path: '/providers/add',
          component: () => import('@/views/providers/AddProvider'),
          meta: {
            title: 'Add New Provider'
          }
        },
        {
          name: 'Update Provider',
          path: '/providers/modify/*',
          component: () => import('@/views/providers/ModifyProvider'),
          meta: {
            title: 'Update Provider'
          }
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/maps/GoogleMaps')
        },
        // User Profile
        {
          name: 'User Profile',
          path: 'user',
          component: () => import('@/views/UserProfile'),
          meta: {
            title: 'User Profile'
          }
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/Upgrade')
        },
        // 404
        {
          name: '404',
          path: '*',
          component: () => import('@/views/404'),
          meta: {
            title: '404'
          }
        }
      ]
    }
  ]
})
