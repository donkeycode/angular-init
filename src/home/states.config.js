function($stateProvider) {
    $stateProvider.state({
        url: '/',
        name: 'dc',
        templateUrl: 'dc.home.templates.layout',
        controller: 'DcHomeMainController',
        abstract: true
    })
    .state('dc.home', {
        url: '',
        templateUrl: 'dc.home.templates.home',
        controller: 'DcHomeHomeController'
    });
}
