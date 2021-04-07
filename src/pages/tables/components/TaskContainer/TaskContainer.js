import React from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task.js";
import mock from "../../mock.js";

export default class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = mock;
  }

  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        time: PropTypes.string,
      }),
    ).isRequired,
  }

  componentDidMount() {
    const tasks = this.props.data;

    tasks.map((task) => {
      task.completed = false;
      return task;
    });

    this.setState({ tasks });
  }

  toggleTaskState = (index) => {
    const newTasks = [...this.state.tasks];
    newTasks[index].completed = !this.state.tasks[index].completed;
    this.setState({ tasks: newTasks });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        {tasks.map((task, index) =>
          <Task key={task.id} index={index} toggle={this.toggleTaskState} {...task} />)}
      </div>
    );
  }
}
