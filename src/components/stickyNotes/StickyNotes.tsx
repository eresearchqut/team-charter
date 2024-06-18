import { FunctionComponent } from "react";
import { StickyNoteProps, StickyNote } from "../stickyNote";
import { Wrap, WrapItem, WrapProps } from "@chakra-ui/react";

export interface StickyNotesProps extends WrapProps {
  notes: StickyNoteProps[];
}

export const StickyNotes: FunctionComponent<StickyNotesProps> = ({
  notes,
  ...wrapProps
}) => {
  return (
    <Wrap {...wrapProps}>
      {notes.map((stickyNote, index) => (
        <WrapItem key={index}>
          <StickyNote {...stickyNote} />
        </WrapItem>
      ))}
    </Wrap>
  );
};
