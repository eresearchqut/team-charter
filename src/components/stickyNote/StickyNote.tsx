import { FunctionComponent, useEffect, useRef } from "react";
import { Box, Square, SquareProps, useColorModeValue } from "@chakra-ui/react";
import textFit from "textfit";

export interface StickyNoteProps
  extends Pick<
    SquareProps,
    "boxShadow" | "padding" | "color" | "transform" | "size"
  > {
  message: string;
}

const boxDefaults = {
  padding: "1em",
  boxShadow: "dark-lg",
  size: "10em",
};

export const StickyNote: FunctionComponent<StickyNoteProps> = (
  args: StickyNoteProps
) => {
  const { message, color = "yellow", ...boxOverrides } = args;
  const bg = useColorModeValue(`${color}.200`, `${color}.700`);
  const boxProps = { ...boxDefaults, bg, ...boxOverrides };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      textFit(ref.current, {
        alignVert: true,
        alignHoriz: true,
        multiLine: true,
      });
    }
  }, [ref]);

  return (
    <Square {...boxProps}>
      <Box width={"100%"} height={"100%"} ref={ref}>
        {message}
      </Box>
    </Square>
  );
};
