import { Material } from "./Material";
import { Geometria } from "./Geometria";

export class Movel {
	private _nome: string;
	private _material: Material;
	private _geometrias: Geometria[];

	constructor(nome: string, material: Material, geometrias: Geometria[]) {
		this._nome = nome;
		this._material = material;
		this._geometrias = geometrias;
	}

	calcularPrecoTotal(): number {
		return this._geometrias.reduce((total, geometria) => {
			return total + geometria.calcularPreco(this._material.precoBase);
		}, 0);
	}
}
