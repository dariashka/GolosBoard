(function () {

    var app = angular.module('golosBoard', []);


    app.controller('GolosBoardController', function ($scope, $location) {
        this.user = $location.search().user;
        this.descs = Description;

    });

    app.config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

    //var username = angular.element($('#golos-username')).val();


    var Description = [{
        id: "firstpost",
        title: "Первый пост",
        description: "Напиши свой первый пост на Голосе и получи бейдж"
    }, {
        id: "firstcomment",
        title: "Первый комментарий",
        description: "Напиши свой первый комментарий и получи бейдж"
    }];

})();