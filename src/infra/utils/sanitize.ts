export function removeAccents(str: string) {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function sanitizeString(value: string): string {
	let sanitized = value.trim();
	sanitized = removeAccents(sanitized);
	sanitized = sanitized.toLowerCase();
	return sanitized;
}

export function sanitizeData<T>(data: T): T {
	const sanitizedData: any = Array.isArray(data) ? [] : {};

	for (const key in data) {
		const value = data[key];
		if (typeof value === "string") {
			sanitizedData[key] = sanitizeString(value);
		} else if (typeof value === "object" && value !== null) {
			sanitizedData[key] = sanitizeData(value);
		} else {
			sanitizedData[key] = value;
		}
	}

	return sanitizedData as T;
}
