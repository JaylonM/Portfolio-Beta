$("#TacoCatbtn").on("click", function () {
    //Retrieve Data
    let TacoWord = String($("#TacoCatInput").val()).toLowerCase().replace(/\s|\'|\"/g, '');


    //Reverse String
    var ReverseWord = "";
    for (var loop = TacoWord.length - 1; loop >= 0; loop--) {
        ReverseWord += TacoWord[loop];
    }

    //Output
    $("#TacoCatOutput").text(`The reverse of ${TacoWord} is ${ReverseWord}`);
    if (TacoWord === ReverseWord)
        $("#TacoCatOutput").append(`<br> Therefore, ${TacoWord} is a palindrome. Perfect symmetry!`);
});

$("#TacoCatClrBtn").on("click", function () {
    $("#TacoCatInput").val("");
    $("#TacoCatOutput").html("");
})

$("#TacoCatCodebtn").on("click", function () {
    $("#TacoCatCodeOutput").toggle();
    if ($(this).text() == "Show Code") {
        $(this).text("Hide Code");
    } else (
        $(this).text("Show Code")
    );
})