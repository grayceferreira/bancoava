export class Transfer {
  constructor(
    idBanco: number,
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
    contaOrigem: string,
  ) {
    this.idBanco = idBanco;
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
    this.contaOrigem = contaOrigem;
  }

  idBanco: number;
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
  contaOrigem: string;
}
