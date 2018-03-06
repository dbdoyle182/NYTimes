var page = 0;

$("#searchBtn").on("click", function(event) {

    // Here we grab the text from the input boxes
    var search = $("#searchTerm").val();
    var limit = $("#recordLimit").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();

    // Here we construct our URL
    var apiKey =  "&api-key=5eca8e97a59c428ea2e628d8e052c3eb";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+
         search +"?page="+ page+ "?begin_date=" +startYear+ "?end_date=" + endYear + apiKey;

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(res) {
    console.log(res);
    var article = $("<li>").text(res.response.docs[0].snippet)
    $("#articleResults").append(article);
    });

});