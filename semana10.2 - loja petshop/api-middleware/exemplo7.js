var app = require("express")();

function checkLogin()
{
    return false;
}

function logRequest()
{
    console.log("New request");
}

app.use(function(httpRequest, httpResponse, next){
    console.log("primeiro app.use")
    logRequest();
    next();
})

app.use(function(httpRequest, httpResponse, next){
    console.log("segundo app.use")

    if(checkLogin())
    {
        next();
    }
    else
    {
        httpResponse.send("You are not logged in!!!");
    }
})

app.get("/dashboard", function(httpRequest, httpResponse, next){

        httpResponse.send("This is the dashboard page");

});

app.get("/profile", function(httpRequest, httpResponse, next){

        httpResponse.send("This is the dashboard page");

});

app.listen(8080, () => console.log('API está funcionando na porta 8080'));