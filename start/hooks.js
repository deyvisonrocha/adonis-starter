const { hooks } = require('@adonisjs/ignitor')

const NavMenu = require('./../resources/nav')

hooks.before.providersBooted(() => {
  const View = use('View')
  const Env = use('Env')
  View.global('NavMenu', NavMenu)
  View.global('AppName', Env.get('APP_NAME'))
})

hooks.after.providersBooted(() => {
  const View = use('Adonis/Src/View')

  View.global('range', (start, size) => {
    return [...Array(size).keys()].map(i => i + start)
  })
})
