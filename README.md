# Introdução

## Ambiente recomendado IMPORTANTE!
O projeto possui alguns arquivos de configuração que visam garantir experiencia de desenvolvimento suave e produtiva. A utilização dos mesmos, no entanto, depende da instalação de alguns plugins. 

Para contribuição com Javascript é  importante a utilização do editor [VSCode](https://code.visualstudio.com/download) (ou equivalente) com os seguintes plugins:

#### Importantes
* ESLint
> Highlight de erros comuns e ajuste automatico
* Prettier
> Formatação automatica com guia de estilos ja configurado para o projeto
#### Qualidade de vida
* Auto Close Tag
> Fechamento automatico de tags
* Auto Rename Tag
> Rename automatico de ambas extremidades de uma tag

## Iniciando a aplicação

1. Instale seu gerenciador de pacotes javascript favorito
> Recomendado: [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

2. Clone este repositorio
```console
$ git clone https://gitlab.com/V-in/numbiosis.git
$ cd numbiosis
```
3. Instale dependencias
```console
$ sudo yarn install
```

4. Inicie a aplicação
    1. Modo desenvolvimento com hot code reloading (mudanças ao vivo)
    ```console
    $ sudo yarn dev
    ```
    2. Modo produção (arquivos compilados mimificados e uglyficados) 
    ```console
    $ sudo yarn build
    $ sudo yarn start
    ```
#### Exportando como site estatico
É também possivel exportar o projeto como um site estático, que pode ser então hospedado no seu serviço favorito
```console
$ sudo yarn build
$ sudo yarn export #Arquivos são extraidos para a pasta ./out
```
