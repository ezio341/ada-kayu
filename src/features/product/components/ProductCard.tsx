import { Box, Card, Flex, Stack, Text, Title } from "@mantine/core";
import { ProductData } from "../product.models";
import Image from "next/image";
import { CurrencyFormat } from "@/ui/components/CurrencyFormat/CurrencyFormat";

export function ProductCard({ product }: { product: ProductData }) {
  return (
    <Card>
      <Stack>
        <Box w={"100%"} pos={"relative"} style={{ aspectRatio: "1/1" }}>
          <Image
            src={product.image}
            alt={product.name}
            objectFit="contain"
            fill
          />
        </Box>
        <Title order={3} fw={700}>
          {product.name}
        </Title>
        <Flex gap={16}>
          {product.original_price && (
            <Text style={{ textDecoration: "line-through" }} c={"dimmed"}>
              <CurrencyFormat value={product.original_price} />
            </Text>
          )}
          <Text fw={700}>
            <CurrencyFormat value={product.price} />
          </Text>
        </Flex>
      </Stack>
    </Card>
  );
}
