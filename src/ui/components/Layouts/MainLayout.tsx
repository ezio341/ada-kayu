"use client";

import { Container, Stack, UnstyledButton } from "@mantine/core";
import {
  ActionIcon,
  AppShell,
  Button,
  Box,
  Divider,
  Burger,
  Flex,
  Text,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import classes from "./MainLayout.module.scss";
import { Footer } from "./Footer";
const menus = [
  {
    label: "Home",
    href: "/",
    disabled: false,
  },
  {
    label: "Product",
    href: "/product",
    disabled: true,
  },
  {
    label: "Collection",
    href: "/collection",
    disabled: true,
  },
  {
    label: "About",
    href: "/about",
    disabled: true,
  },

  {
    label: "Contact",
    href: "/contact",
    disabled: true,
  },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();
  const location = usePathname();
  const isActive = (href: string) => location === href;
  const onClickMenu = (href: string) => {
    if (opened) toggle();
    router.push(href);
  };
  const [scroll] = useWindowScroll();
  console.log(scroll.y > 1 ? "scrolled" : "not scrolled");
  return (
    <AppShell
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell.Header>
        <Flex
          pos={"sticky"}
          top={0}
          left={0}
          right={0}
          gap={4}
          align={"center"}
          justify={"space-between"}
          px={16}
          mih={64}
          style={{
            borderBottom: "1px solid var(--mantine-color-gray-4)",
            boxShadow: scroll.y > 1 ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <Flex gap={16} style={{ cursor: "pointer" }} align={"center"}>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text onClick={() => onClickMenu("/")} fz={24} fw={"bolder"}>
              CreaTure
            </Text>
          </Flex>
          <Flex visibleFrom="sm">
            {menus.map((menu) => (
              <Box
                key={menu.label}
                onClick={() => !menu.disabled && onClickMenu(menu.href)}
                tt="uppercase"
                className={
                  isActive(menu.href) ? classes.menuActive : classes.menu
                }
                style={{
                  cursor: menu.disabled ? "not-allowed" : "pointer",
                  opacity: menu.disabled ? 0.5 : 1,
                }}
              >
                {menu.label}
              </Box>
            ))}
          </Flex>
          <Flex align={"center"} gap={4}>
            <ActionIcon size={"xl"} variant={"subtle"} color="dark">
              <MdSearch size={24} />
            </ActionIcon>
            <ActionIcon size={"xl"} variant={"subtle"} color="dark">
              <MdOutlineShoppingCart size={24} />
            </ActionIcon>
            <Divider orientation="vertical" />
            <Button variant={"subtle"} color="dark" size={"compact-xl"}>
              Login
            </Button>
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar>
        <Box p={16}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Box>
        <Stack px={16} gap={8} h={"100%"}>
          {menus.map((menu) => (
            <UnstyledButton
              key={menu.label}
              onClick={() => !menu.disabled && onClickMenu(menu.href)}
              fz={18}
              p={8}
              style={{
                borderRadius: 16,
                cursor: menu.disabled ? "not-allowed" : "pointer",
                opacity: menu.disabled ? 0.5 : 1,
              }}
              className={
                isActive(menu.href) ? classes.menuActive : classes.menuNavbar
              }
            >
              {menu.label}
            </UnstyledButton>
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main pt={65}>
        <Container size={"xl"} className={classes.contentContainer}>
          {children}
        </Container>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
