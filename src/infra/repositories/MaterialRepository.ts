import { TipoMaterial } from "../../domain/entities";

type Material = { tipo: TipoMaterial; precoBase: number };

export class MaterialRepository {
	private _materiais: Material[];
	constructor() {
		this._materiais = [
			{ tipo: TipoMaterial.PINHO, precoBase: 0.1 },
			{ tipo: TipoMaterial.CARVALHO, precoBase: 0.3 },
			{ tipo: TipoMaterial.EBANO, precoBase: 5.0 },
		];
	}

	buscarPorTipo(tipo: TipoMaterial) {
		return this._materiais.find((material) => material.tipo === tipo);
	}

	listarTodos() {
		return this._materiais;
	}
}
