import type { Meta, StoryObj } from "@storybook/react";

import { StickyNote } from "./StickyNote";

const meta: Meta<typeof StickyNote> = {
  component: StickyNote,
};

export default meta;
type Story = StoryObj<typeof StickyNote>;

export const Primary: Story = {
  args: {
    message: "In my experience, there is no such thing as luck.",
    fontSize: "x-large",
  },
};

export const Rotate: Story = {
  args: {
    ...Primary.args,
    transform: "rotate(5deg)",
  },
};
