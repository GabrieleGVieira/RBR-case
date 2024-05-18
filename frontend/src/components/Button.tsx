import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonProps {
  color?: string;
  children: React.ReactNode;
}

const GeralButton: React.FC<ButtonProps> = ({ color, children, ...props }) => {
  return (
    <Button color={color || "primary"} {...props}>
      {children}
    </Button>
  );
};

export default GeralButton;
