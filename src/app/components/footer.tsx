import { Row, Col, Input } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="bg-primary-bg text-light footer fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container pb-5">
        <Row gutter={[16, 16]}>
          <Col md={12} lg={8}>
            <div className="bg-primary-text rounded p-4">
              <a href="/">
                <h1 className="text-white text-uppercase mb-3">Hotelier</h1>
              </a>
              <p className="text-white mb-0">
                Download{" "}
                <a
                  className="text-dark fw-medium"
                  href="https://htmlcodex.com/hotel-html-template-pro"
                >
                  Hotelier – Premium Version
                </a>
                , build a professional website for your hotel business and grab
                the attention of new visitors upon your site’s launch.
              </p>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <h6 className="section-title text-start text-primary-text text-uppercase mb-4">
              Contact
            </h6>
            <p className="mb-2 text-white">
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York,
              USA
            </p>
            <p className="mb-2 text-white">
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p className="mb-2 text-white">
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div className="flex pt-2">
              <Link className="btn btn-outline-light btn-social" href="">
                <TwitterOutlined />
              </Link>
              <Link className="btn btn-outline-light btn-social" href="">
                <FacebookOutlined />
              </Link>
              <Link className="btn btn-outline-light btn-social" href="">
                <YoutubeOutlined />
              </Link>
              <Link className="btn btn-outline-light btn-social" href="">
                <LinkedinOutlined />
              </Link>
            </div>
          </Col>
          <Col lg={10} md={24}>
            <Row gutter={[16, 16]}>
              <Col md={12}>
                <h6 className="section-title text-start text-primary-text text-uppercase mb-4">
                  Company
                </h6>
                <Link className="btn btn-link" href="">
                  About Us
                </Link>
                <Link className="btn btn-link" href="">
                  Contact Us
                </Link>
                <Link className="btn btn-link" href="">
                  Privacy Policy
                </Link>
                <Link className="btn btn-link" href="">
                  Terms & Condition
                </Link>
                <Link className="btn btn-link" href="">
                  Support
                </Link>
              </Col>
              <Col md={12}>
                <h6 className="section-title text-start text-primary-text text-uppercase mb-4">
                  Services
                </h6>
                <Link className="btn btn-link" href="">
                  Food & Restaurant
                </Link>
                <Link className="btn btn-link" href="">
                  Spa & Fitness
                </Link>
                <Link className="btn btn-link" href="">
                  Sports & Gaming
                </Link>
                <Link className="btn btn-link" href="">
                  Event & Party
                </Link>
                <Link className="btn btn-link" href="">
                  GYM & Yoga
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="container text-white">
        <div className="copyright">
          <Row>
            <Col md={12} className="text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <Link className="border-bottom" href="#">
                Your Site Name
              </Link>
              , All Right Reserved. Designed By{" "}
              <Link className="border-bottom" href="https://htmlcodex.com">
                PrimLink Technologies
              </Link>
            </Col>
            <Col md={12} className="text-center text-md-end">
              <div className="footer-menu">
                <Link href="">Home</Link>
                {/* <Link href="">Cookies</Link>
                <Link href="">Help</Link>
                <Link href="">FQAs</Link> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;
