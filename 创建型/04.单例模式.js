function Window(name) {
    this.name = name;
}

// 使用闭包创建一个实例，每次调用都会返回该实例
// Window.getInstance = (function () {
//     let instance;
//     return function () {
//         if (!instance) {
//             instance = new Window();
//         }
//         return instance;
//     };
// })();

// let w1 = Window.getInstance();
// let w2 = Window.getInstance();

// console.log(w1 === w2); //true

/*
 用户使用这个类时必须知道这是一个单例的类，必须主动调用getInstance方法
 并不能阻止客户端直接new Window
*/

function Window(name) {
    this.name = name;
}

Window.prototype.getName = function () {
    console.log(this.name);
};

// 创建的只能是一个类，如果想要创建一个新的类，还需修改源码，无法实现复用

// CreateWindow = (function () {
//     let instance;
//     return function () {
//         if (!instance) {
//             instance = new Window();
//         }
//         return instance;
//     };
// })();

// let w1 = new CreateWindow();
// let w2 = new CreateWindow();

// 将构造函数作为参数传递
CreateSingle = function (Constructor) {
    let instance;
    return function () {
        if (!instance) {
            instance = new Constructor(...arguments);
        }
        return instance;
    };
};

function Client(name) {
    this.name = name;
}

let Win = CreateSingle(Window);
let w1 = new Win("w1");
let w2 = new Win("w2");
console.log(w1 === w2); //true
let Cli = CreateSingle(Client);
let c1 = new Cli("c1");
let c2 = new Cli("c2");
console.log(c1 === c2); //true
