export class ListarTiposGeometriaUseCase {
	execute() {
		return [
			{ tipo: "Cilindro", propriedades: ["raio_base", "altura"] },
			{ tipo: "Cubo", propriedades: ["lado"] },
			{ tipo: "Esfera", propriedades: ["raio"] },
			{
				tipo: "Paralelepípedo",
				propriedades: ["comprimento", "largura", "altura"],
			},
			{ tipo: "Pirâmide", propriedades: ["base", "altura"] },
		];
	}
}
