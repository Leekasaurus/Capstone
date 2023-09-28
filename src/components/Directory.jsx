import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Directory({categories}) {
  return (
    <div>
    {categories && categories.length > 0 && categories.map((category) => (
      // <CategoryItem key={category.id} category={category} />
      <Link key={CategoryItem} to={`/directory/${category}`}>category</Link>

    ))
    }
    </div>
  );
}

Directory.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default Directory;
