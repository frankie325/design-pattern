// 画图：可以画正方形、长方形、圆形，可以对形状上色，有三种颜色白色、灰色、黑色
// 可以自由组合：白色长方形，灰色正方形，黑色圆形，....

// 方案一：为每个形状提供各种颜色的版本

class WhiteCircle {
    draw() {
        console.log("白色的圆");
    }
}

class grayCircle {
    draw() {
        console.log("灰色的圆");
    }
}

class WhiteSquare {
    draw() {
        console.log("白色的正方形");
    }
}

class graySquare {
    draw() {
        console.log("灰色的正方形");
    }
}

// 方案二： 根据实际需要对颜色和形状进行组合

//抽象类，提供形状的方法
abstract class Shape {
    public color: Color;
    // 这里相当于一个连接作用，将颜色与形状进行连接起来，形状和颜色一一组合
    constructor(color: Color) {
        this.color = color;
    }
    abstract draw(): void;
}

// 形状的具体实现
class Circle extends Shape {
    constructor(color: Color) {
        super(color);
    }
    draw(): void {
        this.color.paint("圆形");
    }
}

class Square extends Shape {
    constructor(color: Color) {
        super(color);
    }
    draw(): void {
        this.color.paint("正方形");
    }
}

interface Color {
    paint(shape: string): void;
}

// 颜色的具体实现
class White implements Color {
    paint(shape: string): void {
        console.log("白色的" + shape);
    }
}

class Gray implements Color {
    paint(shape: string): void {
        console.log("灰色的" + shape);
    }
}

let c = new Circle(new White());
c.draw();
let s = new Square(new White());
s.draw();
