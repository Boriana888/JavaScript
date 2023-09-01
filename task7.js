
function task7 (input){
    let chikenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number (input[1]) * 12.40;
    let vegyMenu = Number (input[2]) * 8.15;
    let totalMenuPrice = chikenMenu + fishMenu + vegyMenu
    
    let discount = 0.2 * totalMenuPrice;
    
    let orderPrice = totalMenuPrice + discount + 2.50;
    console.log(orderPrice)

}
task7(["2","4","3"])