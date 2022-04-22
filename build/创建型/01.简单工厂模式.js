"use strict";
// http://c.biancheng.net/view/8385.html
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
Object.defineProperty(exports, "__esModule", { value: true });
var Fruit = /** @class */ (function () {
    function Fruit(name) {
        this.name = name;
    }
    return Fruit;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, flavour) {
        var _this = _super.call(this, name) || this;
        _this.flavour = flavour;
        return _this;
    }
    return Apple;
}(Fruit));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(name, flavour) {
        var _this = _super.call(this, name) || this;
        _this.flavour = flavour;
        return _this;
    }
    return Orange;
}(Fruit));
new Apple("apple", "甜");
new Orange("orange", "酸");
// 直接new有什么缺点
// 1.耦合：跟客户端代码直接耦合，一旦对类进行修改，将会导致代码出错
// 2.依赖具体实现
/*
简单工厂模式

不暴露创建对象的具体逻辑，而是将逻辑进行封装，隐藏实现，只需要调用即可

优点：
1. 调用者创建对象时只要知道其名称即可
2. 隐藏产品的具体实现，只关心产品的接口
3. 扩展性高，如果要新增一个产品，扩展一个产品类即可

缺点：
每次新增一个产品时，都需要增加一个具体的产品类
*/
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.create = function (type) {
        switch (type) {
            case "apple":
                return new Apple("apple", "甜");
            case "orange":
                return new Orange("orange", "甜");
            default:
                throw new Error("你要的东西没有");
        }
    };
    return Factory;
}());
var apple = Factory.create("apple");
var orange = Factory.create("orange");
// 示例
// 比如Vue的渲染函数
var VNode = /** @class */ (function () {
    function VNode(tag, data, children) {
        this.tag = tag;
        this.data = data;
        this.children = children;
    }
    return VNode;
}());
function createElement(tag, data, children) {
    return new VNode(tag, data, children);
}
exports.default = void 0;
