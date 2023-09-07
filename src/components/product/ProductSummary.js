import React from "react";
import useActive from "../../hooks/useActive";
import reviewsData from '../../data/reviewsData';
import ProductReviews from './ProductReviews';


const ProductSummary = (props) => {
    const {brand, title, info, category, material, templeLength, gender} = props;

    const {active, handleActive, activeClass} = useActive('specs');

    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">

                    {/*==== Product-Summary-Tabs ====*/}
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            <li
                                className={`tabs_item ${activeClass('specs')}`}
                                onClick={() => handleActive('specs')}
                            >
                                Specifications
                            </li>
                            <li
                                className={`tabs_item ${activeClass('overview')}`}
                                onClick={() => handleActive('overview')}
                            >
                                Overview
                            </li>
                            <li
                                className={`tabs_item ${activeClass('reviews')}`}
                                onClick={() => handleActive('reviews')}
                            >
                                Reviews
                            </li>
                        </ul>
                    </div>

                    {/*==== Product-Summary-Details ====*/}
                    <div className="prod_summary_details">
                        {
                            active === 'specs' ?  (
                                <div className="prod_specs">
                                    <ul>
                                        <li>
                                            <span>Brand</span>
                                            <span>{brand}</span>
                                        </li>
                                        <li>
                                            <span>Model</span>
                                            <span>{title}</span>
                                        </li>
                                        <li>
                                            <span>Generic Name</span>
                                            <span>{category}</span>
                                        </li>
                                        <li>
                                            <span>Material</span>
                                            <span>{material}</span>
                                        </li>
                                        <li>
                                            <span>Temple length (mm)</span>
                                            <span>{templeLength}</span>
                                        </li>
                                        <li>
                                            <span>Gender</span>
                                            <span>{gender}</span>
                                        </li>
                                    </ul>
                                </div>
                            ) : active === 'overview' ? (
                                <div className="prod_overview">
                                    <h3>The <span>{title}</span>{info} provides with fabulous sound quality</h3>
                                    <ul>
                                        <li>These sunglasses are top-notch when it comes to quality.</li>
                                        <li>Comfortable to Wear</li>
                                        <li>The build quality is excellent.</li>
                                    </ul>
                                    <p>These sunglasses <b>{title} {info}</b>are 100% original and come with a 2-year warranty. They stand out for their design and the high quality of their materials. Buy them now at the best price of the year with this special offer.</p>
                                </div>
                            ) : (
                                <div className="prod_reviews">
                                    <ul>
                                        {
                                            reviewsData.map(item => (
                                                <ProductReviews
                                                    key={item.id}
                                                    {...item} 
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductSummary;