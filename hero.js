var _ = require("lodash");

var Hero = function(name, fav_food){

  this.name = name;
  this.fav_food = fav_food;
  this.health = 100;
  this.tasks = [];

  Hero.prototype.canTalk = function() {
    return "I can talk";
  };

  Hero.prototype.addFood = function(food) {
    if (food.poisoned === true){
      return this.health -= food.replenishment_value;
    }
    if (food.name === this.fav_food){
      return this.health += (food.replenishment_value * 1.5); 
    } else {
      return this.health += food.replenishment_value;
    }
  };

  Hero.prototype.addTask = function(task) {
    this.tasks.push(task);
  };

  Hero.prototype.sortByDiff = function() {
    return _.sortBy(this.tasks, function(task){
      return task.diff_level;
    })
  };

  Hero.prototype.sortByUrgency = function() {
    return _.sortBy(this.tasks, function(task){
      return task.urg_level;
    })
  };

  Hero.prototype.sortByReward = function() {
    return _.sortBy(this.tasks, function(task){
      return task.reward;
    })
  };

  Hero.prototype.incompleteTasks = function() {
    return _.filter(this.tasks, function(task){
      return task.complete === false;
    })
  };

  Hero.prototype.completeTasks = function() {
    return _.filter(this.tasks, function(task){
      return task.complete === true;
    })
  };

}

module.exports = Hero;