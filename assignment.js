// feet to mile
let mile;

function feetToMile(feet) {
    mile = feet / 5280;
    return mile;
}
const result = feetToMile(6500);
console.log(result);




//wood calculator
// 1 chair = 1 cft wood
// 1 table = 3 cft wood
// 1 bed = 5 cft wood
//--------------------
// 2 chair = chairNum(2) * 1 cft wood
// 2 table = tableNum(2) * 3 cft wood
// 2 bed = bedNum(2) * 5 cft wood

function woodCalculator(chair, table, bed) {
    const totalChair = chair * 1;
    const totalTable = table * 3;
    const totalBed = bed * 5;

    const totalWood = totalChair + totalTable + totalBed;
    return totalWood;
}

const calcWood = woodCalculator(2, 3, 2);
console.log(calcWood);





//brick calculator

// 1 feet height of a floor = 1000 brick
// 1 floor = 15 ft height
// floor 1-10 = 15 ft height per floor
// floor 11-20 = 12 ft height per floor
// 21 - any floor = 10 ft height

function brickCalculator(floorNum) {
    const perFeetFloorBrick = 1000;
    const height1 = 15; // 1 <= floorNum <= 10
    const height2 = 12; // 11 <= floorNum <= 20
    const height3 = 10; // 21 <= floorNum <= any
    let totalBrick1, totalBrick2, totalBrick3;
    let height, totalBrick;

    if (floorNum <= 0) {
        return 'Invalid'
    }
    if (floorNum <= 10) {
        totalBrick1 = floorNum * height1 * perFeetFloorBrick;
        return totalBrick1;
    } else if (floorNum >= 11 && floorNum <= 20) {

        totalBrick1 = 10 * height1 * perFeetFloorBrick;

        totalBrick2 = (floorNum - 10) * height2 * perFeetFloorBrick;

        return totalBrick1 + totalBrick2;

    } else {
        if (floorNum >= 21) {

            totalBrick1 = 10 * height1 * perFeetFloorBrick;

            totalBrick2 = 10 * height2 * perFeetFloorBrick;

            totalBrick3 = (floorNum - 20) * height3 * perFeetFloorBrick;

            let total = totalBrick1 + totalBrick2 + totalBrick3;
            return total;

        }

    }
}

let calcBrickNum = brickCalculator(20);
console.log(calcBrickNum);






//tiny frined

function tinyFriend(friendsArr) {
    let tinyFrnd = friendsArr[0];
    for (let i = 0; i < friendsArr.length; i++) {
        let element = friendsArr[i];
        if (element.length < tinyFrnd.length) {
            tinyFrnd = element;
        }
    }
    return tinyFrnd;
}
const friendsName = ['Jisan', 'Shawon', 'Mursalin', 'Asad'];

console.log(tinyFriend(friendsName));
