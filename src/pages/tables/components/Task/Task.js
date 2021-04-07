import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import s from "./Task.module.scss";

class Task extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  }

  render() {
    const { id, index, description, time, completed, toggle } = this.props;
    return (
      <div className={cx("d-flex align-items-center", {[s.completed]: completed })} key={id}>
        <div className="form-check abc-checkbox abc-checkbox-success d-flex">
          <input className="form-check-input" id={`checkbox${id}`} type="checkbox" onChange={() => toggle(index)} />
          <label className="form-check-label" htmlFor={`checkbox${id}`} />
        </div>
        <div className="">
          <div>{description}</div>
          <div>{time}</div>
        </div>
      </div>
    );
  }
}

export default Task;
