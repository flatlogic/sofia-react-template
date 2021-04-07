import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "uuid/v4";
import {
  Col,
  Row,
  Container,
  Progress,
  Button,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import Code from "../../components/Code/Code.js";
import s from "./Notifications.module.scss";

toast.configure();

class Notifications extends React.Component {
  state = {
    options: {
      position: "top-right",
      autoClose: 3000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      hideProgressBar: true,
    },
  };

  componentDidMount() {
    toast.success("Success: You successfully read this important alert message.", {
      position: "bottom-right",
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      hideProgressBar: true,
    });
  }

  // var [errorToastId, setErrorToastId] = useState(null);

  render() {
    return (
      <div>
        <Row className="gutter mb-4">
          <Col xs={12} lg={4}>
            <Widget className="widget-p-md">
              <p className="headline-2">Layout Options</p>
              <p className={s.widgetText}>There are few position options available for notifications. You can click any of them to change notifications position:</p>
            </Widget>
          </Col>
          <Col xs={12} lg={4}>
            <Widget className="widget-p-md">
              <p className="headline-2">Notification Types</p>
              <p className={s.widgetText}>Different types of notifications for lots of use cases. Custom classes are also supported.</p>
              <p className=" headline-3 my-1">Message with icon</p>
              <Button
                color="primary"
                // onClick={() => handleNotificationCall("info")}
                // className={classnames(classes.notificationCallButton)}
              >
                Info Message
              </Button>
            </Widget>
          </Col>
          <Col xs={12} lg={4}>
            <Widget className="widget-p-md">
              <p className="headline-2">Notification Types</p>
              <p className={s.widgetText}>Different types of notifications for lots of use cases. Custom classes are also supported.</p>
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
              <p className="headline-2">Notification Types Examples</p>
            </Widget>
          </Col>
          <Col xs={12} lg={6}>
            <Widget className="widget-p-md">
              <p className="headline-2">Notifications Types Examples, without icons</p>
            </Widget>
          </Col>
        </Row>
      </div>
    )
  }
}

// function handleNotificationCall(notificationType) {
//   var componentProps;
//
// }

export default Notifications;


