// 以明星和粉丝之间为例，粉丝订阅了明星的动态，一旦明星发生了状态的变化，就会通知所有订阅的粉丝

class Star {
    constructor(name) {
        this.name = name;
        this.state = "";
        this.observers = [];
    }

    getState() {
        return this.state;
    }

    //状态变更，通知更新
    setState(state) {
        this.state = state;
        this.notify();
    }

    // 将观察者注册到被观察者里，也就是粉丝订阅明星
    attach(observer) {
        this.observers.push(observer);
    }

    // 通知所有观察者更新
    notify() {
        if (this.observers.length) {
            this.observers.forEach((observer) => {
                observer.update();
            });
        }
    }
}

class Fan {
    constructor(name, star) {
        this.name = name;
        this.star = star;
        // 将观察者注册到被观察者中
        this.star.attach(this);
    }
    update() {
        console.log("我喜欢的明星动态发生了变化");
    }
}

let star = new Star("John Mayer");

let f1 = new Fan("kfg", star);

star.setState("发布新专辑");

/*
应用场景
1. DOM 事件绑定就是观察者模式：绑定 click 事件，就是订阅 DOM 上的 click 事件，当被点击时就会 DOM 元素就通知更新，也就是触发点击事件

2. Promise 内部也算是观察者模式的简单实现，then 方法注册回调，等到用户 resolve 之后，才会调用 then 注册的回调

*/

// 3. Node.js 的 events 事件触发器

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("event", () => {
    console.log("触发了自定义事件");
});

myEmitter.emit("event");

// 发布订阅模式

// 观察者模式的观察者和被观察者耦合在了一起，发布订阅模式则多了一层中介进行代理，进行了解耦

// 中介，由中介进行统一的订阅和发布
class Agent {
    constructor() {
        this._events = {};
    }

    // 订阅
    subscribe(type, listener) {
        let listeners = this._events[type];
        if (listeners) {
            listeners.push(listener);
        } else {
            this._events[type] = [listener];
        }
    }

    // 发布
    publish(type) {
        let listeners = this._events[type];
        let args = Array.prototype.slice.call(arguments, 1);
        if (listeners) {
            listeners.forEach((listener) => {
                listener(...args);
            });
        }
    }
}

// 房东
class LandLord {
    constructor(name) {
        this.name = name;
    }

    // 房东发布消息，向外租出
    lend(agent, area, money) {
        agent.publish("house", area, money);
    }
}

// 租客
class Tenant {
    constructor(name) {
        this.name = name;
    }

    // 租房，订阅中介的消息
    rent(agent) {
        agent.subscribe("house", (area, money) => {
            console.log(`我看到中介的新房源了 ${area}平方，房租${money}元`);
        });
    }
}

let agent = new Agent();
let t1 = new Tenant("张三");
t1.rent(agent);
let landlord = new LandLord("房东1");
landlord.lend(agent, 60, 2000);
