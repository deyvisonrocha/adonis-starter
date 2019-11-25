'use strict'

const Role = use('App/Models/Role')

class RoleController {
  async index({ view, request }) {
    let page = request.get().page || 1

    const roles = await Role.query().paginate(page, 3)

    return view.render('roles.index', { roles: roles.toJSON(), sectionTitle: 'Roles' })
  }

  create({ view }) {
    return view.render('roles.create', { sectionTitle: 'Role - Create' })
  }

  async store ({ request, response }) {
    const data = request.only(['name'])

    await Role.create(data)

    return response.route('roles.index', { sectionTitle: 'roles' })
  }

  async edit({ view, params }) {
    const role = await Role.find(~~params.id)

    return view.render('roles.edit', { role: role.toJSON(), sectionTitle: 'Role - Edit' })
  }
}

module.exports = RoleController
