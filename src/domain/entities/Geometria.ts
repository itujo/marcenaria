export abstract class Geometria {
	private _nome: string;
	constructor(nome: string) {
		this._nome = nome;
	}
	abstract calcularArea(): number;

	calcularPreco(precoBaseMaterial: number): number {
		return this.calcularArea() * precoBaseMaterial;
	}

	public get nome(): string {
		return this._nome;
	}
}
