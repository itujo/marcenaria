import { TemplatedApp } from "uWebSockets.js";
import {
	createCalcularOrcamentoController,
	createListarTiposGeometriaController,
} from "../factories";
import path from "path";
import { toArrayBuffer } from "../../infra/utils";
import { setCorsHeaders } from "../../infra/utils/cors";
import { readFileSync } from "fs";

export function setupRoutes(app: TemplatedApp) {
	const listarTiposGeometriaController = createListarTiposGeometriaController();
	const calcularOrcamentoController = createCalcularOrcamentoController();

	app.get("/geometrias", async (res, _req) => {
		setCorsHeaders(res);
		listarTiposGeometriaController.handle(res);
	});

	app.options("/orcamento", async (res, req) => {
		setCorsHeaders(res);
		res.end();
	});

	app.post("/orcamento", async (res, req) => {
		setCorsHeaders(res);
		calcularOrcamentoController.handle(res, req);
	});

	app.get("/docs", (res, _req) => {
		setCorsHeaders(res);
		const definitionsPath = path.resolve("docs", "open-api.json");

		const definitionsFile = toArrayBuffer(readFileSync(definitionsPath));

		res.end(definitionsFile);
	});
}
