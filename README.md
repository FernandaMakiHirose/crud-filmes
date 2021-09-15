# Projeto CRUD completo de filmes
Objetivos: 
- Cadastrar
- Listar 
- Editar
- Excluir

## Requisitos
- Angular básico.
- JavaScript básico.
- Node 11 e Angular 8 instalados. 
- IDE (Eu usei o Visual Studio Code).

## Licença
Distribuido sob a licença MIT License. Veja `LICENSE` para mais informações.

## Comandos para projeto ser executado
Na raiz do projeto:
>npm install

Logo em seguida:
>ng serve

Abra no seu navegador:
>http://localhost:4200/

## JSON Server
O JSON Server cria chamadas rest para um backend que não existe e retorna um arquivo db.json com os dados informados.

Para instalar o JSON Server:
>npm install -g json-server 

Para inicializar o JSON Server:
>json-server --watch db.json

Para ver a Home:
>http://localhost:3000/

Para ver o Resources:
>http://localhost:3000/filmes 

## Bibliotecas necessárias 
- Angular Material (fornece os componentes de interface).
- JSON Server (responsável pelo backend, salva os registros do arquivo).
- NGX-Infinite-Scroll (faz o scroll infinito da tela, sem paginação).
- RxJS (faz a parte de programação reativa).

## O que é o Angular Material?
É a implementação oficial, para o Angular, do Material Design, a especificação de design para interfaces interativas do Google. O Material Design cobre desde pequenos elementos, como ícones e cores, até elementos maiores como navegação, cards, imagens e muito mais.

## Como adicionar o Angular Material?
Na raiz do projeto:
>ng add @angular/material
- Tema: Indigo Pink. 
- Set up HammerJS for gesture recognition? Yes.
- Set up browser animations for Angular Material? Yes.
- <a href="https://material.angularjs.org/latest/">Visite o site do Angular Material.</a>

## O que é o RxJS?
É uma biblioteca para programação reativa usando Observables, para facilitar a composição de código assíncrono ou baseado em retorno de chamada. 

## Angular Infinite Scroll
<a href="https://www.npmjs.com/package/ngx-infinite-scroll">Angular Infinite Scroll</a>

Instalação:
>npm install ngx-infinite-scroll --save 

## Extra
Comando para criar um serviço:
>ng g s nome-serviço ou'ng generate service nome-serviço

- Por que nós criamos interfaces?
Porque elas garantem que os objetos (contratos) sigam um padrão estabelecido, garantindo que todos os desenvolvedores sigam o mesmo padrão.

- Qual é a melhor forma de ordenarmos os imports dentro do Angular?
Primeiro os imports do Angular, depois de terceiros e por último os nossos.

- O que é o HTTPCliente?
Serviço responsável por criar nossas chamadas REST.

- O que é o entryComponents?
É o local onde alguns componentes precisam ser instanciados quando a aplicação é carregada.
