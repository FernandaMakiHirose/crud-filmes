export interface Filme {
  id?: number; 
  titulo: string;
  urlFoto?: string;
  dtLancamento: Date;
  descricao?: string;
  nota: number;
  urlIMDb?: string;
  genero: string;
}

/*
o id é opcional (?), porque precisa esperar o backend criar o id
o nome dos campos precisa ser idêntico aos nomes do arquivo cadastro-filmes-component.ts
*/