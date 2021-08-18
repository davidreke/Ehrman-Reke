let circularShift = (title) => {
    let badwords = "the this with a and".split(' ');
    let circularShifts = [];
    let titleArray = title.split(' ');

    if (badwords.indexOf(titleArray[0]) === -1) {
        circularShifts.push(titleArray.join(' '));
    }

    for (let i = 0; i < titleArray.length - 1; i++) {
        let firstWord = titleArray.pop();
        titleArray.unshift(firstWord);

        if (badwords.indexOf(titleArray[0]) === -1) {
            circularShifts.push(titleArray.join(' '));
        }
    }

    circularShifts.sort();
    console.log(circularShifts);

    return circularShifts;
}

module.exports = circularShift
