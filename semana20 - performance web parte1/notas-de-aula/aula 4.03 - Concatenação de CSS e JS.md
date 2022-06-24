# Por qual motivo concatenamos CSSs e JSs?

Diminuir o número de requests faz com que os downloads sejam mais rápidos no HTTP 1. Temos menos concorrência nas 6 conexões disponíveis, logo, recursos precisam aguardar menos para serem baixados. De bônus, o GZIP funciona muito bem em recursos texto concatenados com bastante repetição, como CSS.

Você consegue compreender o impacto analisando o waterfall antes e depois da concatenação?

Menos requests fazem os CSSs e JSs serem carregados mais rapidamente. E não só isso, as requisições seguintes também, já que há menos tempo de espera por uma conexão livre.