// Libs
import { Menu, MenuButton, MenuList, MenuListProps } from "@chakra-ui/react";
import React, { memo } from "react";

type Props = {
  children: React.ReactNode;
  renderMenu: () => React.ReactNode;
  stylesOption?: MenuListProps;
};

const Dropdown = ({ children, renderMenu, stylesOption }: Props) => {
  return (
    <Menu>
      <MenuButton aria-label="toggle-button" fontSize="base">
        {renderMenu()}
      </MenuButton>
      <MenuList minWidth="100px" {...stylesOption}>
        {children}
      </MenuList>
    </Menu>
  );
};

export default memo(Dropdown);
