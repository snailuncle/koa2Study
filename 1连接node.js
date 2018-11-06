console.show();
url='192.168.12.102:2333'
var r = http.get(url);
log("code = " + r.statusCode);
log("html = " + r.body.string());
