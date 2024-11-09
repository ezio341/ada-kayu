import { z } from "zod";

export const ArtCollectionData = z.object({
  id: z.number(),
  image: z.string(),
  title: z.string(),
  description: z.string(),
});

export type ArtCollection = z.infer<typeof ArtCollectionData>;
