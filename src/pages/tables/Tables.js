import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import cx from "classnames";
import {
  Col,
  Row,
  Table,
  Progress,
  Button,
  ButtonDropdown,
  UncontrolledButtonDropdown,
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

class Tables extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      firstTable: mock.firstTable,
      secondTable: mock.secondTable,
      transactionWidget: mock.transactionWidget,
      tasks: mock.tasksWidget,
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Row className="mb-4">
              <Col>
                <Widget>
                  <div className={s.tableTitle}>
                    <div className="headline-2">States Colors</div>
                    <div>
                      <img src={searchIcon} />
                      <img src={cloudIcon} />
                      <img src={printerIcon} />
                      <img src={optionsIcon} />
                      <img src={funnelIcon} />
                    </div>
                  </div>
                  <div className="widget-table-overflow">
                    <Table className="table-striped table-borderless">
                      <thead>
                      <tr>
                        <th>
                          <div className="abc-checkbox">
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
                      {this.state.firstTable.map(item => (
                        <tr>
                          <td>
                            <div className="abc-checkbox">
                              <Input
                                id={item.id} type="checkbox"
                              />
                              <Label for={item.id} />
                            </div>
                          </td>
                          <td><img src={item.img}/><span className="ml-3">{item.name}</span></td>
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
                    <Table className="table-striped table-borderless">
                      <thead>
                      <tr>
                        <th>
                          <div className="abc-checkbox">
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
                      {this.state.secondTable.map(item => (
                        <tr>
                          <td>
                            <div className="abc-checkbox">
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
              <Col xs={12} xl={8} className="pr-base">
                <Widget>
                  <div className={s.tableTitle}>
                    <div className="headline-2">Recent transaction</div>
                    <div>
                      <ButtonDropdown
                        isOpen={this.state.dropdownOpen} toggle={this.toggle}
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
                    {this.state.transactionWidget.map(item => (
                      <div className={s.content}>
                        <div><img src={item.icon}/><span className="body-2 ml-3">{item.category}</span></div>
                        <div className="body-3 muted">{item.date}</div>
                        <div className="body-2">{item.price}</div>
                        <div className="body-3 muted">{item.description}</div>
                        <img src={moreIcon}/>
                      </div>
                    ))}
                  </div>
                </Widget>
              </Col>
              <Col  xs={6} xl={4} className="pl-base">
                <Widget>
                  <div className={s.tableTitle}>
                    <div className="headline-2">Tasks</div>
                  </div>
                  <div className={s.widgetContentBlock}>
                    {/*<TaskContainer data={mock.tasks} />*/}
                  </div>
                </Widget>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Tables;
