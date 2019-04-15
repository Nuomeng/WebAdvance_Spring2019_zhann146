console.log("Test");

(function movieDatabase() {
  this.init = function() {
    this.search();
  };

  this.search = function() {

    var form = document.querySelector("#searchForm");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      var value = document.querySelector("#SearchBox").value;

      form.reset();

      getData(value.split(' ').join("+"));

    });
  };

  this.getData = function(movie) {
    window.location.href = "#movie_list";
    document.body.style.overflow = "scroll";
    var http = new XMLHttpRequest();

    http.open(method, url);

    http.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    http.setRequestHeader("Access-Control-Allow-Origin", "*");

    movie = movie.toString();
    var url = "https://itunes.apple.com/search?term=" + movie + "&entity=song";
    var method = "GET";
    var container = document.querySelector('#movie_list_container');
    container.innerHTML = '';

    http.open(method, url);
    http.onreadystatechange = function() {
      if (http.readyState = 4 && http.status == 200) {
        console.log("SUCCESS - connected to itunes API");

        showMovie(JSON.parse(http.responseText));
      } else if (http.readyState == XMLHttpRequest.DONE && http.status != 200) {
        console.log("ERROR - connecting to Itunes API")
      }
    }
    http.send();
  };




  this.showMovie = function(obj) {

    console.log(obj);
    var container = document.querySelector("#movie_list_container");
    var template = '';
    document.querySelector('#not_match').style.display = "none";
    if (obj.results.length > 0) {
      for (var i = 0; i < obj.results.length; i++) {

        template += '<li class = "col-sm-3 movie_item">';
        // create list
        template += '<a href=' + obj.results[i].previewUrl + '><div class = "movie_thmb" style = "background: url(' + obj.results[i].artworkUrl100 + ') "></div></a>';
        // get img/ url
        template += '<div class="movie" >' + obj.results[i].trackName + '</div>';
        // get name
        template += '<div class="movie_info">' + obj.results[i].artistName + '</div>';
        // get director


      }
      container.innerHTML = '';
      container.insertAdjacentHTML('afterbegin', template);
    } else {
      document.querySelector('#not_match').style.display = "block";
    }

  };

  this.init();
})();
