
$(document).ready(function () {


    //  This will be the randomNum generated by computer
    var randomNumber = Math.floor(Math.random() * 102) + 19;
    console.log(randomNumber);
    $("#randomNumber").html("Random Number: " + randomNumber);


    //      Button one
    var buttonOneValue = Math.floor(Math.random() * 12) + 1;
    console.log("button 1: " + buttonOneValue);
    $("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + buttonOneValue + ">");

    //      Button two
    var buttonTwoValue = Math.floor(Math.random() * 12) + 1;
    console.log("Button 2: " + buttonTwoValue);
    $("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + buttonTwoValue + ">");

    //Button three
    var buttonThreeValue = Math.floor(Math.random() * 12) + 1;
    console.log("Button 3: " + buttonThreeValue);
    $("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + buttonThreeValue + ">");

    //Button four
    var buttonFourValue = Math.floor(Math.random() * 12) + 1;
    console.log("Button 4: " + buttonFourValue);
    $("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + buttonFourValue + ">");

    //wins
    var wins = 0;
    $("#wins").html("wins: " + wins);
    console.log("wins: " + wins);

    //losses
    var losses = 0;
    $("#losses").html("Losses: " + losses);
    console.log("losses: " + losses);

    //score
    var score = 0;
    $("#totalScore").html("Current Score: " + score);
    console.log("score: " + score);

    //reset function with everything back inside of it
    function reset() {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        console.log("randomNum: " + randomNumber);
        $(".randomNumber").html(randomNumber);

        score = 0;
        $(".scoreDisplay").html(score);

        //Button one
        buttonOneValue = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 1: " + buttonOneValue);
        $("#img1").html("<img src= assets/images/image1.png" + " value=" + buttonOneValue + ">");

        //Button Two
        buttonTwoValue = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 2: " + buttonTwoValue);
        $("#img2").html("<img src= assets/images/image2.png" + " value=" + buttonTwoValue + ">");

        //Button three
        buttonThreeValue = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 3: " + buttonThreeValue);
        $("#img3").html("<img src= assets/images/image3.png" + " value=" + buttonThreeValue + ">");

        //Button four
        buttonFourValue = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 4: " + buttonFourValue);
        $("#img4").html("<img src= assets/images/image4.png" + " value=" + buttonFourValue + ">");

        $("img").on("click", function () {
            //not understanding how this works
            var newScore = score += parseInt($(this).attr("value"));
            console.log("New Score: " + newScore);
            $("#totalScore").html(newScore);

            if (newScore === randomNumber) {
                wins++;
                $("#wins").html("Wins: " + wins);
                console.log("Wins: " + wins);
                reset();
                $("#randomNumber").html("Random Number: " + randomNumber)
                document.getElementById("audio").play();
            }

            else if (newScore > randomNumber) {
                losses++;
                $("#losses").html("Losses: " + losses);
                console.log("Losses: " + losses);
                reset();
                $("#randomNumber").html("Random Number: " + randomNumber)
                document.getElementById("audio2").play();
            }

        });

    }

    //onClick function 
    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $("#totalScore").html("Total Score: " + newScore);

        if (newScore === randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            reset();
            $("#randomNumber").html("Random Number: " + randomNumber)
            document.getElementById("audio").play();
        }

        else if (newScore > randomNumber) {
            losses++;
            $("#losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
            reset();
            $("#randomNumber").html("Random Number: " + randomNumber)
            document.getElementById("audio2").play();
        }

    });
});

