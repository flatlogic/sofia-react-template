import React from 'react';
import PropTypes from 'prop-types';

import s from './Widget.module.scss';
import classNames from 'classnames';
import { v4 as uuidv4 } from "uuid";

class Widget extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
]),
    options: PropTypes.object,
  };

  static defaultProps = {
    title: null,
    className: '',
    headerClass: '',
    children: [],
    options: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      randomId: uuidv4(),
    }
  }

  render() {
    const {
      title,
      className,
      headerClass,
      children,
      options,
      ...attributes
    } = this.props;

    return (
      <React.Fragment>
        <section
          className={s.widget}
          {...attributes}
        >
          {title && (
            <div className={classNames(headerClass, s.title)}>
              {title}
            </div>)}
          <div className={className}>
            {children}
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Widget;
