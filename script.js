// script.js

const mmInput = document.getElementById('mm-input');
const inchDecimalOutput = document.getElementById('inch-decimal-output');
const inchFractionalOutput = document.getElementById('inch-fractional-output');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', convertMmToInch);

function convertMmToInch() {
    const mmValue = parseFloat(mmInput.value);
    const inchDecimalValue = mmValue / 25.4;
    const inchFractionalValue = getFractionalInch(inchDecimalValue);
    inchDecimalOutput.value = inchDecimalValue.toFixed(2);
    inchFractionalOutput.value = inchFractionalValue;
}

function getFractionalInch(decimal) {
    const wholeNumber = Math.floor(decimal);
    const fractional = decimal - wholeNumber;
    const fractionalParts = {
        0.0625: "1/16",
        0.125: "1/8",
        0.1875: "3/16",
        0.25: "1/4",
        0.3125: "5/16",
        0.375: "3/8",
        0.4375: "7/16",
        0.5: "1/2",
        0.5625: "9/16",
        0.625: "5/8",
        0.6875: "11/16",
        0.75: "3/4",
        0.8125: "13/16",
        0.875: "7/8",
        0.9375: "15/16",
    };

    let closestFractional = 0.0625; // Default to the smallest fractional part

    for (const fractionalPart in fractionalParts) {
        if (Math.abs(fractional - fractionalPart) < Math.abs(fractional - closestFractional))
            closestFractional = fractionalPart;
    }

    const selectedFractional = fractionalParts[closestFractional];
    const wholeNumberDisplay = wholeNumber > 0 ? `${wholeNumber} ` : ''; // Exclude 0 from the display
    return `${wholeNumberDisplay}${selectedFractional} inches`;
}