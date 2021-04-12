import React, { useState } from "react";
import {
  Col,
  Row,
  Table,
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import TaskContainer from "./components/TaskContainer/TaskContainer.js";
import s from "./Tables.module.scss";
import mock from "./mock.js";

import cloudIcon from "../../assets/tables/cloudIcon.svg";
import funnelIcon from "../../assets/tables/funnelIcon.svg";
import optionsIcon from "../../assets/tables/optionsIcon.svg";
import printerIcon from "../../assets/tables/printerIcon.svg";
import searchIcon from "../../assets/tables/searchIcon.svg";
import moreIcon from "../../assets/tables/moreIcon.svg";

const Tables = function () {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firstTable] = useState(mock.firstTable);
  const [secondTable] = useState(mock.secondTable);
  const [transactionWidget] = useState(mock.transactionWidget);
  const [tasks, setTasks] = useState(mock.tasksWidget);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map( task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
      })
    )

    // let newTasks = tasks;
    // newTasks[id].completed = !tasks[id].completed;
    // setTasks( newTasks )
  }

  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4">
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">States Colors</div>
                  <div className="d-flex">
                    <img src={searchIcon} />
                    <img className="d-none d-sm-block" src={cloudIcon} />
                    <img src={printerIcon} />
                    <img className="d-none d-sm-block" src={optionsIcon} />
                    <img src={funnelIcon} />
                  </div>
                </div>
                <div className="widget-table-overflow">
                  <Table className="table-striped table-borderless" responsive>
                    <thead>
                    <tr>
                      <th>
                        <div>
                          <Input
                            id="checkbox1" type="checkbox"
                          />
                          <Label for="checkbox1"/>
                        </div>
                      </th>
                      <th>NAME</th>
                      <th>COMPANY</th>
                      <th>CITY</th>
                      <th>STATE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {firstTable.map(item => (
                      <tr>
                        <td>
                          <div>
                            <Input
                              id={item.id} type="checkbox"
                            />
                            <Label for={item.id} />
                          </div>
                        </td>
                        <td className="d-flex align-items-center"><img src={item.img}/><span className="ml-3">{item.name}</span></td>
                        <td>{item.company}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Material UI table</div>
                    <img src={moreIcon} />
                </div>
                <div className="widget-table-overflow">
                  <Table className="table-striped table-borderless" responsive>
                    <thead>
                    <tr>
                      <th>
                        <div>
                          <Input
                            id="checkbox2" type="checkbox"
                          />
                          <Label for="checkbox2"/>
                        </div>
                      </th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PRODUCT</th>
                      <th>PRICE</th>
                      <th>DATE</th>
                      <th>CITY</th>
                      <th>STATUS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {secondTable.map(item => (
                      <tr>
                        <td>
                          <div>
                            <Input
                              id={item.id} type="checkbox"
                            />
                            <Label for={item.id} />
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.product}</td>
                        <td>{item.price}</td>
                        <td>{item.date}</td>
                        <td>{item.city}</td>
                        <td><Badge color={item.color}>{item.status}</Badge></td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row>
            <Col xs={12} xl={8} className="pr-grid-col">
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Recent transaction</div>
                  <div>
                    <ButtonDropdown
                      isOpen={dropdownOpen} toggle={toggle}
                      className=""
                    >
                      <DropdownToggle caret>
                        &nbsp; Weekly &nbsp;
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Daily</DropdownItem>
                        <DropdownItem>Weekly</DropdownItem>
                        <DropdownItem>Monthly</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <img src="" />
                  </div>
                </div>
                <div className={s.widgetContentBlock}>
                  {transactionWidget.map(item => (
                    <div className={s.content}>
                      <div><img src={item.icon}/><span className="body-2 ml-3">{item.category}</span></div>
                      <div className="body-3 muted d-none d-md-block">{item.date}</div>
                      <div className="body-2">{item.price}</div>
                      <div className="body-3 muted d-none d-lg-block">{item.description}</div>
                      <img className="d-none d-sm-block" src={moreIcon}/>
                    </div>
                  ))}
                </div>
              </Widget>
            </Col>
            <Col xs={12} xl={4} className="pl-grid-col mt-4 mt-xl-0">
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Tasks</div>
                </div>
                <div className={s.widgetContentBlock}>
                  <TaskContainer tasks={tasks} toggleTask={toggleTask} />
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Tables;
