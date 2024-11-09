"use client";
import { Card, Flex, Stack, Text, Title } from "@mantine/core";

export function PointDescriptionCard({
  title,
  description,
  point,
  active = false,
  onClick,
}: {
  title: string;
  description: string;
  point: number;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Card
      style={{ cursor: "pointer", transition: "background-color 0.3s ease" }}
      onClick={onClick}
      radius={16}
      bg={active ? "gray.1" : "transparent"}
    >
      <Flex gap={32}>
        <Stack
          justify="center"
          align="center"
          h={"100%"}
          bg={active ? "gray.9" : "transparent"}
          style={{
            transition: "background-color 0.3s ease",
            borderRadius: "50%",
            border: "1px solid black",
            aspectRatio: "1/1",
          }}
          miw={64}
        >
          <Text fz={36} c={active ? "white" : "gray.9"}>
            {point}
          </Text>
        </Stack>
        <Stack>
          <Title order={3}>{title}</Title>
          <Text>{description}</Text>
        </Stack>
      </Flex>
    </Card>
  );
}
