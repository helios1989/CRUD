import template from './pagination.html'
import controller from './pagination.controller'

const PaginationComponent = {
  bindings:{
    currentPage: '=',
    setPage: '&',
    pages: '<',
    pageSize: '<',
    numposts: '<'
  },
  template,
  controller
}

export default PaginationComponent