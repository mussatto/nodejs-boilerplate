app.controller('CreatePostController', function($scope, $http) {
    $scope.short_tag = "";
    $scope.posts = [{title:"", content:"", language:""}];

    $scope.add_post = function(){
      $scope.posts.push({title:"", content:"", language:""});
    }

    $scope.create_post = function(){

      var data = { short_tag:$scope.short_tag, posts : $scope.posts};
      
      $http.post("/admin/create_post", data);
    }
});
