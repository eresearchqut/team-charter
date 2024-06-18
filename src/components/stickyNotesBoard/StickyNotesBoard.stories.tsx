import type { Meta, StoryObj } from "@storybook/react";

import { StickyNotesBoard } from "./StickyNotesBoard";
import { Primary as Notes } from "../stickyNotes/StickyNotes.stories";

const meta: Meta<typeof StickyNotesBoard> = {
  component: StickyNotesBoard,
};

export default meta;
type Story = StoryObj<typeof StickyNotesBoard>;

export const Primary: Story = {
  args: {
    spacing: 10,
    title: "Things old Ben Kenobe said:",
    ...Notes.args,
  },
};
