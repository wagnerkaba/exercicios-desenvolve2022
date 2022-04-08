var app = require("express")();

function checkLogin()
{
    return false;
}

function logRequest()
{
    console.log("New request");
}

app.get("/dashboard", function(httpRequest, httpResponse, next){

    logRequest();

    if(checkLogin())
    {
        httpResponse.send("This is the dashboard page");
    }
    else
    {
        httpResponse.send("You are not logged in!!!");
    }
});

app.get("/profile", function(httpRequest, httpResponse, next){

    logRequest();

    if(checkLogin())
    {
        httpResponse.send("This is the dashboard page");
    }
    else
    {
        httpResponse.send("You are not logged in!!!");
    }
});

app.listen(8080);