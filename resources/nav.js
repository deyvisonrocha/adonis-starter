module.exports = [
  {
    name: 'Dashboard',
    route: 'home',
    icon: 'fas fa-tachometer-alt'
  },
  {
    name: 'Cadastros',
    route: null,
    icon: 'fas fa-adjust',
    children: [
      {
        name: 'Usuários',
        route: null,
        icon: 'fas fa-user',
      }
    ]
  },

  {
    name: 'Sair',
    route: 'logout',
    icon: 'fas fa-sign-out-alt'
  }
]
