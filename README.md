# Projeto CRUD completo de filmes
Objetivos: 
- Cadastrar
- Listar 
- Editar
- Excluir

## Comandos para projeto ser executado
Na raiz do projeto:
>npm install

Logo em seguida:
>npm start

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

## Pré-requisitos
- Angular básico.
- JavaScript básico.
- Node 11 e Angular 8 instalados. 
- IDE (Eu usei o Visual Studio Code).

## Bibliotecas necessárias 
- Angular Material (fornece os componentes de interface).
- JSON Server (responsável pelo backend, salva os registros do arquivo).
- NGX-Infinite-Scroll (faz o scroll infinito da tela, sem paginação).
- RxJS (faz a parte de programação reativa).

## O que é o Angular Material?
É a implementação oficial, para o Angular, do Material Design, a especificação de design para interfaces interativas do Google. O Material Design cobre desde pequenos elementos, como ícones e cores, até elementos maiores como navegação, cards, imagens e muito mais.

## Como adicionar o Angular Material
Na raiz do projeto:
>ng add @angular/material
- Tema: Indigo Pink. 
- Set up HammerJS for gesture recognition? Yes.
- Set up browser animations for Angular Material? Yes.
- <a href="https://material.angularjs.org/latest/">Visite o site do Angular Material.</a>

## O que é o RxJS?
É uma biblioteca para programação reativa usando Observables, para facilitar a composição de código assíncrono ou baseado em retorno de chamada. 

