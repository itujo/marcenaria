export interface DadosGeometriaBase {
	estrutura: string;
	geometria: string;
}

export interface DadosCilindro extends DadosGeometriaBase {
	raio_base: string;
	altura: string;
}

export interface DadosCubo extends DadosGeometriaBase {
	lado: string;
}

export interface DadosParalelepipedo extends DadosGeometriaBase {
	comprimento: string;
	largura: string;
	altura: string;
}

export interface DadosEsfera extends DadosGeometriaBase {
	raio: string;
}

export interface DadosPiramide extends DadosGeometriaBase {
	base: string;
	altura: string;
}

export type DadosGeometria =
	| DadosCilindro
	| DadosCubo
	| DadosParalelepipedo
	| DadosEsfera
	| DadosPiramide;
