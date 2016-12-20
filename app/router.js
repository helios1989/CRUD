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
      resolve: {
        isEdit:() => false
      }
    })
    .state('editPost', {
      url: '/post/:id',
      component: 'createPost',//otra version
      resolve: {
        isEdit:() => true
      }
    })

  $urlRouterProvider.otherwise('/')
}

export default router