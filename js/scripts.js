$(document).ready(function() {
  $("form#track-form").submit(function(event) {
    //CODE FOR COLLECTING DATA

    //hide link lists if prev selected
    $("#javaList").hide();
    $("#rubyList").hide();
    $("#cssList").hide();

    var name = $("input#name").val();
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
    } else if (answer5 === "5b") {
      ruby += 1;
    } else if (answer5 === "5c") {
      css += 1;
    }

/*
    alert("css is " + css + " ruby is " + ruby + " and java is " + java + " and your NAME is " + name);
*/
    //CODE FOR DETERMINING RESULTS
    if (java > ruby && java > css) {
      finalResult = "Java/Andoid";
      $("#javaList").show();
    } else if (ruby > java && ruby > css){
      finalResult = "Ruby/Rails";
      $("#rubyList").show();
    } else if (css > java && css > ruby) {
      finalResult = "CSS/Design";
      $("#cssList").show();
    } else if (java === ruby) {
      finalResult = "Java/Android AND Ruby/Rails";
      $("#javaList").show();
      $("#rubyList").show();
    } else if (java === css) {
      finalResult = "Java/Android AND CSS/Design";
      $("#javaList").show();
      $("#cssList").show();
    } else if (ruby === css) {
      finalResult = "Ruby/Rails AND CSS/Design";
      $("#rubyList").show();
      $("#cssList").show();
    } else if (ruby === css && java === css) {
      finalResult = "ALL 3 LANGUAGES";
      $("#javaList").show();
      $("#rubyList").show();
      $("#cssList").show();
    }

    $("#inputName").text(name);
    $("#results").text(finalResult);
    $(".results").show();

    event.preventDefault();

  });
});
