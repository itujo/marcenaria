import { TemplatedApp } from "uWebSockets.js";
import { ListarTiposGeometriaController } from "../controllers/ListarTiposGeometriaController";
import { CalcularOrcamentoController } from "../controllers/CalcularOrcamentoController";

export function setupRoutes(app: TemplatedApp) {
	const listarTiposGeometriaController = new ListarTiposGeometriaController();
	const calcularOrcamentoController = new CalcularOrcamentoController();

	app.get("/geometrias", (res, _req) => {
		listarTiposGeometriaController.handle(res);
	});

	app.post("/orcamento", (res, req) => {
		calcularOrcamentoController.handle(res, req);
	});
}
