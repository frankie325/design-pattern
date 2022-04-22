"use strict";
/*
示例：设计农场类

农场中除了像畜牧场一样可以养动物，还可以培养植物，如养马、养牛、种菜、种水果等，所以本实例比前面介绍的畜牧场类复杂，必须用抽象工厂模式来实现
*/
Object.defineProperty(exports, "__esModule", { value: true });
// 具体产品: 马类
var Horse = /** @class */ (function () {
    function Horse() {
    }
    Horse.prototype.show = function () {
        console.log("i am horse");
    };
    return Horse;
}());
// 具体产品: 牛类
var Cattle = /** @class */ (function () {
    function Cattle() {
    }
    Cattle.prototype.show = function () {
        console.log("i am cattle");
    };
    return Cattle;
}());
// 具体产品: 水果类
var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    Fruit.prototype.show = function () {
        console.log("i am apple");
    };
    return Fruit;
}());
// 具体产品: 水果类
var Vegetables = /** @class */ (function () {
    function Vegetables() {
    }
    Vegetables.prototype.show = function () {
        console.log("i am vegetables");
    };
    return Vegetables;
}());
// 每个工厂可以用来创建多个产品
// 具体工厂：A农场
var AFarm = /** @class */ (function () {
    function AFarm() {
    }
    AFarm.prototype.createAnimal = function () {
        return new Horse();
    };
    AFarm.prototype.createPlant = function () {
        return new Fruit();
    };
    return AFarm;
}());
// 具体工厂：B农场
var BFarm = /** @class */ (function () {
    function BFarm() {
    }
    BFarm.prototype.createAnimal = function () {
        return new Cattle();
    };
    BFarm.prototype.createPlant = function () {
        return new Vegetables();
    };
    return BFarm;
}());
var a = new AFarm();
a.createAnimal().show();
a.createPlant().show();
var b = new BFarm();
b.createAnimal().show();
b.createPlant().show();
exports.default = void 0;
