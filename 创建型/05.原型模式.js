function Foo() {}

let f = new Foo();

// 实例的__proto__指向构造函数的prototype
f.__proto__ === Foo.prototype;

//构造函数的prototype也是个对象，所以构造函数的prototype的__proto__指向Object.prototype
Foo.prototype.__proto__ === Object.prototype;

// Object.prototype的__proto__指向null
Object.prototype.__proto__ === null;



// 构造函数本身也是由new Function()创建出来的实例，所以：
Foo.__proto__ === Function.prototype;

// Function.prototype也是个对象，所以Function.prototype.__proto__指向Object.prototype
Function.prototype.__proto__ === Object.prototype

// Function也是由new Function()创建出来的实例，所以Function.__proto__指向自己Function.prototype
Function.__proto__ === Function.prototype

// Object也是由new Function()创建出来的实例，所以Object.__proto__指向Function.prototype
Object.__proto__ === Function.prototype