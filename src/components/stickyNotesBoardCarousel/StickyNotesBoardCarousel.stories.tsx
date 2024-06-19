import type { Meta, StoryObj } from "@storybook/react";

import { StickyNotesBoardCarousel } from "./StickyNotesBoardCarousel";
import {
  BenKenobe,
  DarthVader,
} from "../stickyNotesBoard/StickyNotesBoard.stories";
import { StickyNotesBoardProps } from "../stickyNotesBoard";

const meta: Meta<typeof StickyNotesBoardCarousel> = {
  component: StickyNotesBoardCarousel,
};

export default meta;
type Story = StoryObj<typeof StickyNotesBoardCarousel>;

export const StarWarsQuotes: Story = {
  args: {
    boards: [
      BenKenobe.args as StickyNotesBoardProps,
      DarthVader.args as StickyNotesBoardProps,
    ],
  },
};

export const WithInterval: Story = {
  args: {
    ...StarWarsQuotes.args,
    interval: 5000,
  },
};
