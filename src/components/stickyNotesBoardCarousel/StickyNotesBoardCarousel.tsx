import { FunctionComponent } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { StickyNotesBoard, StickyNotesBoardProps } from "../stickyNotesBoard";

export interface StickyNotesBoardCarouselProps {
  boards: StickyNotesBoardProps[];
}

export const StickyNotesBoardCarousel: FunctionComponent<
  StickyNotesBoardCarouselProps
> = (args: StickyNotesBoardCarouselProps) => {
  const { boards } = args;

  return (
    <Tabs isLazy>
      <TabList>
        {boards.map((board, index) => (
          <Tab key={index}>{board.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {boards.map((board, index) => (
          <TabPanel key={index}>
            <StickyNotesBoard {...board} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
