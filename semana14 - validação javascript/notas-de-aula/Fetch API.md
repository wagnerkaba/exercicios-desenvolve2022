# [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)



A basic fetch request is really simple to set up. Have a look at the following code:

```
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Here we are fetching a JSON file across the network and printing it to the console. The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.

The [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object, we use the [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json "json()") method, which returns a second promise that resolves with the result of parsing the response body text as JSON.