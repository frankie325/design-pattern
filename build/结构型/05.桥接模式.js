"use strict";
// 画图：可以画正方形、长方形、圆形，可以对形状上色，有三种颜色白色、灰色、黑色
// 可以自由组合：白色长方形，灰色正方形，黑色圆形，....
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 方案一：为每个形状提供各种颜色的版本
var WhiteCircle = /** @class */ (function () {
    function WhiteCircle() {
    }
    WhiteCircle.prototype.draw = function () {
        console.log("白色的圆");
    };
    return WhiteCircle;
}());
var grayCircle = /** @class */ (function () {
    function grayCircle() {
    }
    grayCircle.prototype.draw = function () {
        console.log("灰色的圆");
    };
    return grayCircle;
}());
var WhiteSquare = /** @class */ (function () {
    function WhiteSquare() {
    }
    WhiteSquare.prototype.draw = function () {
        console.log("白色的正方形");
    };
    return WhiteSquare;
}());
var graySquare = /** @class */ (function () {
    function graySquare() {
    }
    graySquare.prototype.draw = function () {
        console.log("灰色的正方形");
    };
    return graySquare;
}());
// 方案二： 根据实际需要对颜色和形状进行组合
//抽象类，提供形状的方法
var Shape = /** @class */ (function () {
    // 这里相当于一个连接作用，将颜色与形状进行连接起来，形状和颜色一一组合
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
// 形状的具体实现
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color) {
        return _super.call(this, color) || this;
    }
    Circle.prototype.draw = function () {
        this.color.paint("圆形");
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color) {
        return _super.call(this, color) || this;
    }
    Square.prototype.draw = function () {
        this.color.paint("正方形");
    };
    return Square;
}(Shape));
// 颜色的具体实现
var White = /** @class */ (function () {
    function White() {
    }
    White.prototype.paint = function (shape) {
        console.log("白色的" + shape);
    };
    return White;
}());
var Gray = /** @class */ (function () {
    function Gray() {
    }
    Gray.prototype.paint = function (shape) {
        console.log("灰色的" + shape);
    };
    return Gray;
}());
var c = new Circle(new White());
c.draw();
var s = new Square(new White());
s.draw();
