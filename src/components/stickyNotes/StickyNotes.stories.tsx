import type { Meta, StoryObj } from "@storybook/react";

import { StickyNotes } from "./StickyNotes";

const meta: Meta<typeof StickyNotes> = {
  component: StickyNotes,
};

export default meta;
type Story = StoryObj<typeof StickyNotes>;

export const Primary: Story = {
  args: {
    spacing: 10,
    notes: [
      {
        message: "In my experience, there is no such thing as luck.",
        fontSize: "x-large",
        transform: "rotate(-3deg)",
      },
      {
        message:
          "You will never find a more wretched hive of scum and villainy.",
        fontSize: "large",
        transform: "rotate(5deg)",
        bg: "blue.200",
      },
      {
        message: "That’s no moon. It's a space station.",
        fontSize: "x-large",
      },
    ],
  },
};
