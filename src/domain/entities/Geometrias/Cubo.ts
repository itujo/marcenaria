import { Geometria } from "../Geometria";

export class Cubo extends Geometria {
	constructor(
		nome: string,
		private lado: number,
	) {
		super(nome);
		this.lado = lado;
	}

	calcularArea() {
		return 6 * this.lado * this.lado;
	}
}
