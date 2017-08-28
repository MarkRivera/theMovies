$( document ).ready(function() {
    console.log( "ready!" );
    var imdbUrl = "https://api.themoviedb.org/3/search/movie?api_key=a6a4e825f844dc112dab513389c719fe";
    var searchBar = $("#movie_search_bar");
    var userInput;
    
    var searchResults;
    var posterLink;
    var movieTitle;
    var movieDescription;
    
    //input functionality
    
    searchBar.keyup(function(){
        userInput = searchBar.val();
        setTimeout(function(){
            if (userInput.length >= 1) {
                console.log("I'm here!");
                ajaxMovieTitlesForAutofill(imdbUrl, "GET");    
            }
        },1000);
    });
    
    function ajaxMovieTitlesForAutofill(url, methodType){
        
        $.ajax({
            url: url,
            data: "query="+userInput,
            type: methodType,
            success: function(result) {
            //save results in a more accessible variable.
                searchResults = result;
                console.log(searchResults);
            }
        });
    }
    
    
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