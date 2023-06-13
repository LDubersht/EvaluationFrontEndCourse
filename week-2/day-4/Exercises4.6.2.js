const price4Beans = 2;
const coffeeShop = {
  beans: 40,
  money: 12,
  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 3},
    doubleShot: {beanRequirement: 15, price: 12},
    frenchPress: {beanRequirement: 12, price: 11}
  },
  buyBeans: function(numBeans){
    this.beans += numBeans;
    this.money -= numBeans*price4Beans;
  },
  makeDrink: function (drinkType) {
    //out off drinkRequirements
    if (this.drinkRequirements[drinkType]===undefined) {
      console.log("Sorry, we don't make ");
      return false
    } 
    //out off beans
    else if (this.beans<this.drinkRequirements[drinkType].beanRequirement) {
      console.log("Sorry, we're all out of beans for: %s!",drinkType);
      return false
    } 
     //make coffe
    else {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement
      console.log("Get you cofee: %s",drinkType);
      return true
    } 
  },
  buyDrink: function(drinkType) {
    //only if make cofee
    if (this.makeDrink(drinkType)){
    this.money += this.drinkRequirements[drinkType].price
    console.log("Money in coffeeShop: %i",this.money);
  }
  }
}

coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(10);
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
