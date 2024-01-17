export enum TipoMaterial {
	PINHO = "pinho",
	CARVALHO = "carvalho",
	EBANO = "ebano",
}

export class Material {
	private _tipo: TipoMaterial;
	private _precoBase: number;
	constructor(tipo: TipoMaterial, precoBase: number) {
		this._tipo = tipo;
		this._precoBase = precoBase;
	}

	public get tipo(): TipoMaterial {
		return this._tipo;
	}

	public set tipo(v: TipoMaterial) {
		this._tipo = v;
	}

	public get precoBase(): number {
		return this._precoBase;
	}

	public set precoBase(v: number) {
		this._precoBase = v;
	}
}
