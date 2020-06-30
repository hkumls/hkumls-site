import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/core";
import { UseDisclosureReturn } from "@chakra-ui/core/dist/useDisclosure";

import { routes } from "./routes";
import { NavItem } from "./header";

interface Props {
  disclosure: UseDisclosureReturn;
  location: any;
}

export const MobileMenu: React.FC<Props> = ({
  disclosure: { onClose, isOpen },
  location,
}) => {
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          {routes.map(route => (
            <NavItem
              id={route.id}
              text={route.text}
              location={location.href}
              key={route.id}
              isSection={route.section}
            ></NavItem>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
