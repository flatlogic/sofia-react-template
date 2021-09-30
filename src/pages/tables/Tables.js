import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
                    <a href="/#"><img src={searchIcon} alt="Search"/></a>
                    <a href="/#"><img className="d-none d-sm-block" src={cloudIcon} alt="Cloud" /></a>
                    <a href="/#"><img src={printerIcon} alt="Printer" /></a>
                    <a href="/#"><img className="d-none d-sm-block" src={optionsIcon} alt="Options" /></a>
                    <a href="/#"><img src={funnelIcon} alt="Funnel" /></a>
                  </div>
                </div>
                <div className="widget-table-overflow">
                  <Table className={`table-striped table-borderless table-hover ${s.statesTable}`} responsive>
                    <thead>
                    <tr>
                      <th className={s.checkboxCol}>
                        <div className="checkbox checkbox-primary">
                          <input
                            className="styled"
                            id="checkbox100"
                            type="checkbox"
                          />
                          <label for="checkbox100"/>
                        </div>
                      </th>
                      <th className="w-25">NAME</th>
                      <th className="w-25">COMPANY</th>
                      <th className="w-25">CITY</th>
                      <th className="w-25">STATE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {firstTable
                      .slice(
                        firstTableCurrentPage * pageSize,
                        (firstTableCurrentPage + 1) * pageSize
                      )
                      .map(item => (
                        <tr key={uuidv4()}>
                          <td>
                            <div className="checkbox checkbox-primary">
                              <input
                                id={item.id}
                                className="styled"
                                type="checkbox"
                              />
                              <Label for={item.id} />
                            </div>
                          </td>
                          <td className="d-flex align-items-center"><img className={s.image} src={item.img} alt="User"/><span className="ml-3">{item.name}</span></td>
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
                        href="#top"
                      />
                    </PaginationItem>
                    {[...Array(firstTablePagesCount)].map((page, i) =>
                      <PaginationItem active={i === firstTableCurrentPage} key={i}>
                        <PaginationLink onClick={e => setFirstTablePage(e, i)} href="#top">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem disabled={firstTableCurrentPage >= firstTablePagesCount - 1}>
                      <PaginationLink
                        onClick={e => setFirstTablePage(e, firstTableCurrentPage + 1)}
                        next
                        href="#top"
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
                      <img className="d-none d-sm-block" src={moreIcon} alt="More..."/>
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
                  <Table className="table-striped table-borderless table-hover" responsive>
                    <thead>
                    <tr>
                      <th>
                        <div className="checkbox checkbox-primary">
                          <input
                            id="checkbox200"
                            className="styled"
                            type="checkbox"
                          />
                          <label for="checkbox200"/>
                        </div>
                      </th>
                      <th className={s.nameCol}>NAME</th>
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
                      <tr key={uuidv4()}>
                        <td>
                          <div className="checkbox checkbox-primary">
                            <input
                              id={item.id}
                              className="styled"
                              type="checkbox"
                            />
                            <label for={item.id} />
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
                        href="#top"
                      />
                    </PaginationItem>
                    {[...Array(secondTablePagesCount)].map((page, i) =>
                      <PaginationItem active={i === secondTableCurrentPage} key={i}>
                        <PaginationLink onClick={e => setSecondTablePage(e, i)} href="#top">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem disabled={secondTableCurrentPage >= secondTablePagesCount - 1}>
                      <PaginationLink
                        onClick={e => setSecondTablePage(e, secondTableCurrentPage + 1)}
                        next
                        href="#top"
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
                    {/*<img src="" alt="Filter option"/>*/}
                  </div>
                </div>
                <div className={s.widgetContentBlock}>
                  {transactions.map(item => (
                    <div key={uuidv4()} className={s.content}>
                      <div><img src={item.icon} alt="Item" /><span className="body-2 ml-3">{item.category}</span></div>
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
                          <img className="d-none d-sm-block" src={moreIcon} alt="More ..."/>
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
