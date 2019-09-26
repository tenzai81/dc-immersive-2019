$.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?i=tt4520988&apikey=e03ca193",
    dataType: "JSON", // data type expected from server
    success: function(response) {
      console.log(response);
      showMovieDetails(response.Title, response.Director, response.Plot);
    },
    error: function(error) {
      console.log("Error: " + error);
    }
  });
  
  function showMovieDetails(title, director, plot) {
    var heading = $("<h1/>").text(title);
    $("main").append(heading);
    var director = $("<h2/>").text(director);
    $("main").append(director);
    var plot = $("<h3/>").text(plot);
    $("main").append(plot);
    
}