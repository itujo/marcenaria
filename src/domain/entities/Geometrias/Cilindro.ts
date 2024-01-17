import { Geometria } from "../Geometria";

export class Cilindro extends Geometria {
	constructor(
		nome: string,
		private raioBase: number,
		private altura: number,
	) {
		super(nome);
		this.raioBase = raioBase;
		this.altura = altura;
	}

	calcularArea() {
		return 2 * Math.PI * this.raioBase * (this.raioBase + this.altura);
	}
}
