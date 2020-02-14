export interface Transfer {
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
}
