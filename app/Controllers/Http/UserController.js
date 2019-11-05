'use strict'

const User = use("App/Models/User")

class UserController {
  async login ({ auth, request, response }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return response.redirect('/')
  }

  async create ({ request, response }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return response.redirect('/login')
  }

  async logout ({ auth, response }) {
    await auth.logout()

    return response.redirect('/login')
  }
}

module.exports = UserController
