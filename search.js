var fetchData = function(limit, queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data) {
        for(var i = 0; i < limit; i++) {
            if(data.response.docs[i].headline.main != null)
            var title = data.response.docs[i].headline.main;
            if(data.response.docs[i].byline.original != null)
            var author = data.response.docs[i].byline.original;
            if(data.response.docs[i].pub_date != null)
            var publish = data.response.docs[i].pub_date;
            if(data.response.docs[i].web_url != null)
            var source = data.response.docs[i].web_url;

            articleHtml =
            "<h3>" + title + "</h3>"+
            "<h5>" + author + "</h5>"+
            "<p>" + publish + "</p>" +
            "<a href="+ source +"'>" + source + "</a>";

            var  articleItem = $("<div>").html(articleHtml);
            $("#articleResults").append(articleItem);

        }
    });
}

$("#searchBtn").on("click", function() {

    // Here we grab the text from the input boxes
    var search = $("#searchTerm").val().trim();
    var limit = $("#recordLimit").val();
    var startYear = $("#startYear").val().trim();
    var endYear =  $("#endYear").val().trim();

    // Our bare bones queryURL
    var apiKey =  "&api-key=5eca8e97a59c428ea2e628d8e052c3eb";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ search + apiKey;

    if(parseInt(startYear)) {
        queryURL += "&begin_date=" + startYear + "0101";

    }
    if(parseInt(endYear)) {
        queryURL += "&end_date=" + endYear + "0101";
    }

    fetchData(limit,queryURL);
    console.log(queryURL);

});

$("#clearResults").on("click", function() {
    $("#articleResults").empty();
});