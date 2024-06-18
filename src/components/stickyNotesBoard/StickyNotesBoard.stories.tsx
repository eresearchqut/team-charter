import type { Meta, StoryObj } from "@storybook/react";

import { StickyNotesBoard } from "./StickyNotesBoard";
import teamCharter from "../../../public/team-charter.json";

const meta: Meta<typeof StickyNotesBoard> = {
  component: StickyNotesBoard,
};

export default meta;
type Story = StoryObj<typeof StickyNotesBoard>;

export const Primary: Story = {
  args: {
    title: "Things old Ben Kenobe said",
    notes: [
      "In my experience, there is no such thing as luck.",
      "You will never find a more wretched hive of scum and villainy.",
      "That’s no moon. It's a space station.",
    ],
  },
};

export const TeamAgreement: Story = {
  args: {
    ...teamCharter.boards[0],
  },
};
