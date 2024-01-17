import { z } from "zod";
import { DadosGeometriaSchema } from "./GeometriaSchemas";
import { TipoMaterial } from "../entities";

export const RequisicaoOrcamentoSchema = z.object({
	movel: z.string(),
	material: z.nativeEnum(TipoMaterial),
	geometrias: z.array(DadosGeometriaSchema),
});
