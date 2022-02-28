import React from "react";
import TaskList from "../components/TaskList";
import * as TaskStories from "./Task.stories";

export default {
  component: TaskStories,
  title: "Task List",
};

const Template = args => <TaskList {...args} />;

export const Default = Template.bind();

Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
  ]
}

export const PinnedTasks = Template.bind();

PinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 2),
    { id: "3", title: "Task 3 (pinned)", state: "pinned" },
  ]
};

export const Loading = Template.bind();

Loading.args = {
  tasks: [],
  loading: true,
}

export const Empty = Template.bind();

Empty.args = {
  ...Loading.args,
  loading: false,
}
