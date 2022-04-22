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

// 父级工厂一般是接口，将简单工厂进一步抽象化，规定子类必须实现的方法
class Factory {
    static create() {}
}

// 由工厂的名称就可以得到所要的产品，无须知道产品的具体创建过程
class AppleFactory extends Factory {
    static create() {
        return new Apple("apple", "甜");
    }
}

class OrangeFactory extends Factory {
    static create() {
        return new Orange("orange", "酸");
    }
}

// 只需要调用工厂方法，即可完成产品的创建
let apple = AppleFactory.create();
let orange = OrangeFactory.create();

export default void 0;