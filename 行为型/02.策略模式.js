class Customer {
    constructor(kind) {
        this.kind = kind;
    }

    // 支付时根据客服的等级，有不同的支付算法，这里只需要调用不同等级的类就行
    pay(amount) {
        return this.kind.pay(amount);
    }
}

// 不同等级的算法，交给不同的对象处理
class Normal {
    pay(amount) {
        return amount;
    }
}

class Member {
    pay(amount) {
        return amount * 0.9;
    }
}

class VIP {
    pay(amount) {
        return amount * 0.8;
    }
}

let c = new Customer(new Normal());
console.log(c.pay(100));
c.kind = new Member();
console.log(c.pay(100));
c.kind = new VIP();
console.log(c.pay(100));
