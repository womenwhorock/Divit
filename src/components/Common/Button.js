import React from "react";
import Button from "@mui/material/Button";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";

const CustomButton = (props) => {
  const { backGroundColor, color, hoverTextColor } = props;
  const CustomButtonRoot = styled("button")(`
  background-color: ${backGroundColor};
  padding: 1rem 2rem;
  color:${color};
  font-weight: normal;
  font-family: Poppins;
  font-size: 1rem;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #3d5782;
    color:${hoverTextColor}
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #3d5782;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
};

export default CustomButton;
