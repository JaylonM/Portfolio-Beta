$("#Sunsetbtn").on("click", function () {
    var BuildingHeightArray = [
        Number($("#BuildingHeight1").val()),
        Number($("#BuildingHeight2").val()),
        Number($("#BuildingHeight3").val()),
        Number($("#BuildingHeight4").val()),
        Number($("#BuildingHeight5").val()),
        Number($("#BuildingHeight6").val())
    ]

    var HighestBuildingScanned = BuildingHeightArray[0];
    var SeenSun = [HighestBuildingScanned];


    for (let loop = 1; loop < BuildingHeightArray.length; loop++) {
        if (BuildingHeightArray[loop] > HighestBuildingScanned) {
            HighestBuildingScanned = BuildingHeightArray[loop];
            SeenSun.push(HighestBuildingScanned);
        }
    }

    $("#SunsetOutput").html(`The buildings that shall witness the sun are as follows: ${SeenSun}.`)

})