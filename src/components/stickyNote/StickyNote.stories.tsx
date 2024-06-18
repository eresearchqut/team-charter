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
  },
};

export const Rotate: Story = {
  args: {
    ...Primary.args,
    transform: "rotate(5deg)",
  },
};

export const Bigger: Story = {
  args: {
    ...Primary.args,
    size: "20em",
  },
};
