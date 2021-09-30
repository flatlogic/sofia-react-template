import React, { useState } from "react";
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

const IconsPage = () => {

  const [activeTab, setActiveTab] = useState('1')

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  return (
    <Widget className="widget-p-md">
      <Nav tabs className="mb-4">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1"})}
            onClick={() => toggleTab("1")}
          >
            <p className="headline-3">Eva Icons</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2"})}
            onClick={() => toggleTab("2")}
          >
            <p className="headline-3">Material Icons</p>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3"})}
            onClick={() => toggleTab("3")}
          >
            <p className="headline-3">Font Awesome</p>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className={s.iconList}>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-github"></i><span>GitHub</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-award"></i><span>Award</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-activity"></i><span>Activity</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-archive"></i><span>Archive</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-battery"></i><span>Battery</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-behance"></i><span>Behance</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-bell"></i><span>Bell</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-book"></i><span>Book</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-browser"></i><span>Browser</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-bookmark"></i><span>Bookmark</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-bulb"></i><span>Bulb</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-brush"></i><span>Brush</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-calendar"></i><span>Calendar</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-camera"></i><span>Camera</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-car"></i><span>Car</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-cast"></i><span>Cast</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-checkmark"></i><span>Checkmark</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-clipboard"></i><span>Clipboard</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-clock"></i><span>Clock</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-close"></i><span>Close</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-code"></i><span>Code</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-compass"></i><span>Compass</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-copy"></i><span>Copy</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-crop"></i><span>Crop</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-cube"></i><span>Cube</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-download"></i><span>Download</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-droplet"></i><span>Droplet</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-edit"></i><span>Edit</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-email"></i><span>Email</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-expand"></i><span>Expand</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-eye"></i><span>Eye</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-facebook"></i><span>Facebook</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-file"></i><span>File</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-film"></i><span>Film</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-flag"></i><span>Flag</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-flash"></i><span>Flash</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-flip"></i><span>Flip</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-folder"></i><span>Folder</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-funnel"></i><span>Funnel</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-list"></i><span>List</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-gift"></i><span>Gift</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-globe"></i><span>Globe</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-grid"></i><span>Grid</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-hash"></i><span>Hash</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-heart"></i><span>Heart</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-home"></i><span>Home</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-image"></i><span>Image</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-inbox"></i><span>Inbox</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-info"></i><span>Info</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-keypad"></i><span>Keypad</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-layers"></i><span>Layers</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-layout"></i><span>Layout</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-link"></i><span>Link</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-lock"></i><span>Lock</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-map"></i><span>Map</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-menu"></i><span>Menu</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-mic"></i><span>Mic</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-monitor"></i><span>Monitor</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-moon"></i><span>Moon</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-move"></i><span>Move</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-music"></i><span>Music</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-navigation"></i><span>Navigation</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-npm"></i><span>Npm</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-options"></i><span>Options</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-pantone"></i><span>Pantone</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-people"></i><span>People</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-percent"></i><span>Percent</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-person"></i><span>Person</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-phone"></i><span>Phone</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-pin"></i><span>Pin</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-plus"></i><span>Plus</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-power"></i><span>Power</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-pricetags"></i><span>Pricetags</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-printer"></i><span>Printer</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-radio"></i><span>Radio</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-recording"></i><span>Recording</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-refresh"></i><span>Refresh</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-repeat"></i><span>Repeat</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-save"></i><span>Save</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-scissors"></i><span>Scissors</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-search"></i><span>Search</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-settings"></i><span>Settings</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-shake"></i><span>Shake</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-share"></i><span>Share</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-shield"></i><span>Shield</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-shuffle"></i><span>Shuffle</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-smartphone"></i><span>Smartphone</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-speaker"></i><span>Speaker</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-star"></i><span>Star</span></Col>
            <Col xs={12} sm={4} md={3} lg={2}><i className="eva eva-sun"></i><span>Sun</span></Col>
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
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Chat /><span>Chat</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccountBox /><span>AccountBox</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AccountCircle /><span>AccountCircle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.AcUnit /><span>AcUnit</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Adb /><span>Adb</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Adjust /><span>Adjust</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Games /><span>Games</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.GitHub /><span>GitHub</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Money /><span>Money</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Nfc /><span>Nfc</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Facebook /><span>Facebook</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Telegram /><span>Telegram</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Toys /><span>Toys</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Deck /><span>Deck</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Dashboard /><span>Dashboard</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Wifi /><span>Wifi</span></Col>
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

              <Col xs={12} sm={4} md={3} lg={2}><Icons.Code /><span>Code</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Cake /><span>Cake</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Dns /><span>Dns</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Flag /><span>Flag</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Grain /><span>Grain</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Http /><span>Http</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Link /><span >Link</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Opacity /><span>Opacity</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Person /><span>Person</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Palette /><span>Palette</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Panorama /><span>Panorama</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><Icons.Router /><span>Router</span></Col>

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
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-ban" /><span>Ban</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bomb" /><span>Bomb</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-building" /><span>Building</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-cab" /><span>Cab</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-child" /><span>Car</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bed" /><span>Child</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bath" /><span>Bath</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-circle" /><span>Circle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-codepen" /><span>Codepen</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-cube" /><span>Cubes</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-database" /><span>Database</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-delicious" /><span>Delicious</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-deviantart" /><span>Deviantart</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-digg" /><span>Digg</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-empire" /><span>Empire</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-envelope" /><span>Envelope</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-fax" /><span>Fax</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-file" /><span>File</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-amazon" /><span>Amazon</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-android" /><span>Android</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-apple" /><span>Apple</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-beer" /><span>Beer</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-bolt" /><span>Bolt</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-child" /><span>Child</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-chrome" /><span>Chrome</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-contao" /><span>Contao</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-yahoo" /><span>Yahoo</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-diamond" /><span>Diamond</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-cloud" /><span>Cloud</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-code" /><span>Code</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-codepen" /><span>Codepen</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-git" /><span>Git</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-github" /><span>Github</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-gitlab" /><span>Gitlab</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-gittip" /><span>Gittip</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-header" /><span>Header</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-history" /><span>History</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-institution" /><span>Institution</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-joomla" /><span>Joomla</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-jsfiddle" /><span>Jsfiddle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-language" /><span>Language</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-drupal" /><span>Drupal</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-dropbox" /><span>Dropbox</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-etsy" /><span>Etsy</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-empire" /><span>Empire</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-openid" /><span>Openid</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-envira" /><span>Envira</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-eraser" /><span>eraser</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-paragraph" /><span>Paragraph</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-paw" /><span>Paw</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-euro" /><span>Euro</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-female" /><span>Female</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-film" /><span>Film</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-qq" /><span>Qq</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-renren" /><span>Renren</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-rebel" /><span>Rebel</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-recycle" /><span>Recycle</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-reddit" /><span>Reddit</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-firefox" /><span>Firefox</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-send" /><span>Send</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-flask" /><span>Flask</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-flickr" /><span>Flickr</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-imdb" /><span>Imdb</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-slack" /><span>Slack</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-sliders" /><span>Sliders</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-soundcloud" /><span>Soundcloud</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-safari" /><span>Safari</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-spoon" /><span>Spoon</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-spotify" /><span>Spotify</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-steam" /><span>Steam</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-sheqel" /><span>Sheqel</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-terminal" /><span>Terminal</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-snapchat" /><span>Snapchat</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-support" /><span>Support</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa fa-taxi" /><span>Taxi</span></Col>
              <Col xs={12} sm={4} md={3} lg={2}><i className="fa la-patreon" /><span>Patreon</span></Col>
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

export default IconsPage;
