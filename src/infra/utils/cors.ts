import { HttpResponse } from "uWebSockets.js";

export function setCorsHeaders(response: HttpResponse) {
	response.writeHeader("Access-Control-Allow-Origin", "*");
	response.writeHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, OPTIONS",
	);
	response.writeHeader(
		"Access-Control-Allow-Headers",
		"origin, content-type, accept, x-requested-with",
	);
	response.writeHeader("Access-Control-Max-Age", "3600");
}
