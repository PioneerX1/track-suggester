$(document).ready(function() {
  $("form#track-form").submit(function(event) {
    //CODE FOR COLLECTING DATA
    var java = 0;
    var ruby = 0;
    var css = 0;
    var finalResult;

    var answer1 = $("select#q1").val();
    var answer2 = $("select#q2").val();
    var answer3 = $("select#q3").val();
    var answer4 = $("select#q4").val();
    var answer5 = $("select#q5").val();

    if (answer1 === "1a") {
      css += 1;
    } else if (answer1 === "1b") {
      ruby += 1;
    } else if (answer1 === "1c") {
      java += 1;
    }

    if (answer2 === "2a") {
      css += 1;
    } else if (answer2 === "2b") {
      ruby += 1;
      java += 1;
    }

    if (answer3 === "3a") {
      ruby += 1;
    } else if (answer3 === "3b") {
      java += 1;
    }

    if (answer4 === "4a") {
      css += 1;
    } else if (answer4 === "4b") {
      ruby += 1;
      java += 1;
    }

    if (answer5 === "5a") {
      java += 1;
    } else if (answer4 === "5b") {
      ruby += 1;
    } else if (answer4 === "5c") {
      css += 1;
    }

    alert("css is " + css + " ruby is " + ruby + " and java is " + java);


    //CODE FOR DETERMINING RESULTS

    $("#results").text("Something Made Up!");
    $(".results").show();

    event.preventDefault();

  });
});
