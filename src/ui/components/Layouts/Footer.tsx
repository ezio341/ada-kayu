import { Button } from "@mantine/core";

import { Flex } from "@mantine/core";

import { MdEmail } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
import { Grid, Text } from "@mantine/core";
import classes from "./MainLayout.module.scss";
import { MdPhone } from "react-icons/md";

export function Footer() {
  return (
    <Grid p={64} className={classes.footer} gutter={32}>
      <Grid.Col span={{ base: 12, lg: 6 }}>
        <Text className={classes.footerTitle}>
          Hubungi Kami & Konsultasi Custom
        </Text>
        <Text>
          Kunjungi showroom kami di Jl. Jalan Cibodas 2, atau hubungi kami
          melalui [Telepon] atau [Email]. Kami juga aktif di Instagram dan
          Facebook. Ingin furnitur custom? Hubungi kami untuk konsultasi dan
          wujudkan desain yang Anda inginkan.
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 6 }}>
        <Flex gap={8} h={"100%"} align={"center"} justify={"center"}>
          <Button
            leftSection={<MdWhatsapp />}
            variant="outline"
            color="white"
            radius={"xl"}
          >
            +629172183781
          </Button>
          <Button
            leftSection={<MdPhone />}
            variant="outline"
            color="white"
            radius={"xl"}
          >
            +629172183781
          </Button>
          <Button
            leftSection={<MdEmail />}
            variant="outline"
            color="white"
            radius={"xl"}
          >
            user@mail.id
          </Button>
        </Flex>
      </Grid.Col>
    </Grid>
  );
}
