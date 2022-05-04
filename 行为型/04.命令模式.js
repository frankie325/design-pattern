// 命令接受方：只需要执行，不关心请求者是谁
class Cooker {
    cook() {
        console.log("做饭");
    }
}

class Cleaner {
    clean() {
        console.log("保洁");
    }
}

// 做饭的命令
class CookCommand {
    // 将干活的人传达给命令
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.cook();
    }
}

// 打扫的命令
class CleanCommand {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.clean();
    }
}

// 命令发送方
class Customer {
    constructor(command) {
        this.setCommand(command);
    }

    setCommand(command) {
        this.command = command;
    }
    // 顾客只需要执行点餐的动作就行，并不关心是谁去实现
    cook() {
        this.command.execute();
    }
    clean() {
        this.command.execute();
    }
}

let cooker = new Cooker();
let cleaner = new Cleaner();
let cookCommand = new CookCommand(cooker);
let cleanCommand = new CleanCommand(cleaner);

// 当要做饭时，传达做饭的命令
let customer = new Customer(cookCommand);
customer.execute();
// 当要打扫时，传达打扫的命令
customer.setCommand(cleanCommand);
customer.execute();
