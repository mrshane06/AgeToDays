function agetodays() {
    const age = document.getElementById('age').value;
    const days = (age * 365); // multiplies age by amount of days in the year
    document.getElementById('answer').innerHTML = days ; // displays the answer in the html
}