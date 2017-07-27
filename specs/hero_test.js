var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');
var Rat = require('../rat.js');

describe("Hero", function(){
  var hero;
  var food1 = new Food("Chicken", 40, false);
  var food2 = new Food("Beef", 50, false);
  var food3 = new Food("Salad", 5, false);
  var food4 = new Food("Rowie", 100, false);
  var task1 = new Task(2, 2, 40, false);
  var task2 = new Task(4, 5, 100, true);
  var task3 = new Task(1, 3, 20, false);
  var rat;

  beforeEach(function(){
    hero = new Hero("Conan", "Rowie");
    rat = new Rat();
  })

  it('should be able to eat food and increase health', function(){
    hero.addFood(food1);
    assert.strictEqual(140, hero.health);
  });

  it('If the food is their favourite food, their health should go up by 1.5 * value', function(){
    hero.addFood(food4);
    assert.strictEqual(250, hero.health);
  });

  it('A hero should be able to sort their tasks by difficulty', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    var expected = [task3, task1, task2]
    assert.deepEqual(expected, hero.sortByDiff());
  });

  it('A hero should be able to sort their tasks by urgency level', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    var expected = [task1, task3, task2]
    assert.deepEqual(expected, hero.sortByUrgency());
  });

  it('A hero should be able to sort their tasks by reward', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    var expected = [task3, task1, task2]
    assert.deepEqual(expected, hero.sortByReward());
  });

  it('A hero should be able to view tasks that are marked as incomplete', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    var expected = [task1, task3]
    assert.deepEqual(expected, hero.incompleteTasks());
  });

  it('A hero should be able to view tasks that are marked as complete', function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    var expected = [task2]
    assert.deepEqual(expected, hero.completeTasks());
  });

  it('food can be poisoned', function(){
    rat.canTouchFood(food1);
    assert.strictEqual(food1.poisoned, true);
  });

  it('Heroes that eat poisonous food should lose health', function(){
    rat.canTouchFood(food1);
    hero.addFood(food1);
    assert.strictEqual(60, hero.health);
  })


})



