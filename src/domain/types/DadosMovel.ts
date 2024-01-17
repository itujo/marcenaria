import { TipoMaterial } from "../entities";
import { DadosGeometria } from "./GeometriaTypes";

export type DadosMovel = {
	movel: string;
	material: TipoMaterial;
	geometrias: DadosGeometria[];
};
