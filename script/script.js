function agetodays() {
    const age = document.getElementById('age').value;
    const days = (age * 365);
    document.getElementById('answer').innerHTML = days ;
}