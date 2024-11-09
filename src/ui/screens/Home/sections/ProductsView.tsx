"use client";

import { ProductCategoryFilter } from "@/features/product-category/components/ProductCategoryFilter";
import { ProductCard } from "@/features/product/components/ProductCard";
import { productMock } from "@/features/product/product.mock";
import { Carousel } from "@mantine/carousel";
import { Grid, Stack, Text, Title } from "@mantine/core";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

export function ProductsView() {
  const [category, setCategory] = useState("");
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Stack gap={32}>
      <Grid align="center" justify="space-between" gutter={12}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title>
            Ragam Furnitur Berkelas dari Kayu Jati dan Akar Pohon Jati
          </Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Text>
            Kami menyediakan berbagai furnitur seperti meja, kursi, lemari, dan
            dekorasi, semuanya terbuat dari kayu jati dan akar jati yang unik
            dan berkualitas tinggi.
          </Text>
        </Grid.Col>
      </Grid>
      <ProductCategoryFilter value={category} onChange={setCategory} />
      <Grid visibleFrom="xs">
        {productMock.map((product) => (
          <Grid.Col
            span={{ base: 12, xs: 6, sm: 4, md: 4, lg: 3 }}
            key={product.id}
          >
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
      <Carousel
        hiddenFrom="xs"
        withControls={false}
        withIndicators={false}
        slideGap={12}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play(false)}
      >
        {productMock.map((product) => (
          <Carousel.Slide key={product.id}>
            <ProductCard product={product} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Stack>
  );
}
