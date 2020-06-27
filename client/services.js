angular.module('rocketreach-app.services', [])

.factory('Services', function ($http) {

  var getPosts = function(id) {
    let requestUrl = '/api/posts/' + id;
    return $http({
      method: 'GET',
      url: requestUrl
    })
    .then(function(resp) {
        let cleanedUpData = resp.data.replace('var tumblr_api_read = ', '');
        let cleanedUpData2 = cleanedUpData.substr(0, cleanedUpData.length - 2);
        let parsedData = JSON.parse(cleanedUpData2);
        let posts = parsedData.posts.filter((post) => {
            return post['photo-url-1280']
        }).map((post) => {
            return {
                url: post['url'],
                imageUrl: post['photo-url-1280']
            }
        });
        return posts;
    });
  };

  return {
    getPosts: getPosts
  };
});
