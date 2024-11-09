import { Stack } from "@mantine/core";
import { Heading } from "./sections/Heading/Heading";
import { ProductsView } from "./sections/ProductsView";
import { HowItsMade } from "./sections/HowItsMade";
import { OurResult } from "./sections/OurResult";

export function HomeScreen() {
  return (
    <Stack gap={64}>
      <Heading />
      <Stack gap={64} px={32}>
        <ProductsView />
        <HowItsMade />
        <OurResult />
      </Stack>
    </Stack>
  );
}
