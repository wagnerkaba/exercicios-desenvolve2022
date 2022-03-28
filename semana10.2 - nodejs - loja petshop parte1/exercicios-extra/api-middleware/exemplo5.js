var app = require("express")();

function checkLogin()
{
    return false;
}

function logRequest()
{
    console.log("New request");
}

app.get("/*", function(httpRequest, httpResponse, next){
    logRequest();
    next();
})

app.get("/*", function(httpRequest, httpResponse, next){

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

app.listen(8080);