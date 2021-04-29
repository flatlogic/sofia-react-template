import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar.js";
import Footer from "../Footer/Footer.js";
import Breadcrumbs from "../Breadbrumbs/Breadcrumbs.js";

import Dashboard from "../../pages/dashboard/Dashboard.js";
import Typography from "../../pages/typography/Typography.js";
import Notifications from "../../pages/notifications/Notifications.js";
import Tables from "../../pages/tables/Tables.js";
import Charts from "../../pages/uielements/charts/Charts.js";
import Icons from "../../pages/uielements/icons/IconsPage.js";
import Maps from "../../pages/uielements/maps/google/GoogleMapPage";

import s from "./Layout.module.scss";

class Layout extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarOpened: false,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.wrap}>
          <Header />
          <Sidebar />
          <main className={s.content}>
            <Breadcrumbs url={this.props.location.pathname} />
            <Switch>
              <Route path="/template" exact render={() => <Redirect to="template/dashboard"/>} />
              <Route path="/template/dashboard" exact component={Dashboard}/>
              <Route path="/template/typography" exact component={Typography} />
              <Route path="/template/tables" exact component={Tables} />
              <Route path="/template/notifications" exact component={Notifications} />
              <Route path="/template/ui-elements" exact render={() => <Redirect to={"/template/ui-elements/charts"} />} />
              <Route path="/template/ui-elements/charts" exact component={Charts} />
              <Route path="/template/ui-elements/icons" exact component={Icons} />
              <Route path="/template/ui-elements/maps" exact component={Maps} />
              <Route path='*' exact render={() => <Redirect to="/error" />} />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
