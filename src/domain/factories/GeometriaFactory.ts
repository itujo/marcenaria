import { Cilindro, Cubo, Paralelepipedo, Esfera, Piramide } from "../entities";
import {
	DadosCilindro,
	DadosCubo,
	DadosEsfera,
	DadosGeometria,
	DadosParalelepipedo,
	DadosPiramide,
} from "../types";

export class GeometriaFactory {
	criarGeometria(dadosGeom: DadosGeometria) {
		switch (dadosGeom.geometria) {
			case "cilindro": {
				const dados = dadosGeom as DadosCilindro;
				return new Cilindro(
					dadosGeom.estrutura,
					parseFloat(dados.raio_base),
					parseFloat(dados.altura),
				);
			}

			case "cubo": {
				const dados = dadosGeom as DadosCubo;
				return new Cubo(dadosGeom.estrutura, parseFloat(dados.lado));
			}

			case "paralelepipedo": {
				const dados = dadosGeom as DadosParalelepipedo;
				return new Paralelepipedo(
					dadosGeom.estrutura,
					parseFloat(dados.comprimento),
					parseFloat(dados.largura),
					parseFloat(dados.altura),
				);
			}

			case "esfera": {
				const dados = dadosGeom as DadosEsfera;
				return new Esfera(dadosGeom.estrutura, parseFloat(dados.raio));
			}

			case "piramide": {
				const dados = dadosGeom as DadosPiramide;
				return new Piramide(
					dadosGeom.estrutura,
					parseFloat(dados.base),
					parseFloat(dados.altura),
				);
			}

			default:
				throw new Error("Tipo de geometria desconhecido");
		}
	}
}
