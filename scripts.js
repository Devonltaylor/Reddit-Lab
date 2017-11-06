$.get('https://www.reddit.com/r/aww/.json', function(data) {

  // this will run through first 10 posts
  var listOfPosts = data.data.children; // returns an array

  //loop to go through each post
  for (var i = 1; i < 11; i++) {

  	var currentArticle = listOfPosts[i];
  	var title = currentArticle.data.title;
  	var link = currentArticle.data.url;
    var thumbnail = currentArticle.data.thumbnail;

  	//pull html content
  	var postElement = $("<section>");


  	var flexContainer = $("<div id='flexContainer'>");
    var textHolder = $("<div id='textContent'>");
  	var imageHolder = $("<div>");
  	imageHolder.append("<img src=" + thumbnail + ">");


  	var articleTitle = $("<h4 class='title'>");
  	articleTitle.append(title);
  	var articleLink = $("<a href='" + link + "'>Want to view more? Click here!</a>");

  	textHolder.append(articleTitle);
  	textHolder.append(articleLink);
  	flexContainer.append(imageHolder);
  	flexContainer.append(textHolder);

  	postElement.append(flexContainer);
  	$("#mainPage").append(postElement);
  }
});
