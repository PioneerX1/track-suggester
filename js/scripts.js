$(document).ready(function() {
  $("form#track-form").submit(function(event) {
    //CODE FOR COLLECTING DATA
    var java = 0;
    var ruby = 0;
    var css = 0;
    var finalResult;
    var answer;

    var answer1 = $("select#q1").val();

    if (answer1 === "1a") {
      alert("1st option selected");
    } else if (answer1 === "1b") {
      alert("2nd option selected");
    } else if (answer1 === "1c") {
      alert("3rd option selected");
    }


    //CODE FOR DETERMINING RESULTS

    $("#results").text("Something Made Up!");
    $(".results").show();

    event.preventDefault();

  });
});
