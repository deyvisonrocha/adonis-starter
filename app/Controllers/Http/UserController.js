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
    return view.render('users.create', { sectionTitle: 'User - Create' })
  }

  async store ({ request, response, session }) {
    await User.create(request.only(['username', 'email', 'password']))

    session.flash({ successMessage: 'User has been created!' })

    return response.route('users.index')
  }

  async edit({ view, params }) {
    const user = await User.find(~~params.id)

    return view.render('users.edit', { user: user.toJSON(), sectionTitle: 'User - Edit' })
  }

  async update({ request, response, params, session }) {
    const user = await User.find(~~params.id)

    const { username, password, email } = request
      .only(['username', 'password', 'email'])

    user.username = username
    user.email = email

    if (password) {
      user.password = password
    }

    await user.save()

    session.flash({ successMessage: 'User has been updated!' })

    return response.route('users.index', { sectionTitle: 'User s' })
  }

  async destroy({ response, params, session }) {
    const user = await User.find(~~params.id)

    await user.delete()

    session.flash({ successMessage: 'User has been removed!' })

    return response.route('users.index')
  }
}

module.exports = UserController
