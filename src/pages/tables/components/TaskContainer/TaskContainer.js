import React, { useState } from "react";
import s from "./TaskContainer.module.scss";
import cx from "classnames";

const TaskContainer = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li
          onChange={() => props.toggleTask(task.id)}
          className={cx(`${s.taskBlock}`, { [s.completed]: task.completed })}
          key={task.id}
        >
          <div className={s.taskDescription}>
            <div className="form-check abc-checkbox abc-checkbox-success mr-1">
              <input className="form-check-input" id={`checkbox${task.id}`} type="checkbox" />
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
