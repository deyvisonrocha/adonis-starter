'use strict'

class AuthController {
  async login ({ auth, request, response }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return response.redirect('/')
  }

  async logout ({ auth, response }) {
    await auth.logout()

    return response.redirect('/login')
  }
}

module.exports = AuthController
