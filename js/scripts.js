var florida = 0;
var spain = 0;
var norway = 0;
var japan = 0;

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
    var questionone = $("select#whatsortofplace").val();
    var questiontwo = $("select#whatwouldyoudo").val();
    var questionthree = $("select#flyinternational").val();
    var questionfour = $("select#summerorwinter").val();

    if (questionone === 'tropical') {
      florida++;
      spain++;
    }

    else if (questionone === 'temperate') {
      norway++;
      japan++;
    }

    console.log(questionone);

    if (questiontwo === 'I would like to explore.') {
      norway++;
      spain++;
      japan++;
    }

    else if (questiontwo === 'I would like to relax.') {
      florida++;
      norway++;
    }

    if (questionthree === 'Yes.') {
      spain++;
      norway++;
      japan++;
    }

    else if (questionthree === 'No.') {
      florida++;
    }

    if (questionfour === 'Summer.') {
      norway++;
      japan++;

    }

    else if (questionfour === 'Winter.') {
      florida++;
      spain++;
    }

    $('#resultdata').show();


    console.log(norway);



    $('.output').show();

    $(".florida").append(florida);
    $(".spain").append(spain);
    $(".norway").append(norway);
    $(".japan").append(japan);


    $(".submitform").hide();
  });
});
