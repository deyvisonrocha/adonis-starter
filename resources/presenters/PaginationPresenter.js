const { BasePresenter } = require('edge.js')

class PaginationPresenter extends BasePresenter {

  isFirst(pagination) {
    return pagination.page == 1
  }

  isCurrent(pagination, page) {
    return pagination.page == page
  }

  isLast(pagination) {
    return pagination.page == pagination.lastPage
  }
}

module.exports = PaginationPresenter
