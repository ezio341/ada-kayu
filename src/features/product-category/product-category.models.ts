import { z } from "zod";

export const ProductCategoryData = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
});

export type ProductCategoryData = z.infer<typeof ProductCategoryData>;
