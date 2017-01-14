(function () {

    var app = angular.module('golosBoard', ['ngSanitize']);


    app.controller('GolosBoardController', function ($scope, $location) {
        this.user = $location.search().user;
        this.descs = Description;
        this.stats = Statistics;
        this.nexts = NextBadges;

    });

    app.config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

    //var username = angular.element($('#golos-username')).val();

    var Statistics = [{
        id: "posts",
        description: "постов",
        test: "123",
    }, {
        id: "comments",
        description: "комментариев",
        test: "792",
    }, {
        id: "avevotes",
        description: "в среднем голосов за пост",
        test: "49",
    }, {
        id: "bestpayout",
        description: "лучшая выплата",
        test: "1794",
    }, {
        id: "avepayout",
        description: "в среднем выплата за пост",
        test: "123",
    }, {
        id: "golospower",
        description: "Сила Голоса",
        test: "3089",
    }, ]

    var Description = [
        {
            id: "firstpost",
            title: "Первый пост",
            description: "<p>Напишите свой первый пост на Голосе и получите бейдж.</p>"
        },
        {
            id: "firstcomment",
            title: "Первый комментарий",
            description: "<p>Напишите свой первый комментарий на Голосе и получите бейдж.</p>"
        }, {
            id: "firstvote",
            title: "Первый голос",
            description: "<html><p>Отдайте свой первый голос на Голосе и получите бейдж.</p></html>"
        },
        {
            id: "firstpayout",
            title: "Первая выплата",
            description: "yyyyy"
        },
        {
            id: "posts",
            title: "Посты",
            description: "yyyyy"
        },
        {
            id: "comments",
            title: "Комментарии",
            description: "yyyyy"
        },
        {
            id: "comments_in",
            title: "comments_in",
            description: "yyyyy"
        },
        {
            id: "votes",
            title: "votes",
            description: "yyyyy"
        },
        {
            id: "votes_in",
            title: "votes_in",
            description: "yyyyy"
        },
        {
            id: "payout",
            title: "payout",
            description: "yyyyy"
        },
        {
            id: "post4day",
            title: "post4day",
            description: "yyyyy"
        },
        {
            id: "postallweek",
            title: "postallweek",
            description: "yyyyy"
        },
        {
            id: "postallmonth",
            title: "postallmonth",
            description: "yyyyy"
        },
        {
            id: "topvoteday",
            title: "topvoteday",
            description: "yyyyy"
        },
        {
            id: "topvoteweek",
            title: "topvoteweek",
            description: "yyyyy"
        },
        {
            id: "topcommentday",
            title: "topcommentday",
            description: "yyyyy"
        },
        {
            id: "topcommentweek",
            title: "topcommentweek",
            description: "yyyyy"
        },
        {
            id: "toppayoutday",
            title: "toppayoutday",
            description: "yyyyy"
        },
        {
            id: "toppayoutweek",
            title: "toppayoutweek",
            description: "yyyyy"
        }
	];
    var NextBadges = [{
            id: "next_post",
            title: "next_post",
            description: "yyyyy"
        },
        {
            id: "next_comment",
            title: "next_comment",
            description: "yyyyy"
        },
        {
            id: "next_vote",
            title: "next_vote",
            description: "yyyyy"
        },
        {
            id: "next_payout",
            title: "next_payout",
            description: "yyyyy"
        }]


})();