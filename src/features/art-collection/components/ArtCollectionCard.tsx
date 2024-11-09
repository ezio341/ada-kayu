import { ArtCollection } from "../art-collection";
import Image from "next/image";
import { Box, Card, Stack, Text, Title } from "@mantine/core";

export function ArtCollectionCard({
  image,
  title,
  description,
}: ArtCollection) {
  return (
    <Card>
      <Stack>
        <Box w={"100%"} pos={"relative"} style={{ aspectRatio: "16/10" }}>
          <Image src={image} alt={title} objectFit="contain" fill />
        </Box>
        <Stack>
          <Title>{title}</Title>
          <Text lineClamp={2}>{description}</Text>
        </Stack>
      </Stack>
    </Card>
  );
}
