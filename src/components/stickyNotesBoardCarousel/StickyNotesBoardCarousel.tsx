import { FunctionComponent, useState, useEffect } from "react";
import {
  Fade,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { StickyNotesBoard, StickyNotesBoardProps } from "../stickyNotesBoard";

export interface StickyNotesBoardCarouselProps {
  boards: StickyNotesBoardProps[];
  interval?: number;
}

export const StickyNotesBoardCarousel: FunctionComponent<
  StickyNotesBoardCarouselProps
> = (args: StickyNotesBoardCarouselProps) => {
  const { boards, interval } = args;
  const [tabIndex, setTabIndex] = useState<number>(0);

  useEffect(() => {
    const switchSlide = async () =>
      setTabIndex((currentIndex) =>
        currentIndex + 1 < boards.length ? currentIndex + 1 : 0
      );
    if (interval && interval > 0) {
      const timeout = setInterval(switchSlide, interval);
      return () => clearInterval(timeout); // clear
    }
  }, [interval, boards]);

  const handleTabsChange = (index: number) => {
    setTabIndex(() => index);
  };

  return (
    <Tabs isLazy index={tabIndex} onChange={handleTabsChange}>
      <TabList>
        {boards.map((board, index) => (
          <Tab key={index}>{board.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {boards.map((board, index) => (
          <TabPanel key={index}>
            <Fade in={index === tabIndex}>
              <StickyNotesBoard {...board} />
            </Fade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
