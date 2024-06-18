import { FunctionComponent } from "react";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { StickyNotes, StickyNotesProps } from "../stickyNotes";

export interface StickyNotesBoardProps extends StickyNotesProps {
  title: string;
}

export const StickyNotesBoard: FunctionComponent<StickyNotesBoardProps> = ({
  title,
  ...notesProps
}) => {
  return (
    <Card>
      <CardHeader>
        <Heading>{title}</Heading>
      </CardHeader>
      <CardBody>
        <StickyNotes {...notesProps} />
      </CardBody>
    </Card>
  );
};
