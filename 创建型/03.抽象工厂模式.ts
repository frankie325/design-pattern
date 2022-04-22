/*
示例：设计农场类

农场中除了像畜牧场一样可以养动物，还可以培养植物，如养马、养牛、种菜、种水果等，所以本实例比前面介绍的畜牧场类复杂，必须用抽象工厂模式来实现
*/

// 抽象产品： 动物类
interface Animal {
    show(): void;
}

// 具体产品: 马类
class Horse implements Animal {
    show() {
        console.log("i am horse");
    }
}

// 具体产品: 牛类
class Cattle implements Animal {
    show() {
        console.log("i am cattle");
    }
}
// 抽象产品：植物类
interface Plant {
    show(): void;
}

// 具体产品: 水果类
class Fruit implements Plant {
    show() {
        console.log("i am apple");
    }
}

// 具体产品: 水果类
class Vegetables implements Plant {
    show() {
        console.log("i am vegetables");
    }
}

// 对工厂进行抽象，抽象工厂模式的结构同工厂方法模式的结构相似，不同的是其产品的种类不止一个
// 抽象工厂：农场类
interface Farm {
    createAnimal(): void;
    createPlant(): void;
}

// 每个工厂可以用来创建多个产品
// 具体工厂：A农场
class AFarm implements Farm {
    createAnimal(): Animal {
        return new Horse();
    }
    createPlant(): Plant {
        return new Fruit();
    }
}

// 具体工厂：B农场
class BFarm implements Farm {
    createAnimal(): Animal {
        return new Cattle();
    }
    createPlant(): Plant {
        return new Vegetables();
    }
}

let a = new AFarm();
a.createAnimal().show();
a.createPlant().show();

let b = new BFarm();
b.createAnimal().show();
b.createPlant().show();

export default void 0;