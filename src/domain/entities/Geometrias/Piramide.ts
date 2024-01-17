import { Geometria } from "../Geometria";

export class Piramide extends Geometria {
	constructor(
		nome: string,
		private base: number,
		private altura: number,
	) {
		super(nome);
		this.base = base;
		this.altura = altura;
	}

	calcularArea() {
		// Aqui é assumido que a pirâmide é quadrangular para simplificar o cálculo
		const areaBase = this.base * this.base;
		const alturaTriangulo = Math.sqrt(
			(this.base / 2) * (this.base / 2) + this.altura * this.altura,
		);
		const areaLateral = this.base * alturaTriangulo;
		const areaTotal = areaBase + (areaLateral * 4) / 2;

		return areaTotal;
	}
}
