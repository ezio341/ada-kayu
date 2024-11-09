import { NumberFormatter } from "@mantine/core";

export function CurrencyFormat({
  value,
  prefix = "Rp",
}: {
  value: number;
  prefix?: string;
}) {
  return (
    <NumberFormatter
      value={value}
      prefix={prefix}
      decimalSeparator=","
      thousandSeparator="."
    />
  );
}
