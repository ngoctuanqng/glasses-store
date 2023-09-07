import React, {useContext} from 'react';
import {BsExclamationCircle} from 'react-icons/bs';
import FilterBar from '../components/filters/FilterBar';
import ProductCard from '../components/product/ProductCard';
import EmptyView from '../components/common/EmptyView';
import Services from '../components/common/Services';
import filtersContext from '../contexts/filters/filtersContext';
import useDocTitle from '../hooks/useDocTitle';

const AllProducts = () => {
    useDocTitle('All Products');

    const {allProducts} = useContext(filtersContext);

    return (
        <>
            <section id='all_products' className='section'>
                <FilterBar />

                <div className='container'>
                    {
                        allProducts.length ? (
                            <div className='wrapper products_wrapper'>
                                {
                                    allProducts.map(item => (
                                        <ProductCard
                                            key={item.id}
                                            {...item}
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <EmptyView
                                icon={<BsExclamationCircle />}
                                msg="No Results Found"
                            />
                        )
                    }
                </div>
            </section>

            <Services />
        </>
    );
};

export default AllProducts;