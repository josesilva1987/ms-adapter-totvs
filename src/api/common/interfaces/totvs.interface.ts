/* eslint-disable prettier/prettier */
declare interface ApiTotvsResponse<T> {
    messages: {
        code: string;
        type: string;
        detail: string;
    }[];
    length: number;
    data: T;
}

export class ColigadaInterface {
    id: string;
    CODCOLIGADA: number;
    NOMEFANTASIA: string;
    CGC: string;
    NOME: string;
    TELEFONE: string;
    FAX: string;
    EMAIL: string;
    RUA: string;
    NUMERO: number;
    COMPLEMENTO: string;
    BAIRRO: string;
    CIDADE: string;
    ESTADO: string;
    PAIS: string
    CEP: string;
    INTEGRADOFLUIG?: number;
    INSCRICAOESTADUAL?: string;
    CONTROLACGC?: string;
    CONTROLE1?: string;
    CONTROLE2?: string;
    CONTROLE3?: string;
    IDIMAGEM?: number;
    PRODUTORRURAL?: string;
    ATIVO?: string;
    CODEXTERNO?: number;
    IMPORTADA?: string;
    IMAGEM?: string;
}

