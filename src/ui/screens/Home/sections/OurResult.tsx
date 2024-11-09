import { artCollectionData } from "@/features/art-collection/art-collection.mock";
import { ArtCollectionCard } from "@/features/art-collection/components/ArtCollectionCard";
import { Grid, Text, Title } from "@mantine/core";

import { Stack } from "@mantine/core";

export function OurResult() {
  return (
    <Stack>
      <Stack maw={800} mx="auto" gap={16}>
        <Title ta={"center"}>Hasil Terbaik Kami Untuk Anda</Title>
        <Text ta={"center"}>
          Lihat beberapa furnitur dan proyek yang telah kami selesaikan, dari
          rumah pribadi hingga hotel mewah. Setiap produk dibuat dengan penuh
          keahlian dan dedikasi.
        </Text>
      </Stack>
      <Grid gutter={32}>
        {artCollectionData.map((item) => (
          <Grid.Col key={item.id} span={{ base: 12, sm: 6 }}>
            <ArtCollectionCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
