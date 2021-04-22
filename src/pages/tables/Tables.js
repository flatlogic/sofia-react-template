import React, { useState } from "react";
import {
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonDropdown,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import TaskContainer from "./components/TaskContainer/TaskContainer.js";

// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import MUIDataTable from "mui-datatables";

import cloudIcon from "../../assets/tables/cloudIcon.svg";
import funnelIcon from "../../assets/tables/funnelIcon.svg";
import optionsIcon from "../../assets/tables/optionsIcon.svg";
import printerIcon from "../../assets/tables/printerIcon.svg";
import searchIcon from "../../assets/tables/searchIcon.svg";
import moreIcon from "../../assets/tables/moreIcon.svg";

import s from "./Tables.module.scss";
import mock from "./mock.js";

const Tables = function () {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firstTable] = useState(mock.firstTable);
  const [secondTable] = useState(mock.secondTable);
  const [transactions, setTransactions] = useState(mock.transactionsWidget);
  const [tasks, setTasks] = useState(mock.tasksWidget);
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
  const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
  const [tableDropdownOpen, setTableMenuOpen] = useState(false);

  const pageSize = 4;
  const firstTablePagesCount = Math.ceil(firstTable.length / pageSize);
  const secondTablePagesCount = Math.ceil(secondTable.length / pageSize);

  const setFirstTablePage = (e, index) => {
    e.preventDefault();
    setFirstTableCurrentPage(index);
  }

  const setSecondTablePage = (e, index) => {
    e.preventDefault();
    setSecondTableCurrentPage(index);
  }

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const transactionMenuOpen = (id) => {
    setTransactions(
      transactions.map( transaction => {
        if (transaction.id === id) {
          transaction.dropdownOpen = !transaction.dropdownOpen;
        }
        return transaction;
      })
    )
  }

  const tableMenuOpen = () => {
    setTableMenuOpen(!tableDropdownOpen);
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
                    <a><img src={searchIcon} /></a>
                    <a><img className="d-none d-sm-block" src={cloudIcon} /></a>
                    <a><img src={printerIcon} /></a>
                    <a><img className="d-none d-sm-block" src={optionsIcon} /></a>
                    <a><img src={funnelIcon} /></a>
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
                    {firstTable
                      .slice(
                        firstTableCurrentPage * pageSize,
                        (firstTableCurrentPage + 1) * pageSize
                      )
                      .map(item => (
                        <tr>
                          <td>
                            <div>
                              <Input
                                id={item.id} type="checkbox"
                              />
                              <Label for={item.id} />
                            </div>
                          </td>
                          <td className="d-flex align-items-center"><img className={s.image} src={item.img}/><span className="ml-3">{item.name}</span></td>
                          <td>{item.company}</td>
                          <td>{item.city}</td>
                          <td>{item.state}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Pagination className="pagination-borderless" aria-label="Page navigation example">
                    <PaginationItem disabled={firstTableCurrentPage <= 0}>
                      <PaginationLink
                        onClick={e => setFirstTablePage(e, firstTableCurrentPage - 1)}
                        previous
                        href="#"
                      />
                    </PaginationItem>
                    {[...Array(firstTablePagesCount)].map((page, i) =>
                      <PaginationItem active={i === firstTableCurrentPage} key={i}>
                        <PaginationLink onClick={e => setFirstTablePage(e, i)} href="#">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem disabled={firstTableCurrentPage >= firstTablePagesCount - 1}>
                      <PaginationLink
                        onClick={e => setFirstTablePage(e, firstTableCurrentPage + 1)}
                        next
                        href="#"
                      />
                    </PaginationItem>
                  </Pagination>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Material UI table</div>
                  <Dropdown
                    className="d-none d-sm-block"
                    nav
                    isOpen={tableDropdownOpen}
                    toggle={() => tableMenuOpen()}
                  >
                    <DropdownToggle nav>
                      <img className="d-none d-sm-block" src={moreIcon}/>
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>
                        <div>Copy</div>
                      </DropdownItem>
                      <DropdownItem>
                        <div>Edit</div>
                      </DropdownItem>
                      <DropdownItem>
                        <div>Delete</div>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
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
                    {secondTable
                      .slice(
                        secondTableCurrentPage * pageSize,
                        (secondTableCurrentPage + 1) * pageSize
                      )
                      .map(item => (
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
                  <Pagination className="pagination-with-border">
                    <PaginationItem disabled={secondTableCurrentPage <= 0}>
                      <PaginationLink
                        onClick={e => setSecondTablePage(e, secondTableCurrentPage - 1)}
                        previous
                        href="#"
                      />
                    </PaginationItem>
                    {[...Array(secondTablePagesCount)].map((page, i) =>
                      <PaginationItem active={i === secondTableCurrentPage} key={i}>
                        <PaginationLink onClick={e => setSecondTablePage(e, i)} href="#">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem disabled={secondTableCurrentPage >= secondTablePagesCount - 1}>
                      <PaginationLink
                        onClick={e => setSecondTablePage(e, secondTableCurrentPage + 1)}
                        next
                        href="#"
                      />
                    </PaginationItem>
                  </Pagination>
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
                      isOpen={dropdownOpen}
                      toggle={toggle}
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
                  {transactions.map(item => (
                    <div className={s.content}>
                      <div><img src={item.icon}/><span className="body-2 ml-3">{item.category}</span></div>
                      <div className="body-3 muted d-none d-md-block">{item.date}</div>
                      <div className="body-2">{item.price}</div>
                      <div className="body-3 muted d-none d-lg-block">{item.description}</div>

                      <Dropdown
                        className="d-none d-sm-block"
                        nav
                        isOpen={item.dropdownOpen}
                        toggle={() => transactionMenuOpen(item.id)}
                      >
                        <DropdownToggle nav>
                          <img className="d-none d-sm-block" src={moreIcon}/>
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem>
                            <div>Copy</div>
                          </DropdownItem>
                          <DropdownItem>
                            <div>Edit</div>
                          </DropdownItem>
                          <DropdownItem>
                            <div>Delete</div>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
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
