$(document).ready(function() {

// Variables
var result = "RESULTS";
var flavor ="none";
// var question1 = "";
// var question2 = "";
// var question3 = "";
// var question4 = "";
// var question5 = "";

results = function (q1, q2, q3, q4, q5) {
  return (q1+q2+q3+q4+q5);
}

  $("form#survey").submit(function(e) {
    e.preventDefault();

    console.log("got the results.")

    name = $("#name").val();
    question1 = parseInt( $("input:radio[name=question1]:checked").val() );
    question2 = parseInt( $("input:radio[name=question2]:checked").val() );
    question3 = parseInt( $("input:radio[name=question3]:checked").val() );
    question4 = parseInt( $("input:radio[name=question4]:checked").val() );
    question5 = parseInt( $("input:radio[name=question5]:checked").val() );

    // question2 = $("input:radio[name=question2]:checked").val();
    // question3 = $("input:radio[name=question3]:checked").val();
    // question4 = $("input:radio[name=question4]:checked").val();
    // question5 = $("input:radio[name=question5]:checked").val();
    // console.log("flavor is: " + flavor);
    console.log("name is: " + name);
    console.log("question 1 is: " + question1);
    console.log("No longer a string, question 3 is: " + question3);

    // $(input:radio[name=question5]).attr("checked" , false );
    // x = $("input:radio[name=question5]:checked").val();

    $('#survey').trigger("reset"); // reset form to defaults;

    // UI logic
      $("#results").text(results(question1, question2, question3, question4, question5));
      // $("#results").append(flavor);
      // console.log("now flavor is: " + flavor)

  });



});
