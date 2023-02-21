import {Recipe} from '../Recipe/Recipe'
import PropTypes from 'prop-types';
import { List } from './RecipeList.styled';

export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <li key={item.id}> 
        <Recipe item={item}/>
        </li>
      ))}
    </List>
  );
};

RecipeList.propTypes={
items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired})).isRequired
}
