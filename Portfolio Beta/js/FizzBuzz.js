$("#FizzBuzzbtn").on("click", function () {

    var num1 = Number($("#FizzBuzzInput1").val());
    var num2 = Number($("#FizzBuzzInput2").val());

    var loop = 1
    var FizzesBuzzed = []
    while (loop <= 100) {
        if ((loop % num1 === 0) && (loop % num2 === 0)) {
            FizzesBuzzed.push("<span class='fizzbuzz'>FIZZBUZZ</span>")
        }
        else if (loop % num1 === 0) {
            FizzesBuzzed.push("<span class= 'fizz'>FIZZ</span>")
        }

        else if (loop % num2 === 0) {
            FizzesBuzzed.push("<span class='buzz'>BUZZ</span>")
        }
        else {
            FizzesBuzzed.push(loop)
        }

        loop++

    }
    $("#FizzBuzzOutput").html(`Fizzes Buzzed for ${num1} and ${num2}: ${FizzesBuzzed.join(', ')}`)
})

$("#FizzBuzzClrbtn").on("click", function () {
    $("#FizzBuzzInput1, #FizzBuzzInput2").val("");
    $("#FizzBuzzOutput").html("");
})


$("#FizzBuzzCodebtn").on("click", function () {
    $("#FizzBuzzCodeOutput").toggle();
    if ($(this).text() == "Show Code") {
        $(this).text("Hide Code");
    } else (
        $(this).text("Show Code")
    );
})

