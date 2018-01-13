$(document).ready(function() {

var getAnswer = function (q1, q2, q3, q4, q5) {
  var cSharp = java = php = ruby = css = 0;
  // Incorrect weighting needs adjustment
  // cSharp = (5 * q1) + (4 * q2) + (3 * q3) + (4 * q4) + (5 * q5);
  // java = (4 * q1) + (2 * q2) + (2 * q3) + (2 * q4) + (4 * q5);
  // php = (3 * q1) + (5 * q2) + (4 * q3) + (3 * q4) + (2 * q5);
  // ruby = (2 * q1) + (4 * q2) + (3 * q3) + (4 * q4) + (1 * q5);
  // css = (1 * q1) + (1 * q2) + (5 * q3) + (5 * q4) + (5 * q5);

  // random weighting results
  cSharp = Math.floor(Math.random() * Math.floor(5))+1;
  java = Math.floor(Math.random() * Math.floor(5))+1;
  php = Math.floor(Math.random() * Math.floor(5))+1;
  ruby = Math.floor(Math.random() * Math.floor(5))+1;
  css = Math.floor(Math.random() * Math.floor(5))+1;

  console.log (cSharp, java, php, ruby, css);

  if ( (cSharp >= java) && (cSharp >= php) && (cSharp >= ruby) && (cSharp >= css) ) {
    answer = "csharp-results";
  } else if ( (java >= cSharp) && (java >= php) && (java >= ruby) && (java >= css) ) {
    answer = "java-results";
  } else if ( (php >= java) && (php >= cSharp) && (php >= ruby) && (php >= css) ) {
    answer = "php-results";
  } else if ( (ruby >= java) && (ruby >= cSharp) && (ruby >= php) && (ruby >= css) ) {
    answer = "ruby-results";
  } else if ( (css >= java) && (css >= cSharp) && (css >= ruby) && (css >= ruby) ) {
    answer = "css-results";
  } else {
    answer = "ruby-results"; // why not default to Ruby?
  }
  console.log("Answer = " + answer);
  return answer;

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

    var myChoice = "#" + getAnswer(question1, question2, question3, question4, question5);
    console.log("My choice: " + myChoice);

    $(myChoice).show();
    console.log("myChoice after show = " + myChoice);

    $(myChoice+"-close").on("click", function(e){
      e.preventDefault();
      $(myChoice).hide();
      console.log("myChoice after hide = " + myChoice);
    });

    $("#survey").trigger("reset"); // reset form to defaults;

  });

});
