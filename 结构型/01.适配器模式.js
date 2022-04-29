// 电源
class Power {
    charge() {
        return "220V";
    }
}

// 适配器
class Adapter {
    constructor(power) {
        this.power = new Power();
    }
    // 对电源做转换，将电源220V 转为 12V进行适配
    charge() {
        let v = this.power.charge();
        return `${v} => 12V`;
    }
}

class Client {
    constructor() {
        this.adapter = new Adapter();
    }

    // 使用适配器
    use() {
        console.log(this.adapter.charge());
    }
}

let c = new Client();
c.use();

// 应用场景

// 项目中用的请求方法时jquery的ajax，但是现在需求是要改成使用fetch去请求数据
// 如果我们全部替换源码需要花很多精力，可以进行适配，原来方法还是不用修改，新增一个适配的方法能很大程度的节省时间

// 进行适配，实际上请求是通过fetch方法实现
window.$ = {
    ajax(options) {
        return fetch(options.url, {
            method: options.type || "GET",
            body: JSON.stringify(options.data || {}),
        });
    },
};

// 还是按照jquery的方式来使用
$.ajax({
    url,
    type: "POST",
    datatype: "json",
    data: { id: "xxx" },
}).then((data) => {
    console.log(data);
});
