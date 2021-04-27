import React from "react";
import s from "./TaskContainer.module.scss";
import cx from "classnames";

const TaskContainer = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li
          className={cx(`${s.taskBlock}`, { [s.completed]: task.completed })}
          key={task.id}
        >
          <div className={s.taskDescription}>
            <div
              className="checkbox checkbox-primary mr-1">
              <input
                onChange={() => props.toggleTask(task.id)}
                checked={task.completed}
                className="styled"
                id={`checkbox${task.id}`}
                type="checkbox"
              />
              <label className="form-check-label" htmlFor={`checkbox${task.id}`} />
            </div>
            <div className="body-3">{task.description}</div>
          </div>
          <div className={s.time}>{task.time}</div>
        </li>
      ))}
    </ul>
  )
}

export default TaskContainer;
