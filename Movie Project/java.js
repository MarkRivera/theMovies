$( document ).ready(function() {
    console.log( "ready!" );
    var imdbUrl = "https://api.themoviedb.org/3/search/movie?api_key=a6a4e825f844dc112dab513389c719fe";
    var $searchBar = $("#movie_search_bar");
    var userInput;
    
    var searchResults;
    var posterLink;
    var movieTitle;
    var movieDescription;
    
    //input functionality
    $searchBar.keypress(function(){
        userInput = $searchBar.val();
    });
    
    
    $searchBar.autocomplete({
        minLength: 2,
        source: function (request, response) {
            $.ajax({
              url: imdbUrl,
              data: "query="+userInput,
              type: "GET",
              success: function (result) {
                  var titles = [];
                  for (i = 0; i < 10; i++) {
                      titles.push(result.results[i].title);
                  }
                  response(titles);
              }
            });
        }
    });
    
//    $searchBar.keypress(function(){
//        userInput = $searchBar.val();
//        setTimeout(function(){
//            if (userInput.length >= 1) {
//                console.log("I'm here!");
//                ajaxMovieTitlesForAutofill(imdbUrl, "GET");    
//            }
//        },1000);
//    });
    
//    function ajaxMovieTitlesForAutofill(url, methodType){
//        
//        $.ajax({
//            url: url,
//            data: "query="+userInput,
//            type: methodType,
//            success: function(result) {
//            //save results in a more accessible variable.
//                searchResults = result;
//                getTenSuggestions (0);
//                console.log(searchResults);
//            }
//        });
//    }
//    
//    
//    function getTenSuggestions (n){
//        var titleArr = [];
//        
//        for ( n; n < 10; n++ ) {
//            titleArr.push(searchResults.results[n].title);
//        }
//        console.log(titleArr);
//        createUniqueTitleArray(titleArr);
//    };
//    
//    function createUniqueTitleArray (titleArr) {
//      var uniqueTitles = titleArr.filter(function(item, index, title){
//          return index == title.indexOf(item);
//      });  
//        createAutocomplete(uniqueTitles);
//    };
//    
//    function createAutocomplete (uniqueTitles) {
//      $("#movie_search_bar").autocomplete({
//       source: uniqueTitles
//    });  
//    };
    
//    function placeTenSuggestionsInAutoFill (titleArr) {
//        var uniqueTitles = titleArr.filter(function(item, index, title){
//            return index == title.indexOf(item);
//        });
//        $.each(uniqueTitles, function(index, value){
//            $('<option></option>', {
//                id: "movies",
//                value: value,
//                           }).appendTo('#movies');
//        });
//    }
    //Async call for movie data
//    $.ajax({
//        url: imdbUrl,
//        data: "query=Logan",
//        success: function(result){
//            
//        // various Movie elements cached:
//        searchResults = result;
//        
//        posterLink = "https://image.tmdb.org/t/p/w500"+searchResults.results["0"].poster_path;
//        
//        movieTitle = searchResults.results["0"].title;
//            
//        movieDescription = searchResults.results["0"].overview    
//        console.log(searchResults.results["0"].title);
//        console.log(searchResults);
//        // Poster GET is in here until I can set up the event handlers for this original GET.
//        $("#movie_poster").attr("src",posterLink);
//        $("#movie_title").text(movieTitle);
//        $("#movie_description").text(movieDescription);
//        }
//    });
});