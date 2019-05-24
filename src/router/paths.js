/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/feedback',
    view: 'FeedBack'
  },
  {
    path: '/configuracao',
    name: 'Configuração',
    view: 'Configuracao'
  },
  {
    path: '/pedidos',
    view: 'Pedidos'
  },
  {
    path: '/relatorios',
    name: 'Relatórios',
    view: 'Relatorios'
  },
  {
    path: '/notifications',
    name: 'Notificações',
    view: 'Notifications'
  }
]
