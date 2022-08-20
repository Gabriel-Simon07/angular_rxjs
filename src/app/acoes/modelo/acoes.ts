export interface Acoes extends Array<Acao> {

}

export interface Acao {
  id: number;
  code: string;
  descricao: string;
  preco: number;
}

export interface AcoesApi {
  payload: Acoes;
}
