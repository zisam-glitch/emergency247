import SectionTitle from "../../../components/section-title";
import BlogData from "../../../data/blog.json";
import BlogList from "../../../components/blog";
import AccordionWrap from "../../../components/accordion/AccordionWrap.jsx";
import { Link } from "react-router-dom";

const BlogAccordion = () => {
    return (
        <section className="blog-area blog-default-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle
                            classOption="mt-md-70"
                            title="<span>FAQs</span>"
                        />
                        <div
                            className="accordian-content"
                            data-aos="fade-up"
                            data-aos-duration="1100"
                        >
                            <AccordionWrap />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogAccordion;
