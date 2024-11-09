import { Chip, Flex, Text } from "@mantine/core";
import { productCategoryMock } from "../product-category.mock";

export function ProductCategoryFilter({
  value,
  onChange = () => {},
}: {
  value: string;
  onChange?: (id: string) => void;
}) {
  return (
    <Flex maw={"100%"} style={{ overflowX: "auto" }} gap={16}>
      {productCategoryMock.map((category) => (
        <Chip
          key={category.id}
          size="lg"
          color="black"
          checked={value === category.id}
          onClick={() => onChange(category.id)}
          styles={{
            label: { transition: "background-color .6s ease" },
            root: { transition: "all 0.3s ease" },
          }}
        >
          <Text>{category.name}</Text>
        </Chip>
      ))}
    </Flex>
  );
}
