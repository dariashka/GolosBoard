(function () {

    var app = angular.module('golosBoard', ['ngSanitize']);


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
        description: "<h1>Первый пост</h1><p>Напиши свой первый пост и получи бейдж.</p><iframe width='770' height='433' src='https://www.youtube.com/embed/uGF2kUcOefg' frameborder='0' allowfullscreen></iframe>"
    }, {
        id: "firstcomment",
        title: "Первый комментарий",
        description: "Напиши свой первый комментарий и получи бейдж"
    }, {
        id: "author",
        title: "xxx",
        description: "yyyyy"
    }, {
        id: "comment",
        title: "xxx",
        description: "yyyyy"
    }, {
        id: "curator",
        title: "xxx",
        description: "yyyyy"
    }, {
        id: "hit_top_comment",
        title: "xxx",
        description: "yyyyy"
    }, {
        id: "hit_top_payout",
        title: "xxx",
        description: "yyyyy"
    }];
})();