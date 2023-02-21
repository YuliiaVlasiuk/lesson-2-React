import { BsFillAlarmFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Image } from './Recipe.stiled';

export const Recipe = ({ item: { id,username, avatar, tag }, onDelete ,onSelect}) => {
  return (
    <div>
      <Image src={avatar} alt={username} width="240p" />
      <h2>{username}</h2>
      <BsFillAlarmFill />

      <div>
        <span>{tag} tag</span>
      </div>

     <div>
      <button onClick={()=>{onDelete(id)}}>Delete</button>
      <button onClick={()=>{onSelect(avatar)}}>Zoom</button>
    </div>


    </div>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelect:PropTypes.func.isRequired
};
