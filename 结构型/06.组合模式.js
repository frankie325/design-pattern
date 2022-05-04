// 文件系统中的文件夹与文件

class Folder {
    constructor(name) {
        this.name = name;
        this.children = [];
        this.parent = null;
    }

    // 新增文件构成树形结构
    add(child) {
        child.parent = this;
        this.children.push(child);
    }

    // 一层层递归调用，展示文件
    show() {
        console.log("文件夹" + this.name);
        this.children.forEach((c) => {
            c.show();
        });
    }
}

class File {
    constructor(name) {
        this.name = name;
    }

    add() {
        throw new Error("文件下面不能创建文件");
    }

    show() {
        console.log("文件" + this.name);
    }
}

let frame = new Folder("frame");
let vue = new Folder("vue");
let react = new Folder("react");
frame.add(vue);
frame.add(react);
let observer = new File("observer");
vue.add(observer);
frame.show();
