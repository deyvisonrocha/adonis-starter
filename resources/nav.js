module.exports = [
  {
    name: 'Dashboard',
    route: 'home',
    icon: 'fas fa-tachometer-alt'
  },
  {
    name: 'Users & Permissions',
    route: null,
    icon: 'fas fa-users-cog',
    children: [
      {
        name: 'Roles',
        route: null,
        icon: 'fas fa-user-tag',
      },
      {
        name: 'Permissions',
        route: null,
        icon: 'fas fa-exclamation',
      },
      {
        name: 'Users',
        route: 'users.index',
        icon: 'fas fa-user',
      }
    ]
  },

  {
    name: 'Logout',
    route: 'logout',
    icon: 'fas fa-sign-out-alt'
  }
]
