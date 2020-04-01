
var java = 0;
var ruby = 0;
var python = 0;
var csharp = 0;

$(document).ready(function() {
  $(".question1").show();
  $(".q1next").click(function(){
    $(".question1").hide();
    $(".question2").show();

  });

  $(".q2next").click(function(){
    $(".question2").hide();
    $(".question3").show();
  });


  $(".q3next").click(function(){
    $(".question3").hide();
    $(".question4").show();
  });

  $(".q4next").click(function(){
    $(".question3").hide();
    $(".results").show();
    $(".submitform").show();
  });

  $("form#infoinput").submit(function(event) {
    event.preventDefault();
    $("#infoinput").hide();
    var questionone = $("select#easyornot").val();
    var questiontwo = $("select#frontorback").val();
    var questionthree = $("select#mobile").val();
    var questionfour = $("select#science").val();

    if (questionone === 'Yes.') {
      ruby++;
    }

    else if (questionone === 'No.') {
      java++
    }

    console.log(questionone);

    if (questiontwo === 'Front End.') {
      java++;
      ruby++;
      python++;
      csharp++;
    }

    else if (questiontwo === 'Back End.') {
      ruby++;
      python++;
      csharp++;
    }

    if (questionthree === 'Yes.') {
      java++;
      python++;
    }

    else if (questionthree === 'No.') {
      ruby++;
      csharp++;
    }

    if (questionfour === 'Yes.') {
      python++;
      csharp++;
    }

    else if (questionfour === 'No.') {
      java++;
      ruby++;
    }
    console.log(java, ruby, python, csharp);

    $('#resultdata').show();

    $('.output').show();

    if (ruby > java && ruby > python && ruby > csharp) {
      $('.ruby').show();
    }

    if (java > ruby && java > python && java > csharp) {
      $('.java').show();
    }

    if (python > ruby && python > java && python > csharp); {
      $('.python').show();
    }

    if (csharp > ruby && csharp > java && csharp > python) {
      $('.csharp').show();
    }


  });
});
