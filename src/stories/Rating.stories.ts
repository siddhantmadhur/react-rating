import type { Meta, StoryObj } from "@storybook/react";
import Rating from "../Rating";

const meta = {
  title: "Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  args: {
    value: 2,
    color: "#1EADB6",
    size: 64,
  },
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
