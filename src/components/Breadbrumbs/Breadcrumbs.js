import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import s from "./Breadcrumbs.module.scss";

class Breadcrumbs extends React.Component {

  renderBreadcrumbs = () => {
    let url = this.props.url;
    let route = this.props.url.split('/')
      .slice(1)
      .map(route => route
        .split('-')
        .map(word => word.length < 3
          ? word.toUpperCase()
          : word[0].toUpperCase() + word.slice(1))
        .join(' ')
      );
    const length = route.length

    return route.map((item, index) => {
      let middlewareUrl = "/" + url.split("/").slice(1, index + 2).join("/");

      return (
        <BreadcrumbItem key={uuidv4()}>
          {length === index + 1
            ? item
            : <Link to={middlewareUrl}>
                {item}
              </Link>
          }
        </BreadcrumbItem>
      )
    })
  }

  render() {

    let routeArr = this.props.url.split('/');
    let title = routeArr[routeArr.length - 1];
    let breadcrumbTitle = title[0].toUpperCase() + title.slice(1)

    return (
      <div className={s.breadcrumbs}>
        <div className="headline-2">{breadcrumbTitle}</div>
        {breadcrumbTitle !== "Dashboard" &&
          <Breadcrumb tag="nav" listTag="div">
            {this.renderBreadcrumbs()}
          </Breadcrumb>
        }
      </div>
    )
  }
};

export default Breadcrumbs;
