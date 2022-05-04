class SuccessState {
    show() {
        console.log("绿色");
    }
}

class WarningState {
    show() {
        console.log("黄色");
    }
}

class ErrorState {
    show() {
        console.log("红色");
    }
}

class Battery {
    constructor() {
        this.amount = "high";
        this.state = new SuccessState();
    }
    show() {
        // 把显示的逻辑交给状态对象
        this.state.show();

        // 内部只需要维护状态的变化，不同的行为则交给不同的状态对象去实现
        if (this.amount === "high") {
            this.amount = "middle";
            this.state = new WarningState();
        } else if (this.amount === "middle") {
            this.amount = "low";
            this.state = new ErrorState();
        }
    }
}

let b = new Battery();
b.show();
b.show();
b.show();
