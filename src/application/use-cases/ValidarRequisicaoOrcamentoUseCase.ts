import { RequisicaoOrcamentoSchema } from "../../domain/schemas";
import { DadosMovel } from "../../domain/types";

export class ValidarRequisicaoOrcamentoUseCase {
	execute(dadosMovel: DadosMovel) {
		return RequisicaoOrcamentoSchema.safeParse(dadosMovel);
	}
}
