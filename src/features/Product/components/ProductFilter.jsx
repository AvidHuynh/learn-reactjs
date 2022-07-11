import PropTypes from 'prop-types';
import ProductCategoryFilter from './Filters/ProductCategoryFilter';
import ProductPriceFilter from './Filters/ProductPriceFilter';
import ProductServiceFilter from './Filters/ProductServiceFilter';

ProductFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
  const hanldeCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      // ...filters,
      'category.id': newCategoryId,
    };
    onChange(newFilters);
  };
  const handleChange = (values) => {
    if (onChange) onChange(values);
  };
  return (
    <div>
      <ProductCategoryFilter onChange={hanldeCategoryChange} />
      <ProductPriceFilter onChange={handleChange} />
      <ProductServiceFilter filters={filters} onChange={handleChange} />
    </div>
  );
}

export default ProductFilter;
