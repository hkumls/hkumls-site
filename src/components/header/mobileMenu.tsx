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
}

export const MobileMenu: React.FC<Props> = ({
  disclosure: { onClose, isOpen },
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
              locationHash={location.hash}
              key={route.id}
            ></NavItem>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
