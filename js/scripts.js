
var javascript = 0;
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
    } else if (questionone === 'No.') {
      javascript++
    }

    if (questiontwo === 'Front End.') {
      javascript++;
      ruby++;
      python++;
      csharp++;
    } else if (questiontwo === 'Back End.') {
      ruby++;
      python++;
      csharp++;
    }

    if (questionthree === 'Yes.') {
      javascript++;
      python++;
    } else if (questionthree === 'No.') {
      ruby++;
      csharp++;
    }

    if (questionfour === 'Yes.') {
      python++;
      csharp++;
    } else if (questionfour === 'No.') {
      javascript++;
      ruby++;
    }

    $('#resultdata').show();

    $('.output').show();

    if (ruby > javascript && ruby > python && ruby > csharp) {
      $('.ruby').show();
    }

    if (javascript > ruby && javascript > python && java > csharp) {
      $('.javascript').show();
    }

    if (python > ruby && python > javascript && python > csharp) {
      $('.python').show();
    }

    if (csharp > ruby && csharp > javascript && csharp > python) {
      $('.csharp').show();
    }


  });
});
