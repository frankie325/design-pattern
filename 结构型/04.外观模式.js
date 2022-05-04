class Cpu {
    start() {
        console.log("启动cpu");
    }
}
class Memory {
    start() {
        console.log("启动内存");
    }
}
class HardDisk {
    start() {
        console.log("启动硬盘");
    }
}

class Cpu {
    start() {
        console.log("启动cpu");
    }
}

class Computer {
    constructor() {
        this.cpu = new Cpu();
        this.memory = new Memory();
        this.hardDisk = new HardDisk();
    }

    // 将子系统封装起来，提供精简的接口，让高层模块可以更加容易地间接调用这些子系统的功能
    start() {
        this.cpu.start();
        this.memory.start();
        this.hardDisk.start();
    }
}
