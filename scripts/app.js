(function () {

    var app = angular.module('golosBoard', ['ngSanitize']);


    app.controller('GolosBoardController', function ($scope, $log, $http, $location) {
        this.user = $location.path();
        this.descs = Description;
        this.stats = Statistics;
        this.nexts = NextBadges;
        this.showUser = function () {
            $location.path('@' + $scope.text);
            var path = $location.path();
            this.user = path.substr(1);;
        }
        $scope.url = "../userstats.php?name=" + this.user.substr(1);
        $http.get($scope.url)
            .then(function (response) {
                $scope.statsData = response.data;
            });

        this.username_lowercase = function () {
            angular.element($('#golos-username-search')).val() = angular.element($('#golos-username-search')).val().toLowerCase();
        }

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
        description: "постов"
    }, {
        id: "comments",
        description: "комментариев"
    }, {
        id: "avevotes",
        description: "в среднем голосов за пост"
    }, {
        id: "bestpayout",
        description: "выплачено"
    }, {
        id: "avepayout",
        description: "в среднем выплата за пост"
    }, {
        id: "golospower",
        description: "Сила Голоса"
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
            description: "<p>Получите первую выплату на Голосе и бейдж в придачу.</p>"
        },
        {
            id: "firstcommented",
            title: "First reply",
            description: "<p>Get a reply on one of your post or comment.</p>"
        }, 
		{
            id: "firstvoted",
            title: "First upvote",
            description: "<html><p>Get a first upvote on one of your post or comment.</p></html>"
        },
        {
            id: "posts",
            title: "Посты",
            description: "<p>Пишите посты и получайте новые бейджи за бОльшее их количество.</p>"
        },
        {
            id: "comments",
            title: "Вы комментируете",
            description: "<p>Пишите комментарии и получайте новые бейджи за бОльшее их количество.</p>"
        },
        {
            id: "votes",
            title: "Вы голосуете",
            description: "<p>Голосуйте за посты на Голосе и получайте новые бейджи за бОльшее их количество.</p>"
        },
        {
            id: "payout",
            title: "Выплата",
            description: "yyyyy"
        },
        {
            id: "commented",
            title: "Вас комментируют",
            description: "<p>Общайтесь с другими пользователями и получайте новые бейджи за количество входящих комментариев.</p>"
        },
        {
            id: "voted",
            title: "За вас голосуют",
            description: "<p>Пишите больше классных постов и собирайте много голосов, а с ними и новые бейджи за все бОльшее их количество.</p>"
        },
        {
            id: "topvotedday",
            title: "Лучший пост по количеству голосов за день",
            description: "<p>Ваш пост набрал больше всего голосов на платформе за день? Награда ваша!</p>"
        },
        {
            id: "topvotedweek",
            title: "Лучший пост по количеству голосов за неделю",
            description: "<p>Ваш пост набрал больше всего голосов на платформе за неделю? Награда ваша!</p>"
        },
        {
            id: "topcommentedday",
            title: "Самый обсуждаемый пост за день",
            description: "<p>Ваш пост обсуждали на платформе больше всех за день? Награда ваша!</p>"
        },
        {
            id: "topcommentedweek",
            title: "Самый обсуждаемый пост за неделю",
            description: "<p>Ваш пост обсуждали на платформе больше всех за неделю? Награда ваша!</p>"
        },
        {
            id: "toppayoutday",
            title: "Самый дорогой пост за день",
            description: "<p>Ваш пост стал самым высокооплачиваемым за день? Награда ваша!</p>"
        },
        {
            id: "toppayoutweek",
            title: "Самый дорогой пост за неделю",
            description: "<p>Ваш пост стал самым высокооплачиваемым за неделю? Награда ваша!</p>"
        },
        {
            id: "post4day",
            title: "4 поста за день",
            description: "<p>Напишите четыре поста за один день и получите награду.</p>"
        },
        {
            id: "postallweek",
            title: "Посты каждый день всю неделю",
            description: "<p>Держите ритм! Пишите посты каждый день в течение недели, и награда станет вашей.</p>"
        },
        {
            id: "postallmonth",
            title: "Посты каждый день весь месяц",
            description: "<p>Держите ритм! Пишите посты каждый день в течение месяца, и награда станет вашей.</p>y"
        },
	];
    var NextBadges = [
	{
            id: "next_posts",
            title: "Еще больше постов",
            description: "<p>Пишите посты и получайте новые бейджи за бОльшее их количество.</p>"
        },
		{
            id: "next_comments",
            title: "Next comments award",
            description: "<p>Publish more replies to other's posts or comments to get this award.</p>"
        },
		{
            id: "next_votes",
            title: "Next upvote award",
            description: "<p>Votes more other authors to get this award.</p>"
        },
        {
            id: "next_payout",
            title: "Больше денег!",
            description: "<p>Пишите посты, комментарии, ставьте голоса и общайтесь с другими пользователями. Зарабатывайте деньги и новые бейджи в придачу.</p>"
        },
        {
            id: "next_commented",
            title: "Еще больше комментариев",
            description: "<p>Пишите комментарии и получайте новые бейджи за бОльшее их количество.</p>"
        },
        {
            id: "next_voted",
            title: "Еще больше голосов",
            description: "<p>Голосуйте больше и получайте новые бейджи за бОльшее их количество.</p>"
        },
     	]

})();
