import SocialIcon from "../../components/social-icon";
import { Link } from "react-router-dom";
import Newsletter from "../../components/newsletter";
import Logo from "../../components/logo";

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Logo
                                    classOption="footer-logo"
                                    image={`${process.env.PUBLIC_URL}/img/logo-dark.png`}
                                />
                                <p className="mb-0">Emergency 247 Dentist</p>
                                <ul className="widget-contact-info">
                                    <li className="info-address">
                                        <i className="icofont-location-pin"></i>
                                        ADDRESS: 7-9 Branch Road, LEEDS, LS12
                                        3AQ.
                                    </li>
                                    <li className="info-mail">
                                        <i className="icofont-email"></i>
                                        <a href="mailto://hello@emergency247dentist.co.uk">
                                            hello@247dentist.co.uk
                                        </a>
                                    </li>
                                    <li className="info-phone">
                                        <i className="icofont-ui-call"></i>
                                        <a href="tel://0113 322 8354">
                                            0113 322 8354
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3 d-lg-none d-xl-block">
                        <div className="widget-item d-inline-block">
                            <h4 className="widget-title line-bottom">
                                Popular Tags
                            </h4>
                            <div className="widget-tags">
                                <ul>
                                    <li>
                                        <Link to="/">emergency dentist</Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            emergency dentist near me
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">dentist</Link>
                                    </li>
                                    <li>
                                        <Link to="/">emergency dental</Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            tampa emergency dentist
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/">
                                            emergency dentist 24/7
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                                Quick Links
                            </h4>
                            <nav className="widget-posts">
                                <ul className="posts-item">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/">About</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="/">Reviews</Link>
                                    </li> */}
                                    <li>
                                        <Link to="/">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-0 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                                Newsletter
                            </h4>
                            <div className="widget-newsletter">
                                <p>
                                    Sign up for our mailing list to get latest
                                    updates and offers.
                                </p>
                                <Newsletter mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                            </div>
                            <div className="widget-social-icons">
                                <SocialIcon
                                    path="https://twitter.com/"
                                    icon="icofont-twitter"
                                />
                                <SocialIcon
                                    path="https://myaccount.google.com/"
                                    icon="icofont-google-plus"
                                />
                                <SocialIcon
                                    path="https://www.pinterest.com/"
                                    icon="icofont-pinterest"
                                />
                                <SocialIcon
                                    path="https://rss.com/"
                                    icon="icofont-rss"
                                />
                                <SocialIcon
                                    path="https://www.facebook.com/"
                                    icon="icofont-facebook"
                                />
                                <SocialIcon
                                    path="https://dribbble.com/"
                                    icon="icofont-dribbble"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            <div className="widget-copyright">
                                <p>Copyright 2023 emergency247dentist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
