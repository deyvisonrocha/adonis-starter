'use strict'

const User = use("App/Models/User")

class UserController {
  async index({ view, request }) {
    let page = request.get().page || 1

    const users = await User.query().paginate(page, 3)

    return view.render('users.index', { users: users.toJSON(), sectionTitle: 'Users' })
  }

  async show({ view, params }) {
    const user = await User.find(params.id)

    return view.render('users.show', { user: user, sectionTitle: 'User - Show' })
  }

  create({ view }) {
    return view.render('users.create', { sectionTitle: 'User - Edit' })
  }

  async store ({ request, response }) {
    const data = request.only(['username', 'email', 'password'])

    await User.create(data)

    return response.route('users.index', { sectionTitle: 'Users' })
  }
}

module.exports = UserController
