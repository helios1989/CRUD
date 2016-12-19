const router = ($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      component: 'mainApp'//otra version
    })
    .state('about', {
      url: '/about',
      component: 'aboutApp'//otra version
    })
    .state('posts', {
      url: '/posts',
      component: 'postApp',//otra version
    })
    .state('post', {
      url: '/post',
      component: 'createPost',//otra version
    })

  $urlRouterProvider.otherwise('/')
}

export default router