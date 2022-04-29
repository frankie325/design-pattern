class Google {
    get(url) {
        return "google";
    }
}

class ProxyModel {
    constructor() {
        this.google = new Google();
    }
    // 将转发代理到Google
    get(url) {
        return this.google.get(url);
    }
}

let proxy = new ProxyModel();
// 客户端发送请求，通过代理服务器发送到谷歌
let res = proxy.get("www.google.com");
console.log(res);

// 应用场景
