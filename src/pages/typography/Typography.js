import React from "react";
import {
  Col,
  Row,
} from "reactstrap";
import Widget from "../../components/Widget/Widget";

const Typography = () => {
  return (
    <div>
      <Row>
        <Col className="mb-4" xs={12}>
          <Widget className="widget-p-lg">
            <Row>
              <Col xs={12} sm={6} xl={3} className="mb-5 mb-sm-0">
                <p className="headline-3 mb-4 text-muted">Headlines</p>
                <div className="mb-4">
                  <p className="headline-1 mb-0">Headline 1</p>
                  <p className="body-3 text-muted mb-0">29 px, Semi-bold</p>
                </div>
                <div className="mb-4">
                  <p className="headline-2 mb-0">Headline 2</p>
                  <p className="body-3 text-muted mb-0">20 px, Semi-bold</p>
                </div>
                <div>
                  <p className="headline-3 mb-0">Headline 2</p>
                  <p className="body-3 text-muted mb-0">16 px, Semi-bold</p>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="headline-3 mb-4 text-muted">Body</div>
                <div className="mb-3">
                  <p className="body-1 mb-0">Body 1</p>
                  <p className="body-3 text-muted mb-0">16 px, Regular</p>
                </div>
                <div className="mb-3">
                  <p className="body-2 mb-0">Body 2</p>
                  <p className="body-3 text-muted mb-0">14 px, Semi-bold</p>
                </div>
                <div className="mb-3">
                  <p className="body-3 mb-0">Body 3</p>
                  <p className="body-3 text-muted mb-0">14 px, Regular</p>
                </div>
                <div>
                  <p className="label mb-0">Label</p>
                  <p className="body-3 text-muted mb-0">12 px, Regular</p>
                </div>
              </Col>
              <Col xs={12} xl={6} className="mt-5 mt-xl-0">
                <p className="headline-3 mb-4 text-muted">Fonts</p>
                <p className="headline-2 mb-3">Poppins</p>
                <p className="body-3 text-muted">The goal of this new type was to create a sans serif font which give an impression of both modernism, harmony and roundness. These nuances give Sofia a harmonious and sensible appearance for both texts and headlines. </p>
                <p className="body-3 text-muted">This typeface is a complete redesign of Sofia initially designed in 2008. this typeface supports a wide range of languages with more than 500 glyphs. </p>
              </Col>
            </Row>
          </Widget>
        </Col>
      </Row>
      <Row className="gutter">
        <Col className="mb-4" xs={12} lg={6}>
          <Widget
            className="widget-p-lg"
            title={
              <p className="headline-2 mb-0 text-muted">Semi-Bold Headings </p>
            }
          >
            <h1 className="mb-4">h1 40px h1. Heading Title</h1>
            <h2 className="mb-4">h2 32px h2. Heading Title</h2>
            <h3 className="mb-4">h3 28px h3. Heading Title</h3>
            <h4 className="mb-4">h4 24px h4. Heading Title</h4>
            <h5 className="mb-4">h5 20px h5. Heading Title</h5>
            <h6>h6 16px h6. Heading Title</h6>
          </Widget>
        </Col>
        <Col className="mb-4" xs={12} lg={6}>
          <Widget
            className="widget-p-lg"
            title={
              <p className="headline-2 mb-0 text-muted">Bold Headings </p>
            }
          >
            <h1 className="font-weight-bold mb-4">h1 40px h1. Heading Title</h1>
            <h2 className="font-weight-bold mb-4">h2 32px h2. Heading Title</h2>
            <h3 className="font-weight-bold mb-4">h3 28px h3. Heading Title</h3>
            <h4 className="font-weight-bold mb-4">h4 24px h4. Heading Title</h4>
            <h5 className="font-weight-bold mb-4">h5 20px h5. Heading Title</h5>
            <h6 className="font-weight-bold">h6 16px h6. Heading Title</h6>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col className="mb-4">
          <Widget
            className="widget-p-lg"
            title={
              <p className="headline-2 mb-0 text-muted">Body Text</p>
            }
          >
            <p className="mb-0">In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi, non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel gravida magna.</p>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Widget
            className="widget-p-lg"
            title={
              <p className="headline-2 mb-0 text-muted">Body Text</p>
            }
          >
            <Row>
              <Col xs={12} lg={5}>
                <p className="mb-2">Basic text</p>
                <p className="font-weight-light mb-2">Basic light text</p>
                <p className="font-weight-bold mb-2">Basic bold text</p>
                <p className="text-uppercase mb-2">Basic uppercase text</p>
                <p className="text-lowercase mb-2">Basic Lowercase Text</p>
                <p className="text-capitalize mb-2">Basic capitalize text</p>
                <p className="font-italic mb-2 mb-lg-0">Basic cursive text</p>
              </Col>
              <Col xs={12} lg={7}>
                <p className="text-muted mb-2"><u>Highlighting underline text</u></p>
                <p className="text-muted mb-2"><s>Highlighting Strikethrough text</s></p>
                <p className="font-weight-bold text-muted mb-2">Highlighting bold text</p>
                <p className="font-italic text-muted mb-2">Highlighting italic text</p>
                <p className="text-uppercase text-muted mb-2">Highlighting uppercase text</p>
                <p className="text-muted mb-2">&#8226; bullet text</p>
              </Col>
            </Row>
          </Widget>
        </Col>
      </Row>
    </div>
  )
}

export default Typography;
