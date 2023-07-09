let firstName = 'somethingverylong';
let wordToReverse = 'ooooooooooooooooooocooooooooooooooo';


function ifName (name) {
    if (name.length > 10) {
        return "Name is too long"
    } else {
        return name
    }
}

function FirstReverse(str) {

    console.log(str);
    arr = str.split('');
    console.log(arr)
    let revArr = arr.reverse();
    str = revArr.join('');

    return str;

}



console.log(FirstReverse(wordToReverse));

console.log(ifName(firstName));