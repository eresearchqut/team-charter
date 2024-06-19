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

  const size =
    notes.length > 8
      ? ["5em", "10em", "15em", "20em"]
      : notes.length > 2
        ? ["10em", "20em", "30em"]
        : ["15em", "30em", "45em"];

  const stickyNotes: StickyNotesProps = {
    spacing,
    notes: notes.map((note) => ({
      message: note,
      transform: `rotate(${randomIntFromInterval(-3, 3)}deg)`,
      size,
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
