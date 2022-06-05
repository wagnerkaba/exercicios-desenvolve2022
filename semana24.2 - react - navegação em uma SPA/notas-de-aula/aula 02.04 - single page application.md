# 04 Qual a ordem de execução?

Qual a principal diferença entre uma aplicação tradicional e uma single page application?

## Resposta

Uma aplicação single page application faz apenas uma requisição para o servidor, que devolve um arquivo html, quem fica responsável por exibir o conteúdo são os componentes javascript. Já uma aplicação tradicional faz uma requisição e recebe de volta o arquivo html que diz respeito aquela requisição.



# [Single-Page App in React using React Router](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm)

 Single-page apps are different from the more traditional multi-page apps that you see everywhere. The biggest difference is that navigating a single-page app doesn't involve going to an entirely new page. Instead, your pages (commonly known as ***views*** in this context) typically load inline within the same page itself.

When you are loading content inline, things get a little challenging. The hard part is not loading the content itself. That is relatively easy. The hard part is making sure that single-page apps behave in a way that is consistent with what your users are used to. More specifically, when users navigate your app, they expect that:

1. The URL displayed in the address bar always reflects the thing that they are viewing.  

2. They can use the browser's back and forward buttons...successfully.  

3. They can navigate to a particular view (aka **deep link**) directly using the appropriate URL.

With multi-page apps, these three things come for free. There is nothing extra you have to do for any of it. With single-page apps, because you aren't navigating to an entirely new page, you have to do real work to deal with these three things **that your users expect to just work**. You need to ensure that navigating within your app adjusts the URL appropriately. You need to ensure your browser's history is properly synchronized with each navigation to allow users to use the back and forward buttons. If users bookmark a particular view or copy/paste a URL to access later, you need to ensure that your single-page app takes the user to the correct place.



To deal with all of this, you have a bucket full of techniques commonly known as **routing**. Routing is where you try to map URLs to destinations that aren't physical pages such as the individual views in your single-page app. That sounds complicated, but fortunately there are a bunch of JavaScript libraries that help us out with this. One such JavaScript library is the star of this tutorial, **[React Router](https://github.com/reactjs/react-router)**. React Router provides routing capabilities to single-page apps built in React, and what makes it nice is that extends what you already know about React in familiar ways to give you all of this routing awesomeness.
