import { FunctionComponent } from "react";
import { Box, BoxProps, Text } from "@chakra-ui/react";

export interface StickyNoteProps extends BoxProps {
  message: string;
}

const boxDefaults: BoxProps = {
  bg: "yellow.200",
  boxSize: "10em",
  padding: "1em",
  boxShadow: "dark-lg",
};

export const StickyNote: FunctionComponent<StickyNoteProps> = (
  args: StickyNoteProps
) => {
  const { message, ...boxOverrides } = args;
  const boxProps = { ...boxDefaults, ...boxOverrides };
  return (
    <Box {...boxProps}>
      <Text>{message}</Text>
    </Box>
  );
};
