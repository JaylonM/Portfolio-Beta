$("#soafbtn").on("click", function () {
    let k = Number($("#soafInputK").val());

    let mysoafArray = [];
    mysoafArray.push(Number($("#soafInput1").val()));
    mysoafArray.push(Number($("#soafInput2").val()));
    mysoafArray.push(Number($("#soafInput3").val()));
    mysoafArray.push(Number($("#soafInput4").val()));
    mysoafArray.push(Number($("#soafInput5").val()));


    let target = 0
    let found = false;

    //loop over each item in the array 1 at a time
    for (var loop = 0; loop <= mysoafArray.length; loop++) {
        //Determine what number you need to solve for the given K...
        //find k - mysoafArray[index]
        target = k - mysoafArray[loop];


        if (mysoafArray.indexOf(target, loop + 1) > 0) {
            found = true;
            break;
        }
    }
    if (found)
        $("#soafOutput").html(`A K value of ${k} was found in the array`);
    else
        $("#soafOutput").html(`A K value of ${k} was NOT found in the array`);
})