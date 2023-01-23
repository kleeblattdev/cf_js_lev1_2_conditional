// Variables
let qualityOutput = document.getElementById("qualityOutput");

function weatherQuality() {
    const input = quality.value;
    console.log(input);

    let output ="";

    if (input <= 2 ){
        output = "schlecht"
    } else if ( input >2 && input <= 5){
        output = "okay"
    } else if ( input >5 && input <= 7){
    output = "gut"
    } else {
    output = "super"
    }

    qualityOutput.innerHTML = output;
}