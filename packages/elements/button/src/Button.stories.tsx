import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Elements/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Click me",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Click me",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    text: "Click me",
    disabled: true,
  },
};
