import angular from 'angular'
import nav from './nav/nav.component'
import footer from './footer/footer.component'

const common = angular
  .module('app.common', [])
  .component('navApp', nav)
  .component('footerApp', footer)
  .name

export default common
