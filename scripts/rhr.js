function arraySum(array) {
    var total = 0;
    array.forEach(value => total += value);
    return total;
};

function arrayMinMax(array) {
    let min = array[0];
    let max = array[0];
    array.forEach(value => {
        if (value > max) {
            max = value;
        };
        if (value < min) {
            min = value;
        };
    });
    return [min, max];
}

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const rhrData = [44,44,43,43,48,47,47,51,45,54,53,48,47,49,46,46,49,52,47,44,44,45,43,42,41,41,42,39,43,43];
let firstDay = 3;

rhrData.sum = arraySum(rhrData);
rhrData.average = Math.round(rhrData.sum / rhrData.length);
minMax = arrayMinMax(rhrData);
rhrData.min = minMax[0];
rhrData.max = minMax[1]
const blueDif = rhrData.average - rhrData.min;
const redDif = rhrData.max - rhrData.average;
rhrData.maxDif = (blueDif > redDif) ? blueDif : redDif;


weekDays.forEach(day => document.write('<h3>' + day + '</h3>'));
while(--firstDay){
    document.write('<p></p>')
}

function convertToColor(value, avgVal, maxDif) {
    dif = value - avgVal;
    console.log(maxDif)
    if (dif >= 0) {
        return `rgba(255,0,0,${dif/maxDif})`
    } else {
        return `rgba(0,0,255,${-dif/maxDif})`
    }
};

rhrData.forEach(item => {
    color = convertToColor(item, rhrData.average, rhrData.maxDif);
    document.write(
        `<div class="cell" style="background-color: ${color}">
            <p>${item}</p>
        </div>`);
});

