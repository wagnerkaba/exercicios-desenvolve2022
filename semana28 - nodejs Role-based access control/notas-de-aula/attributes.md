

# Attributes

Esta api utiliza utiliza [accesscontrol](https://www.npmjs.com/package/accesscontrol) que é um controle de acesso baseado em papeis (roles) e atributos (**attributes**).

Os arquivos [autorizacao.js](../projeto/src/middlewares/autorizacao.js) e [controleDeAcesso.js](../projeto/src/controleDeAcesso.js) usam **attributes**.

Para entender attributes, veja o texto abaixo:

### Resources and Resource-Attributes

Multiple roles can have access to a specific resource. But depending on the context, you may need to limit the contents of the resource for specific roles.

This is possible by resource attributes. You can use Glob notation to define allowed or denied attributes.

For example, we have a `video` resource that has the following attributes: `id`, `title` and `runtime`. All attributes of *any* `video` resource can be read by an `admin` role:

```
ac.grant('admin').readAny('video', ['*']);

// equivalent to:

// ac.grant('admin').readAny('video');
```



But the `id` attribute should not be read by a `user` role.



```
ac.grant('user').readOwn('video', ['*', '!id']);

// equivalent to:

// ac.grant('user').readOwn('video', ['title', 'runtime']);
```



You can also use nested objects (attributes).



```
ac.grant('user').readOwn('account', ['*', '!record.id']);
```


Fonte:https://www.npmjs.com/package/accesscontrol



