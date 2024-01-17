import { HttpResponse } from "uWebSockets.js";
import { createListarTiposGeometriaUseCase } from "../../domain/factories";

export class ListarTiposGeometriaController {
	handle(res: HttpResponse): void {
		const listarTiposGeometriaUseCase = createListarTiposGeometriaUseCase();
		const tiposGeometria = listarTiposGeometriaUseCase.execute();
		res.writeHeader("Content-Type", "application/json");
		res.end(JSON.stringify(tiposGeometria));
	}
}
