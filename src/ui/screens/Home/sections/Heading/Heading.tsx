import { Box, Center, Stack, Text, Title, Button } from "@mantine/core";
import classes from "./heading.module.scss";

export function Heading() {
  return (
    <Box>
      <Center
        style={{
          backgroundImage: "url(/images/sitting-room.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        h={"500px"}
        w={"100%"}
        className={classes.bg}
      >
        <Stack align="center" justify="center" h={"100%"} maw={"65%"}>
          <Title c="white" ta="center" className={classes.title}>
            Mengukir Sejarah Melalui Keindahan Akar dan Kayu Jati
          </Title>
          <Text c="white" className={classes.description} ta="center">
            Kami menawarkan berbagai macam furnitur berkualitas tinggi, mulai
            dari meja makan mewah hingga kursi minimalis, semuanya dibuat dari
            kayu jati dan akar jati yang diolah dengan teknik tradisional dan
            modern.
          </Text>
          <Button mt={32} color="white" variant="outline" size="lg" radius={16}>
            Lihat Produk
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}
