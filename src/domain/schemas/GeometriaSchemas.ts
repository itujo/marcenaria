import { INSPECT_MAX_BYTES } from "buffer";
import { z } from "zod";

const medidaSchema = z.union([
	z
		.string()
		.regex(/^\d+(?:\.\d+)?cm$/, "Formato inválido para medida (ex: '1.5cm')"),
	z.number().positive().max(Number.MAX_VALUE).gte(0.01),
]);

export const DadosCilindroSchema = z.object({
	estrutura: z.string(),
	geometria: z.literal("cilindro"),
	raio_base: medidaSchema,
	altura: medidaSchema,
});

export const DadosCuboSchema = z.object({
	estrutura: z.string(),
	geometria: z.literal("cubo"),
	lado: medidaSchema,
});

export const DadosEsferaSchema = z.object({
	estrutura: z.string(),
	geometria: z.literal("esfera"),
	raio: medidaSchema,
});

export const DadosParalelepipedoSchema = z.object({
	estrutura: z.string(),
	geometria: z.literal("paralelepipedo"),
	comprimento: medidaSchema,
	largura: medidaSchema,
	altura: medidaSchema,
});

export const DadosPiramideSchema = z.object({
	estrutura: z.string(),
	geometria: z.literal("piramide"),
	base: medidaSchema,
	altura: medidaSchema,
});

export const DadosGeometriaSchema = z.discriminatedUnion("geometria", [
	DadosCilindroSchema,
	DadosCuboSchema,
	DadosEsferaSchema,
	DadosParalelepipedoSchema,
	DadosPiramideSchema,
]);
