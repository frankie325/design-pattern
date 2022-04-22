// http://c.biancheng.net/view/8385.html

class Fruit {
    public name;
    constructor(name: string) {
        this.name = name;
    }
}

class Apple extends Fruit {
    public flavour: string;
    constructor(name: string, flavour: string) {
        super(name);
        this.flavour = flavour;
    }
}

class Orange extends Fruit {
    public flavour: string;
    constructor(name: string, flavour: string) {
        super(name);
        this.flavour = flavour;
    }
}

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

class Factory {
    static create(type: string) {
        switch (type) {
            case "apple":
                return new Apple("apple", "甜");
            case "orange":
                return new Orange("orange", "甜");
            default:
                throw new Error("你要的东西没有");
        }
    }
}

let apple = Factory.create("apple");
let orange = Factory.create("orange");

// 示例
// 比如Vue的渲染函数

class VNode {
    private tag: string;
    private data: Object;
    private children: any;

    constructor(tag: string, data: Object, children: any) {
        this.tag = tag;
        this.data = data;
        this.children = children;
    }
}

function createElement(tag: string, data: Object, children: any) {
    return new VNode(tag, data, children);
}

export default void 0;
