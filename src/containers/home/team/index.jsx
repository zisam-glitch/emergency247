import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import HomeData from "../../../data/home.json";
import Team from "../../../components/team";
import SectionTitle from "../../../components/section-title";

SwiperCore.use([Pagination]);
const TeamContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: { clickable: true },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },

            991: {
                slidesPerView: 2,
            },

            767: {
                slidesPerView: 2,
            },

            560: {
                slidesPerView: 2,
            },

            0: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <div className="team-area team-default-area bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classOption="text-center"
                            title="<span>How much </span> does it cost?"
                        />
                    </div>
                </div>
                <div className="mms">
                    <div className="row">
                        <div className="gtid">
                            <div className="heasdd">
                                <h5>
                                    All patients receive an individual treatment
                                    plan with clearly illustrated costs prior to
                                    undergoing emergency dental treatment.
                                </h5>

                                <li>Tooth Extraction – from £120</li>
                                <li>
                                    Filling (temporary/ composite/ amalgam) –
                                    from £99{" "}
                                </li>
                                <li>Antibiotics – £25</li>
                                <li>
                                    Irrigation/cleaning of gums &/or wisdom
                                    tooth – £75
                                </li>
                                <li>Dry socket – £60</li>
                                <li>
                                    Accessing & dressing a tooth – from £170{" "}
                                </li>
                                <li>Surgical drainage of abscess – £160</li>
                                <li>
                                    Recement bridge/crown/veneer – from £60{" "}
                                </li>
                                <li>
                                    Re-make or repair temporary
                                    bridge/crown/veneer – from £70
                                </li>
                                <li>
                                    Re-fixing a tooth loosened by trauma – £195
                                </li>
                            </div>
                            <div className="heasdd">
                                <h5>
                                    Consultation include exam, X-rays and
                                    diagnosis appointment fee
                                </h5>

                                <li>£45 Monday to Friday between 9am – 5pm</li>
                                <li>
                                    £90 Out of Hours – Weekends 9am – 8pm and
                                    Weekdays 5pm – 8pm
                                </li>
                                <li>
                                    contact us for prices and appointments after
                                    8pm
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamContainer;
