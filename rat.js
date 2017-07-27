var Rat = function(){


  Rat.prototype.canTouchFood = function(food) {
    food.poisoned = true;
  };

}

module.exports = Rat;