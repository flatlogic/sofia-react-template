import React from "react";

import {
  Col,
  Row,
} from "reactstrap";
import Widget from "../../../components/Widget/Widget.js";
import ApexRadarChart from "./components/ApexRadarChart.js";
import RechartsPieChart from "./components/RechartsPieChart.js";
import ApexLineChart from "./components/ApexLineChart.js";
import ApexColumnAreaChart from "./components/ApexColumnAreaChart.js";
import ApexLineColumnChart from "./components/ApexLineColumnChart.js";

class Charts extends React.Component {

  render() {

    return (
      <div>
        <Row>
          <Col className="pr-grid-col" xs={12} lg={6}>
            <Row className="gutter mb-4">
              <Col>
                <Widget className="widget-p-md">
                  <div className="headline-2 mb-3">Line Column Mixed Chart</div>
                  <ApexLineColumnChart/>
                </Widget>
              </Col>
            </Row>
            <Row className="gutter mb-4">
              <Col>
                <Widget className="widget-p-md">
                  <div className="headline-2 mb-3">Column Area Mixed Chart</div>
                  <ApexColumnAreaChart/>
                </Widget>
              </Col>
            </Row>
          </Col>
          <Col className="pl-grid-col pr-grid-col" xs={12} lg={6}>
            <Row className="gutter mb-4 pl-grid-row pr-grid-row">
              <Col xs={12} xl={6}>
                <Widget className="widget-p-md">
                  <div className="headline-2 mb-3">Donut chart</div>
                  <RechartsPieChart/>
                </Widget>
              </Col>
              <Col className="mt-4 mt-xl-0" xs={12} xl={6}>
                <Widget className="widget-p-md">
                  <div className="headline-2">Radar Chart</div>
                  <ApexRadarChart/>
                </Widget>
              </Col>
            </Row>
            <Row>
              <Col>
                <Widget className="widget-p-md">
                  <div className="headline-2 mb-3">Line Chart</div>
                  <ApexLineChart/>
                </Widget>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Charts;
