var ratings = document.getElementsByClassName("movieRating");
//place holder string for star symbols
var text = "";

var count = document.getElementById("countTest");



starTransition();



function starTransition() {
    for (var x = 0; x < ratings.length; x++) {
        // for loop takes each item in ratings nodelist and replaces it with the corresponding number of stars.
        var starRating = ratings[x].innerHTML;
        var ratingString = starRating.split(" ");
        var ratingValue = ratingString[0];

        for (var y = 0; y < ratingValue; y++) {
            text += "\u2605";
        }

        if(ratingValue < 5){
            //if there are less than five stars it places "hollow" stars to make five.
            //This allows a visual representation for a zero star rating.
            for(var z = ratingValue ; z < 5 ; z++){
                text += "\u2606";
            }
        }
        ratings[x].innerHTML = text;
        text = "";

    }
}
