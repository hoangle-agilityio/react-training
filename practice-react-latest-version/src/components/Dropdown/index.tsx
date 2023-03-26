// Libs
import { Menu, MenuButton, MenuList, MenuListProps } from "@chakra-ui/react";
import React, { memo, useEffect, useRef, useState } from "react";

type Props = {
  isActive?: boolean;
  isShowDropdown?: boolean;
  children: React.ReactNode;
  stylesOption?: MenuListProps;
  onClose?: () => void;
  onOpen?: () => void;
  renderMenu: () => React.ReactNode;
};

const Dropdown = ({
  isActive = false,
  isShowDropdown,
  children,
  stylesOption,
  onClose,
  onOpen,
  renderMenu,
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isShowDropdown ? isActive : false);
  }, [isShowDropdown, isActive]);

  // handle click outside
  useEffect(() => {
    if (!isShowDropdown) {
      const onClick = (e: MouseEvent) => {
        // If the active element exists and is clicked outside of
        if (
          dropdownRef.current !== null &&
          !dropdownRef.current.contains(e.target as Node | null)
        ) {
          setIsOpen(!isOpen);
        }
      };

      // If the item is open then listen for clicks outside
      if (isOpen) {
        window.addEventListener("mousedown", onClick);
      }

      return () => {
        window.removeEventListener("mousedown", onClick);
      };
    }
  }, [isActive, dropdownRef, setIsOpen, isOpen, isShowDropdown]);

  return (
    <Menu isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      <MenuButton aria-label="toggle-button" fontSize="base">
        {renderMenu()}
      </MenuButton>
      <MenuList minWidth="100px" {...stylesOption} ref={dropdownRef}>
        {children}
      </MenuList>
    </Menu>
  );
};

export default memo(Dropdown);
