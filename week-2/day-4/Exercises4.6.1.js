const price4Beans = 2;
const coffeeShop = {
  beans: 40,
  money: 12,
  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },
  buyBeans : function(numBeans){
    this.beans += numBeans;
    this.money -= numBeans*price4Beans;
  },
  makeDrink: function (drinkType) {
    //out off drinkRequirements
    if (this.drinkRequirements[drinkType]===undefined) {
      console.log("Sorry, we don't make ");
    } 
    //out off beans
    else if (this.beans<this.drinkRequirements[drinkType]) {
      console.log("Sorry, we're all out of beans!");
    } 
     //do coffe
    else {
      this.beans -= this.drinkRequirements[drinkType]
      console.log("Get you cofee: %s",drinkType);
    } 
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"