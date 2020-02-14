export class Transfer {
  constructor(
    codigoBanco: number,
    tipoConta: string,
    agencia: string,
    conta: string,
    cpf: string,
    cnpj: string,
    nome: string,
    valor: number,
    tipoTransferencia: string,
    finalidade: string,
    historico: string,
    data: Date,
    id: string,
  ) {
    this.codigoBanco = codigoBanco;
    this.tipoConta = tipoConta;
    this.agencia = agencia;
    this.conta = conta;
    this.cpf = cpf;
    this.cnpj = cnpj;
    this.nome = nome;
    this.valor = valor;
    this.tipoTransferencia = tipoTransferencia;
    this.finalidade = finalidade;
    this.historico = historico;
    this.data = data;
    this.id = id;
  }

  codigoBanco: number;
  tipoConta: string;
  agencia: string;
  conta: string;
  cpf: string;
  cnpj: string;
  nome: string;
  valor: number;
  tipoTransferencia: string;
  finalidade: string;
  historico: string;
  data: Date;
  id: string;
}
