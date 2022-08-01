# Como podemos evitar o SQL Injection?

O desenvolvedor deve separar os parâmetros que são enviados pelo usuário, da query que está indo ao banco de dados, através por exemplo, do uso da classe PreparedStatement em Java.



Na linguagem Java, por meio do uso do `PreparedStatement` conseguimos separar os parâmetros enviados pelo usuário, da *query* que está indo ao banco. Por exemplo:

```
String sql=Insert into accounts(username, password) values (?,?);
PreparedStatement stmt = connection.prepareStatement(sql);
stmt.setString(1, usuario);
stmt.setString(2, senha);
stmt.execute();
```

Através do uso do `PreparedStatement`, o código SQL é pré-compilado e armazenado em um objeto do tipo `PreparedStatement`. Esse tipo de prevenção permite que o banco de dados faça a distinção entre código e dado, dessa forma, mesmo que o usuário mal intencionado colocasse `or ‘a’=’a` na senha, isso seria interpretado como uma String e não como código. Do jeito que foi feita a programação do site da Mutillidae, o desenvolvedor colocou o parâmetro direto no código SQL que está indo para o banco, devemos ter algo como:

```
String usuario=request.getParameter(“usuario”);
String senha=request.getParameter(“senha”);

SELECT username from accounts where username=’”+usuario+”’ AND password =’”+senha+”’;
```

Dessa forma, ao inserir um código SQL no usuário ou na senha, esse código será interpretado pelo banco, pois esses parâmetros (usuário e senha) foram colocados diretamente na query que está indo ao banco de dados.


