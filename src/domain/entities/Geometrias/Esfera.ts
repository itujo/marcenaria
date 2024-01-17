import { Geometria } from "../Geometria";

export class Esfera extends Geometria {
	constructor(
		nome: string,
		private raio: number,
	) {
		super(nome);
		this.raio = raio;
	}

	calcularArea() {
		return 4 * Math.PI * this.raio * this.raio;
	}
}
