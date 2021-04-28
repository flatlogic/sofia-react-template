import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";
import {
  Col,
  Row,
  Button,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import Code from "../../components/Code/Code.js";
import Notification from "../../components/Notification/Notification.js";
import s from "./Notifications.module.scss";
import successIcon from "../../assets/notificationsIcons/successIcon.svg";
import closeIcon from "../../assets/notificationsIcons/closeIcon.svg";

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT
];

const notificationTypes = ["info", "success", "warning", "error"]

const Notifications = function () {

  const [notificationPosition, setNotificationPosition] = useState(2)

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId)
  }

  const getRandomNotification = () => {
    return notificationTypes[Math.floor(Math.random()*notificationTypes.length)]
  }

  const options = {
    autoClose: 4000,
    closeButton: false,
    hideProgressBar: true,
    position: positions[notificationPosition],
  };

  return (
    <div>
      <Row className="gutter mb-4">
        <Col xs={12} lg={4}>
          <Widget className="widget-p-md">
            <div className="headline-2">Layout Options</div>
            <div className={s.widgetText}>There are few position options available for notifications. You can click any of them to change notifications position:</div>
            <div className={s.layoutContainer}>
              <div className={s.layoutButtonsRow}>
                <button
                  onClick={() => changeNotificationPosition(0)}
                  className={classnames(s.layoutButton, {[s.layoutButtonActive]: notificationPosition === 0})}
                />
                <button
                  onClick={() => changeNotificationPosition(1)}
                  className={classnames(s.layoutButton, {[s.layoutButtonActive]: notificationPosition === 1})}
                />
                <button
                  onClick={() => changeNotificationPosition(2)}
                  className={classnames(s.layoutButton, {[s.layoutButtonActive]: notificationPosition === 2})}
                />
              </div>
              <div className={s.layoutText}>Click any position</div>
              <div className={s.layoutButtonsRow}>
                <button
                  onClick={() => changeNotificationPosition(3)}
                  className={classnames(s.layoutButton, {[s.layoutButtonActive]: notificationPosition === 3})}
                />
                <button
                  onClick={() => changeNotificationPosition(4)}
                  className={classnames(s.layoutButton, {[s.layoutButtonActive]: notificationPosition === 4})}
                />
                <button
                  onClick={() => changeNotificationPosition(5)}
                  className={classnames(s.layoutButton, {[s.layoutButtonActive]: notificationPosition === 5})}
                />
              </div>
            </div>
          </Widget>
        </Col>
        <Col xs={12} lg={4} className="mt-4 mt-lg-0">
          <Widget className="widget-p-md">
            <div className="headline-2">Notification Types</div>
            <div className={s.widgetText}>Different types of notifications for lots of use cases. Custom classes are also supported.</div>
            <div className=" headline-3 mt-4 mb-2">Message with icon</div>
            <Button
              color="primary"
              className="notification-btn"
              onClick={() => {
                let value = getRandomNotification();
                toast(<Notification type={value} withIcon />, options)}
              }
            >
              <div className="d-flex">
                <img src={successIcon} alt="..."/>
                <div className="ml-2 body-2">Default message</div>
              </div>
              <img src={closeIcon} alt="..."/>
            </Button>
            <div className=" headline-3 mt-4 mb-2">Message without icon</div>
            <Button
              color="primary"
              className="notification-btn"
              onClick={() => {
                let value = getRandomNotification();
                toast(<Notification type={value}/>, options)
                }
              }
            >
              <div className="ml-2 body-2">Default message</div>
              <img src={closeIcon} alt="..."/>
            </Button>
          </Widget>
        </Col>
        <Col xs={12} lg={4} className="mt-4 mt-lg-0">
          <Widget className="widget-p-md">
            <div className="headline-2">Notification Types</div>
            <div className={s.widgetText}>Different types of notifications for lots of use cases. Custom classes are also supported.</div>
            <Code>{`
  // import needed components, functions and styles
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const Page = () => {
    <div>
      <ToastContainer />
      <button onClick={() => toast('Toast Message')}>
        show notification
      </button>
    </div>
  };
            `}</Code>
            <p className="label muted">For more API information refer to the library documentation</p>
          </Widget>
        </Col>
      </Row>
      <Row className="gutter mb-4">
        <Col xs={12} lg={6}>
          <Widget className="widget-p-md">
            <div className="headline-2 mb-4">Notification Types Examples</div>
            <Notification
              type="info"
              withIcon
            />
            <Notification
              type="error"
              withIcon
            />
            <Notification
              type="success"
              withIcon
            />
            <Notification
              type="warning"
              withIcon
            />
          </Widget>
        </Col>
        <Col xs={12} lg={6} className="mt-4 mt-lg-0">
          <Widget className="widget-p-md">
            <div className="headline-2 mb-4">Notifications Types Examples, without icons</div>
            <Notification
              type="info"
            />
            <Notification
              type="error"
            />
            <Notification
              type="success"
            />
            <Notification
              type="warning"
            />
          </Widget>
        </Col>
      </Row>
    </div>
  )
}

export default Notifications;

