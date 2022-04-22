"use strict";
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
// 父级工厂一般是接口，将简单工厂进一步抽象化，规定子类必须实现的方法
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.create = function () { };
    return Factory;
}());
// 由工厂的名称就可以得到所要的产品，无须知道产品的具体创建过程
var AppleFactory = /** @class */ (function (_super) {
    __extends(AppleFactory, _super);
    function AppleFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleFactory.create = function () {
        return new Apple("apple", "甜");
    };
    return AppleFactory;
}(Factory));
var OrangeFactory = /** @class */ (function (_super) {
    __extends(OrangeFactory, _super);
    function OrangeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrangeFactory.create = function () {
        return new Orange("orange", "酸");
    };
    return OrangeFactory;
}(Factory));
// 只需要调用工厂方法，即可完成产品的创建
var apple = AppleFactory.create();
var orange = OrangeFactory.create();
exports.default = void 0;
