import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';
import { ConfigPrams } from 'src/app/shared/models/config-prams';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  // caso o usuário não adicione foto no filme irá aparecer essa foto
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  config: ConfigPrams = {
    pagina: 0,
    limite: 4
  };

  filmes: Filme[] = []; // array de filmes
  filtrosListagem: FormGroup;
  generos: Array<string>;

  // ao carregar o componente listagem o construtor vai buscar o serviço
  constructor(private filmesService: FilmesService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.filtrosListagem = this.fb.group({ // cria um grupo com os campos que recebem valores vazios
      texto: [''],
      genero: ['']
    });

    // observa o campo "texto" para quando tiver alguma alteração ser avisado
    this.filtrosListagem.get('texto').valueChanges
    .pipe(debounceTime(400))
    .subscribe((val: string) => {
      this.config.pesquisa = val;

      // limpa a consulta
      this.resetarConsulta();
    });

    // observa o campo "genero" para quando tiver alguma alteração ser avisado
    this.filtrosListagem.get('genero').valueChanges.subscribe((val: string) => {

      // tipo gênero e o valor é o valor que o usuário adicionou
      this.config.campo = {tipo: 'genero', valor: val};

      // limpa a consulta
      this.resetarConsulta(); 
    });

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  abrir(id: number): void {
    this.router.navigateByUrl('/filmes/' + id);
  }

  /* 
  vai adicionar mais filmes na página e vai listar os filmes
  ... é um spread operator, o push vai entender que é um array de filmes e vai adicionar os filmes dentro desse array
  */
  private listarFilmes(): void {
    this.config.pagina++;
    this.filmesService.listar(this.config)
      .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

  // limpa a consulta e a página para listar somente o que foi pesquisado
  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }
}
