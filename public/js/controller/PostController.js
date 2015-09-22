app.controller('PostController', function($scope, $http) {
    $scope.posts = retrievePosts();

});


function retrievePosts(){
    var posts = $http.get("/posts_json/");
}
