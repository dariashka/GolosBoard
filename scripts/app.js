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


    var Description = [
    { id: "firstpost", title: "firstpost", description: "yyyyy" },
    { id: "firstcomment", title: "firstcomment", description: "yyyyy" },
    { id: "firstpayout", title: "firstpayout", description: "yyyyy" },
    { id: "posts", title: "posts", description: "yyyyy" },
    { id: "comments", title: "comments", description: "yyyyy" },
    { id: "comments_in", title: "comments_in", description: "yyyyy" },
    { id: "votes", title: "votes", description: "yyyyy" },
    { id: "votes_in", title: "votes_in", description: "yyyyy" },
    { id: "payout", title: "payout", description: "yyyyy" },
    { id: "post4day", title: "post4day", description: "yyyyy" },
    { id: "postallweek", title: "postallweek", description: "yyyyy" },
    { id: "postallmonth", title: "postallmonth", description: "yyyyy" },
    { id: "topvoteday", title: "topvoteday", description: "yyyyy" },
    { id: "topvoteweek", title: "topvoteweek", description: "yyyyy" },
    { id: "topcommentday", title: "topcommentday", description: "yyyyy" },
    { id: "topcommentweek", title: "topcommentweek", description: "yyyyy" },
    { id: "toppayoutday", title: "toppayoutday", description: "yyyyy" },
    { id: "toppayoutweek", title: "toppayoutweek", description: "yyyyy" },
    { id: "next_post", title: "next_post", description: "yyyyy" },
    { id: "next_comment", title: "next_comment", description: "yyyyy" },
    { id: "next_vote", title: "next_vote", description: "yyyyy" },
    { id: "next_payout", title: "next_payout", description: "yyyyy" }
	];


})();
