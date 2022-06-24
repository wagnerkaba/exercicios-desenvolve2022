# 06 - Mão na massa: deploy no App Engine

Algumas ferramentas de análise de performance exigem que nosso site esteja online em uma URL pública. Eu gosto bastante do Google App Engine por sua simplicidade e por ter um plano free razoável. Então usarei esse serviço aqui para subir uma versão do site.

1) Se não fez ainda, instale o [Google App Engine SDK for PHP](https://cloud.google.com/appengine/downloads#Google_App_Engine_SDK_for_PHP). Adicione o projeto a ele.

2) Precisamos criar um novo projeto no *Google Cloud Console*. Acesse o [Dashboard](https://console.cloud.google.com/appengine) e vá em **Criar Projeto**. Escolha um nome e ID único. Copie o nome desse ID.

3) No nosso projeto, abra o arquivo `app.yaml` e adicione a configuração do nome da aplicação que você acabou de criar:

```
application: id_do_seu_projeto_aqui
```

4) Abra o *Google App Engine Launcher* na sua máquina e clique no botão **Deploy**.

Se tudo der certo você deve conseguir abrir agora a URL:

[http://id_do_seu_projeto.appspot.com](http://id_do_seu_projeto.appspot.com/)

---

Se preferir, use a versão que fizemos no curso. Deixei uma versão deployada exatamente nesse ponto do projeto em:

[http://wpt-dot-curso-alura-site.appspot.com](http://wpt-dot-curso-alura-site.appspot.com/)



Se não quiser usar o GAE, sem problemas. Use outro servidor Web público de sua preferência. O projeto é de arquivos estáticos simples.
