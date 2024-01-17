import { Geometria } from "../Geometria";

export class Paralelepipedo extends Geometria {
	constructor(
		nome: string,
		private comprimento: number,
		private largura: number,
		private altura: number,
	) {
		super(nome);
		this.comprimento = comprimento;
		this.largura = largura;
		this.altura = altura;
	}

	calcularArea() {
		const areaFace1 = this.comprimento * this.largura;
		const areaFace2 = this.largura * this.altura;
		const areaFace3 = this.altura * this.comprimento;

		const areaTotal = 2 * (areaFace1 + areaFace2 + areaFace3);
		return areaTotal;
	}
}
