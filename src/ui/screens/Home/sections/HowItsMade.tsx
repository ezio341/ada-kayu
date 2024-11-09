"use client";
import { PointDescriptionCard } from "@/ui/components/PointDesciptionCard/PointDescriptionCard";
import { Box, Grid, Stack, Text, Title, Transition } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import Image from "next/image";
import { useState } from "react";

const pointDescriptionData = [
  {
    title: "Pemilihan Bahan Baku",
    description:
      "Kami hanya menggunakan bahan kayu jati terbaik dari sumber yang berkelanjutan.",
    point: 1,
    image: "/images/wood-saw.png",
  },
  {
    title: "Teknologi dan Keahlian",
    description:
      "Kami hanya menggunakan bahan kayu jati terbaik dari sumber yang berkelanjutan.",
    point: 2,
    image: "/images/wood-polish.png",
  },
  {
    title: "Desain Eksklusif dan Berkelas",
    description:
      "Kami menciptakan furnitur dengan desain yang elegan dan berkelas sentuhan alami dari kayu jati.",
    point: 3,
    image: "/images/glass-table.png",
  },
];

export function HowItsMade() {
  const [activePoint, setActivePoint] = useState(1);

  const [debouncedActivePoint, setDebouncedActivePoint] = useDebouncedValue(
    activePoint,
    300
  );

  return (
    <Grid gutter={64}>
      <Grid.Col span={{ base: 12, sm: 6 }} visibleFrom="sm">
        <Stack w={"100%"} h={"100%"}>
          {pointDescriptionData.map((item) => (
            <Transition
              key={item.point}
              exitDuration={300}
              exitDelay={100}
              enterDelay={600}
              mounted={activePoint === item.point}
              transition="fade-down"
            >
              {(styles) => (
                <Box w={"100%"} h={"100%"} pos="relative" style={{ ...styles }}>
                  <Image
                    src={pointDescriptionData[debouncedActivePoint - 1].image}
                    alt="how-its-made"
                    objectFit="contain"
                    fill
                    style={styles}
                  />
                </Box>
              )}
            </Transition>
          ))}
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Stack>
          <Title>Pembuatan Terbaik dari Kami Untuk Kepuasan Anda</Title>
          <Text mb={32}>
            Kami menyediakan berbagai furnitur seperti meja, kursi, lemari, dan
            dekorasi, semuanya terbuat dari kayu jati dan akar jati yang unik
            dan berkualitas tinggi.
          </Text>
          {pointDescriptionData.map((item) => (
            <PointDescriptionCard
              key={item.point}
              {...item}
              active={activePoint === item.point}
              onClick={() => setActivePoint(item.point)}
            />
          ))}
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
