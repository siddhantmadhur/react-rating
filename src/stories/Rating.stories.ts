import type { Meta, StoryObj } from "@storybook/react";

import Container from "./Container";

const meta = {
  title: "Rating",
  component: Container,
  parameters: {
    layout: "centered",
  },
  args: {
    value: 2,
    color: "#1EADB6",
    size: 64,
    readOnly: false
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
