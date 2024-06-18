import { FunctionComponent } from "react";
import {
  Center,
  Square,
  SquareProps,
  useColorModeValue,
} from "@chakra-ui/react";

export interface StickyNoteProps
  extends Pick<
    SquareProps,
    "fontSize" | "boxShadow" | "padding" | "size" | "color" | "transform"
  > {
  message: string;
}

const boxDefaults = {
  size: "10em",
  padding: "1em",
  boxShadow: "dark-lg",
};

export const StickyNote: FunctionComponent<StickyNoteProps> = (
  args: StickyNoteProps
) => {
  const { message, color = "yellow", ...boxOverrides } = args;

  const bg = useColorModeValue(`${color}.200`, `${color}.700`);

  const boxProps = { ...boxDefaults, bg, ...boxOverrides };

  return (
    <Square {...boxProps}>
      <Center>{message}</Center>
    </Square>
  );
};
