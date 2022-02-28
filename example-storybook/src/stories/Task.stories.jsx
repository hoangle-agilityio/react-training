import Task from "../components/Task";

export default {
  component: Task,
  title: "Task Input",
}

const Template = args => <Task {...args} />;

export const Default = Template.bind();

Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "inbox",
    updatedAt: new Date(),
  },
};

export const Pinned = Template.bind();

Pinned.args = {
  task: {
    ...Default.args.task,
    state: "pinned",
  }
}

export const Archived = Template.bind();

Archived.args = {
  task: {
    ...Default.args.task,
    state: "archived",
  }
}
