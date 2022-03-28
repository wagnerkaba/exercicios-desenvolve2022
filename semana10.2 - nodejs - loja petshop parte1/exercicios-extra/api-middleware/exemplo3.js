var app = require("express")();

app.get("/", function (httpRequest, httpResponse, next) {
    httpResponse.write("Hello");
    next();
}, function (httpRequest, httpResponse, next) {
    httpResponse.write(" World !!! !!!");
    httpResponse.end();
});

app.listen(8080, () => console.log('API exemplo3 está funcionando na porta 8080'));