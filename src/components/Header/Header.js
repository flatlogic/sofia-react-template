import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router";
import {connect} from "react-redux";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
  UncontrolledAlert,
  Dropdown,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  ButtonGroup,
  Button,
  Form,
  FormGroup,
} from "reactstrap";

import { logoutUser } from "../../actions/auth.js";
import { closeSidebar, openSidebar } from "../../actions/navigation.js";
import MenuIcon from "../Icons/HeaderIcons/MenuIcon.js";
import SearchBarIcon from "../Icons/HeaderIcons/SearchBarIcon.js";
import BellIcon from "../Icons/HeaderIcons/BellIcon.js";
import SearchIcon from "../Icons/HeaderIcons/SearchIcon.js";
import profileIcon from "../../assets/navbarMenus/profileOutlined.svg";
import messagesIcon from "../../assets/navbarMenus/messagesOutlined.svg";
import tasksIcon from "../../assets/navbarMenus/tasksOutlined.svg";
import logoutIcon from "../../assets/navbarMenus/logoutOutlined.svg";
import basketIcon from "../../assets/navbarMenus/basketIcon.svg";
import calendarIcon from "../../assets/navbarMenus/calendarIcon.svg";
import envelopeIcon from "../../assets/navbarMenus/envelopeIcon.svg";
import mariaImage from "../../assets/navbarMenus/mariaImage.jpg";
import notificationImage from "../../assets/navbarMenus/notificationImage.jpg";
import userImg from "../../assets/user.svg";

import s from "./Header.module.scss";
import "animate.css";

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.doLogout = this.doLogout.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);
    // this.toggleSearchOpen = this.toggleSearchOpen(this);

    this.state = {
      menuOpen: false,
      notificationsOpen: false,
      searchFocused: false,
      // searchOpen: false,
    };
  }

  doLogout() {
    this.props.dispatch(logoutUser());
  }

  toggleSidebar() {
    if (this.props.sidebarOpened) {
      this.props.dispatch(closeSidebar());
      // this.props.dispatch(changeActiveSidebarItem(null));
    } else {
      const paths = this.props.location.pathname.split('/');
      paths.pop();
      this.props.dispatch(openSidebar());
      // this.props.dispatch(changeActiveSidebarItem(paths.join('/')));
    }
  }

  // toggleSearchOpen() {
  //   this.setState({
  //     searchOpen: !this.state.searchOpen,
  //   });
  // }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  toggleNotifications() {
    this.setState({
      notificationsOpen: !this.state.notificationsOpen,
    });
  }

  render() {

    return (
      <Navbar className={`${s.root} d-print-none`}>
        <div>
          <NavLink
            onClick={this.toggleSidebar}
            className={`d-md-none mr-3 ${s.navItem}`}
            href="#"
          >
            <MenuIcon className={s.menuIcon} />
          </NavLink>
        </div>
        <Form className="d-none d-sm-block" inline>
          <FormGroup>
            <InputGroup className='input-group-no-border'>
              <Input id="search-input" placeholder="Search Dashboard" className='focus'/>
              <InputGroupAddon addonType="prepend">
                <span>
                  <SearchBarIcon/>
                </span>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
        <Nav className="ml-auto">
          <NavItem className="d-sm-none mr-4">
            <NavLink
              // onClick={this.toggleSearchOpen}
              className=""
              href="#"
            >
              <SearchIcon />
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.menuOpen} toggle={this.toggleMenu} className="tutorial-dropdown mr-2 mr-sm-3">
            <DropdownToggle nav>
              <div className={s.navbarBlock}>
                  <BellIcon maskId={114}></BellIcon>
                  <div className={s.count}></div>
              </div>
            </DropdownToggle>
            <DropdownMenu right className="navbar-dropdown" style={{ width: "340px" }}>
              <DropdownItem><img src={basketIcon}/><span>12 new orders have arrived today</span></DropdownItem>
              <DropdownItem>
                <div>
                  <div className="d-flex flex-row mb-1">
                    <img src={mariaImage} className={s.mariaImage} />
                    <div className="d-flex flex-column">
                      <p className="body-3">Maria</p>
                      <p className="label muted">15 min ago</p>
                    </div>
                  </div>
                  <img src={notificationImage} className={s.notificationImage}/>
                  <p className="body-2 muted">It is just a simple image that can define th..</p>
                </div>
              </DropdownItem>
              <DropdownItem><img src={calendarIcon}/><span>1 event has been canceled and ..</span></DropdownItem>
              <DropdownItem><img src={envelopeIcon}/><span>you have 2 new messages</span></DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={this.state.notificationsOpen} toggle={this.toggleNotifications} nav id="basic-nav-dropdown" className="ml-3">
            <DropdownToggle nav caret className="navbar-dropdown-toggle">
              <span className={`${s.avatar} rounded-circle float-left mr-2`}>
                <img src={userImg} alt="..."/>
              </span>
              <span className="small d-none d-sm-block ml-1 mr-2 body-1">Christina Carey</span>
            </DropdownToggle>
            <DropdownMenu left className="navbar-dropdown" style={{ width: "194px" }}>
              <DropdownItem><img src={profileIcon}/><span>Profile</span></DropdownItem>
              <DropdownItem><img src={tasksIcon}/><span>Tasks</span></DropdownItem>
              <DropdownItem><img src={messagesIcon}/><span>Messages</span></DropdownItem>
              <NavItem>
                <NavLink onClick={this.doLogout} href="#">
                  <button className="btn btn-primary rounded-pill mx-auto logout-btn" type="submit"><img src={logoutIcon}/><span className="ml-1">Logout</span></button>
                </NavLink>
              </NavItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    )
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Header));

