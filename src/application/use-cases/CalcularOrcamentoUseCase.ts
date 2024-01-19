import { Material, Movel } from "../../domain/entities";
import { GeometriaFactory } from "../../domain/factories";
import { DadosMovel } from "../../domain/types";
import { MaterialRepository } from "../../infra/repositories";

export class CalcularOrcamentoUseCase {
	constructor(
		private materialRepository: MaterialRepository,
		private geometriaFactory: GeometriaFactory,
	) {
		this.materialRepository = materialRepository;
		this.geometriaFactory = geometriaFactory;
	}

	execute(dadosMovel: DadosMovel) {
		const material = this.materialRepository.buscarPorTipo(dadosMovel.material);

		if (!material) {
			throw new Error(`Tipo de material inválido: ${dadosMovel.material}`);
		}
		const geometrias = dadosMovel.geometrias.map((dadosGeom) =>
			this.geometriaFactory.criarGeometria(dadosGeom),
		);

		const movel = new Movel(
			dadosMovel.movel,
			new Material(material.tipo, material.precoBase),
			geometrias,
		);

		return {
			precoTotal: +movel.calcularPrecoTotal().toFixed(2),
			detalhes: geometrias.map((geom) => ({
				tipo: geom.nome,
				preco: +geom.calcularPreco(material.precoBase).toFixed(2),
			})),
		};
	}
}
