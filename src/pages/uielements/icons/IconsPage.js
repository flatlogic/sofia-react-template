import React from "react";
import classnames from "classnames";

import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";
import * as Icons from "@material-ui/icons";
import "font-awesome/css/font-awesome.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "eva-icons/style/eva-icons.css";


import s from "./IconsPage.module.scss";

class IconsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  render() {
    return (
      <Widget className="widget-p-md">
        <Nav tabs className="mb-4">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1"})}
              onClick={() => {this.toggle("1"); }}
            >
              <p className="headline-3">Eva Icons</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2"})}
              onClick={() => {this.toggle("2"); }}
            >
              <p className="headline-3">Material Icons</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3"})}
              onClick={() => {this.toggle("3"); }}
            >
              <p className="headline-3">Font Awesome</p>
            </NavLink>
          </NavItem>
        </Nav>

        {/* tab content */}

        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Row className={s.iconList}>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-github"></i><span>GitHub</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-award"></i><span>Award</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-activity"></i><span>Activity</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-archive"></i><span>Archive</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-battery"></i><span>Battery</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-behance"></i><span>Behance</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-bell"></i><span>Bell</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-book"></i><span>Book</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-browser"></i><span>Browser</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-bookmark"></i><span>Bookmark</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-bulb"></i><span>Bulb</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-brush"></i><span>Brush</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-calendar"></i><span>Calendar</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-camera"></i><span>Camera</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-car"></i><span>Car</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-cast"></i><span>Cast</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-checkmark"></i><span>Checkmark</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-clipboard"></i><span>Clipboard</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-clock"></i><span>Clock</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-close"></i><span>Close</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-code"></i><span>Code</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-compass"></i><span>Compass</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-copy"></i><span>Copy</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-crop"></i><span>Crop</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-cube"></i><span>Cube</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-download"></i><span>Download</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-droplet"></i><span>Droplet</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-edit"></i><span>Edit</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-email"></i><span>Email</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-expand"></i><span>Expand</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-eye"></i><span>Eye</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-facebook"></i><span>Facebook</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-file"></i><span>File</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-film"></i><span>Film</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-flag"></i><span>Flag</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-flash"></i><span>Flash</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-flip"></i><span>Flip</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-folder"></i><span>Folder</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-funnel"></i><span>Funnel</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-list"></i><span>List</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-gift"></i><span>Gift</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-globe"></i><span>Globe</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-grid"></i><span>Grid</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-hash"></i><span>Hash</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-heart"></i><span>Heart</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-home"></i><span>Home</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-image"></i><span>Image</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-inbox"></i><span>Inbox</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-info"></i><span>Info</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-keypad"></i><span>Keypad</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-layers"></i><span>Layers</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-layout"></i><span>Layout</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-link"></i><span>Link</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-lock"></i><span>Lock</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-map"></i><span>Map</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-menu"></i><span>Menu</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-mic"></i><span>Mic</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-monitor"></i><span>Monitor</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-moon"></i><span>Moon</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-move"></i><span>Move</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-music"></i><span>Music</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-navigation"></i><span>Navigation</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-npm"></i><span>Npm</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-options"></i><span>Options</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-pantone"></i><span>Pantone</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-people"></i><span>People</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-percent"></i><span>Percent</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-person"></i><span>Person</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-phone"></i><span>Phone</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-pin"></i><span>Pin</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-plus"></i><span>Plus</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-power"></i><span>Power</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-pricetags"></i><span>Pricetags</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-printer"></i><span>Printer</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-radio"></i><span>Radio</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-recording"></i><span>Recording</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-refresh"></i><span>Refresh</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-repeat"></i><span>Repeat</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-save"></i><span>Save</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-scissors"></i><span>Scissors</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-search"></i><span>Search</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-settings"></i><span>Settings</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-shake"></i><span>Shake</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-share"></i><span>Share</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-shield"></i><span>Shield</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-shuffle"></i><span>Shuffle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-smartphone"></i><span>Smartphone</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-speaker"></i><span>Speaker</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-star"></i><span>Star</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i class="eva eva-sun"></i><span>Sun</span></Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <div>
              <Row className={s.iconList}>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessAlarm /><span>AccessAlarm</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessAlarms /><span>AccessAlarms</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Accessibility /><span>Accessibility</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Accessible /><span>Accessible</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessAlarms /><span>AccessAlarms</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessibleForward /><span>AccessibleForward</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AccessTime /><span>AccessTime</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AccountBalance /><span>AccountBalance</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AccountBalanceWallet /><span>AccountBalanceWallet</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AccountBox /><span>AccountBox</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AccountCircle /><span>AccountCircle</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AcUnit /><span>AcUnit</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Adb /><span>Adb</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Adjust /><span>Adjust</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirlineSeatFlat /><span>AirlineSeatFlat</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirlineSeatFlatAngled /><span>AirlineSeatFlatAngled</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirlineSeatIndividualSuite /><span>AirlineSeatIndividualSuite</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirlineSeatLegroomExtra /><span>AirlineSeatLegroomExtra</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirlineSeatLegroomNormal /><span>AirlineSeatLegroomNormal</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirlineSeatLegroomReduced /><span>AirlineSeatLegroomReduced</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirlineSeatReclineExtra /><span>AirlineSeatReclineExtra</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirlineSeatReclineNormal /><span>AirlineSeatReclineNormal</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirplanemodeActive /><span>AirplanemodeActive</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirplanemodeInactive /><span>AirplanemodeInactive</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Airplay /><span>Airplay</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AirportShuttle /><span>AirportShuttle</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Alarm /><span>Alarm</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Album /><span>Album</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AllInbox /><span>AllInbox</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AllInclusive /><span>AllInclusive</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AllOut /><span>AllOut</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AlternateEmail /><span>AlternateEmail</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Android /><span>Android</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Apps /><span>Apps</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Archive /><span>Archive</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowBack /><span>ArrowBack</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowBackIos /><span>ArrowBackIos</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowDownward /><span>ArrowDownward</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowDropDown /><span>ArrowDropDown</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowDropDownCircle /><span>ArrowDropDownCircle</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowDropUp /><span>ArrowDropUp</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowForward /><span >ArrowForward</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowForwardIos /><span>ArrowForwardIos</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowLeft /><span>ArrowLeft</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowRight /><span>ArrowRight</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowRightAlt /><span>ArrowRightAlt</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArrowUpward /><span>ArrowUpward</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.ArtTrack /><span>ArtTrack</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AspectRatio /><span>AspectRatio</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Assessment /><span>Assessment</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Assignment /><span>Assignment</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentInd /><span>AssignmentInd</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentLate /><span>AssignmentLate</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentReturn /><span>AssignmentReturn</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentReturned /><span>AssignmentReturned</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AssignmentTurnedIn /><span>AssignmentTurnedIn</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Assistant /><span>Assistant</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AssistantPhoto /><span>AssistantPhoto</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Atm /><span>Atm</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AttachFile /><span>AttachFile</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Attachment /><span>Attachment</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AttachMoney /><span>AttachMoney</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Audiotrack /><span>Audiotrack</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Autorenew /><span>Autorenew</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.AvTimer /><span>AvTimer</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Backspace /><span>Backspace</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Backup /><span>Backup</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Ballot /><span>Ballot</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BarChart /><span>BarChart</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery20 /><span>Battery20</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery30 /><span>Battery30</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery50 /><span>Battery50</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery60 /><span>Battery60</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery80 /><span>Battery80</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Battery90 /><span>Battery90</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryAlert /><span>BatteryAlert</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging20 /><span>BatteryCharging20</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging30 /><span>BatteryCharging30</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging50 /><span>BatteryCharging50</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging60 /><span>BatteryCharging60</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging80 /><span>BatteryCharging80</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryCharging90 /><span>BatteryCharging90</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryChargingFull /><span>BatteryChargingFull</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryFull /><span>BatteryFull</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryStd /><span>BatteryStd</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BatteryUnknown /><span>BatteryUnknown</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.BeachAccess /><span>BeachAccess</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Beenhere /><span>Beenhere</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Block /><span>Block</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><Icons.Bluetooth /><span>Bluetooth</span></Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div>
              <Row className={s.iconList}>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bed" /><span>Bed</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bank" /><span>Bank</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-behance" /><span>Behance</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-behance-square" /><span>Behance-square</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bomb" /><span>Bomb</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-building" /><span>Building</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-cab" /><span>Cab</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-child" /><span>Car</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bed" /><span>Child</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-circle-o-notch" /><span>Circle-o-notch</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-circle-thin" /><span>Circle-thin</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-codepen" /><span>Codepen</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-cube" /><span>Cubes</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-database" /><span>Database</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-delicious" /><span>Delicious</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-deviantart" /><span>Deviantart</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-digg" /><span>Digg</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-empire" /><span>Empire</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-envelope-square" /><span>Envelope-square</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-fax" /><span>Fax</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-archive-o" /><span>File-archive-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-audio-o" /><span>File-audio-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-code-o" /><span>File-code-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-excel-o" /><span>File-excel-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-image-o" /><span>File-image-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-movie-o" /><span>File-movie-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-pdf-o" /><span>File-pdf-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-photo-o" /><span>File-photo-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-picture-o" /><span>File-picture-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-powerpoint-o" /><span>File-powerpoint-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-sound-o" /><span>File-sound-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-video-o" /><span>File-video-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-word-o" /><span>File-word-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file-zip-o" /><span>File-zip-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-git-square" /><span>Git-square</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-google" /><span>Google</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-graduation-cap" /><span>Graduation-cap</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-hacker-news" /><span>Hacker-news</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-header" /><span>Header</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-history" /><span>History</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-institution" /><span>Institution</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-joomla" /><span>Joomla</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-jsfiddle" /><span>Jsfiddle</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-language" /><span>Language</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-life-bouy" /><span>Life-bouy</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-life-ring" /><span>Life-ring</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-life-saver" /><span>Life-saver</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-mortar-board" /><span>Mortar-board</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-openid" /><span>Openid</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-paper-plane" /><span>Paper-plane</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-paper-plane-o" /><span>paper-plane-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-paragraph" /><span>Paragraph</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-paw" /><span>Paw</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-pied-piper" /><span>Pied-piper</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-pied-piper-alt" /><span>Pied-piper-alt</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-pied-piper-square" /><span>Pied-piper-square</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-qq" /><span>Qq</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-ra" /><span>Ra</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-rebel" /><span>Rebel</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-recycle" /><span>Recycle</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-reddit" /><span>Reddit</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-reddit-square" /><span>Reddit-square</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-send" /><span>Send</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-send-o" /><span>Send-o</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-share-alt" /><span>Share-alt</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-share-alt-square" /><span>Share-alt-square</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-slack" /><span>Slack</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-sliders" /><span>Sliders</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-soundcloud" /><span>Soundcloud</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-space-shuttle" /><span>Space-shuttle</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-spoon" /><span>Spoon</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-spotify" /><span>Spotify</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-steam" /><span>Steam</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-steam-square" /><span>Steam-square</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-stumbleupon" /><span>Stumbleupon</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-stumbleupon-circle" /><span>Stumbleupon-circle</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-support" /><span>Support</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-taxi" /><span>Taxi</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-tencent-weibo" /><span>Tencent-weibo</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-tree" /><span>Tree</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-university" /><span>University</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-vine" /><span>Wine</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-wechat" /><span>Wechat</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-css3" /><span>CSS3</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-wordpress" /><span>Wordpress</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-yahoo" /><span>Yahoo</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-telegram" /><span>Telegram</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-weibo" /><span>Weibo</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-houzz" /><span>Houzz</span></Col>
                <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-html5" /><span>HTML5</span></Col>
              </Row>
            </div>
          </TabPane>
        </TabContent>
      </Widget>
    );
  }
}

export default IconsPage;
