import { z } from "zod";

export const ProductData = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  original_price: z.number().nullish(),
  image: z.string(),
});

export type ProductData = z.infer<typeof ProductData>;
