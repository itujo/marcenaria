import { HttpResponse } from "uWebSockets.js";

export function readJson(res: HttpResponse): Promise<any> {
	return new Promise((resolve, reject) => {
		const buffer: Buffer[] = [];
		res.onData((ab, isLast) => {
			buffer.push(Buffer.from(ab));
			if (isLast) {
				const data = Buffer.concat(buffer).toString();
				try {
					const json = JSON.parse(data);
					resolve(json);
				} catch (e) {
					console.error(e);
					reject(e);
				}
			}
		});

		res.onAborted(() => {
			reject(new Error("Request was aborted"));
		});
	});
}
