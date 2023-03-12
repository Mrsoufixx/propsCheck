import PropTypes from "prop-types";

import SideBar from "./SideBar";
import Main from "./Main";

function Profile({ children, fullName, biographie, profession }) {
  //Style
  const flexRowStart = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px 30px",
    marginTop:"20px"
  };

  //function
  const handleClick = () => {
    alert(fullName);
  };

  //return
  return (
    <div style={flexRowStart}>
      <SideBar fullName={fullName} children={children} handleClick={handleClick}/>
      <Main biographie={biographie} profession={profession}/>
    </div>
  );
}
Profile.defaultProps = {
  fullName: "Your Name",
  biographie: "write you biographie here",
  profession: "write you profession here",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  biographie: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
