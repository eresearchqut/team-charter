import { FunctionComponent } from "react";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { StickyNotes, StickyNotesProps } from "../stickyNotes";

export interface StickyNotesBoardProps {
  title: string;
  notes: string[];
  spacing?: StickyNotesProps["spacing"];
}

export const StickyNotesBoard: FunctionComponent<StickyNotesBoardProps> = ({
  title,
  notes,
  spacing = 5,
}) => {
  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const stickyNotes: StickyNotesProps = {
    spacing,
    notes: notes.map((note) => ({
      message: note,
      transform: `rotate(${randomIntFromInterval(-3, 3)}deg)`,
      size: `${randomIntFromInterval(8, 12)}em`,
    })),
  };

  return (
    <Card>
      <CardHeader>
        <Heading>{title}</Heading>
      </CardHeader>
      <CardBody>
        <StickyNotes {...stickyNotes} />
      </CardBody>
    </Card>
  );
};
