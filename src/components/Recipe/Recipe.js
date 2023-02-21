import { BsFillAlarmFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import { Image } from "./Recipe.stiled";

export const Recipe=({item:{username,avatar,tag}})=>{

return <div>
  <Image src={avatar} alt={username} width="240p"/>
  <h2>{username}</h2>
<BsFillAlarmFill/>

 <div>
    <span>{tag} tag</span>
 </div>

</div>


}


Recipe.propTypes={
item:PropTypes.shape({
    username:PropTypes.string,
    avatar:PropTypes.string,
    tag:PropTypes.string}).isRequired

}



