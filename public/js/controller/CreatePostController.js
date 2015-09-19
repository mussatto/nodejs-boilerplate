app.controller('CreatePostController', function($scope) {
    $scope.short_tag = "";
    $scope.posts = [{title:"", content:"", language:""}];

    $scope.addPost = function(){
      $scope.posts.push({title:"", content:"", language:""});
    }
});
