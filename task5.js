//· Брой пакети химикали - цяло число в интервала [0...100]

//· Брой пакети маркери - цяло число в интервала [0...100]

//· Литри препарат за почистване на дъска - цяло число в интервала [0…50]

//· Процент намаление - цяло число в интервала [0...100]

//• Пакет химикали - 5.80 лв.

//• Пакет маркери - 7.20 лв.

//• Препарат - 1.20 лв (за литър)

function task5(input){
    let pen = Number(input[0]) * 5.80;
    let markers = Number(input[1]) * 7.20;
    let desk = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;
    let sum = pen + markers + desk;
    let finalPrice = sum - (sum * discount);
    console.log(finalPrice)
}
task5(["2","3","4","25"])