import type { Meta, StoryObj } from "@storybook/react";

import { StickyNotesBoard } from "./StickyNotesBoard";

const meta: Meta<typeof StickyNotesBoard> = {
  component: StickyNotesBoard,
};

export default meta;
type Story = StoryObj<typeof StickyNotesBoard>;

export const BenKenobe: Story = {
  args: {
    title: "Things Ben Kenobe said",
    notes: [
      "In my experience, there is no such thing as luck.",
      "You will never find a more wretched hive of scum and villainy.",
      "That’s no moon. It's a space station.",
    ],
  },
};

export const DarthVader: Story = {
  args: {
    title: "Things Darth Vader said",
    notes: [
      "I find your lack of faith disturbing.",
      "When I left you, I was but the learner. Now I am the master.",
      "If you only knew the power of the Dark Side. Obi-Wan never told you what happened to your father.",
      "No. I am your father.",
      "You already have, Luke.",
    ],
  },
};
