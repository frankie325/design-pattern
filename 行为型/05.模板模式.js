class Person {
    // 父类定义好算法的骨架
    dinner() {
        this.buy();
        this.cook();
        this.eat();
    }

    buy() {
        throw new Error("必须由子类实现");
    }
    cook() {
        throw new Error("必须由子类实现");
    }
    eat() {
        throw new Error("必须由子类实现");
    }
}

// 由子类去实现具体算法
class Jiang extends Person {
    buy() {
        console.log("买菜");
    }
    cook() {
        console.log("做饭");
    }
    eat() {
        console.log("吃饭");
    }
}

let j = new Jiang();
j.dinner();
