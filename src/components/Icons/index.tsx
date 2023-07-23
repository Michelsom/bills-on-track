import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { IconsProps } from "../../types";

const Icons: React.FC<IconsProps> = ({ name, color }) => {
  return <Feather name={name} size={24} color={color} />;
};

export default Icons;
