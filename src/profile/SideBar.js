import { BiShow } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function SideBar({fullName,children,handleClick}) {
    
    
    const flexColCenter = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1px",
        
      };
      const socialList={
        display:"flex",
        listStyle:"none",
        gap:"30px",
      }
      const profileProp={
        boxShadow: "#495e7c 4px 3px 7px 0px",
        padding: "5px 30px 20px",
        backgroundColor: "#EEE9DA",
        // maxWidth:"100%",
        borderRadius: "5px"
      }
      const icons={
        color: "#EEE9DA",
        fontSize:"2em"
      }
  return (
    <aside style={flexColCenter}>
        <div style={{...flexColCenter, ...profileProp}}>
        <h4>{children}</h4>
        <h4 style={{ fontSize: "20px", color: "#6096B4", margin: "2px 0" }}>
          {fullName}
        </h4>
        <span onClick={handleClick} style={{ cursor: "pointer" }}>
          <BiShow size={30} color="#6096B4"/>
        </span>
        </div>
        <ul style={socialList}>
            <li><a href="https://github.com/Mrsoufixx"><BsLinkedin style={icons}/></a> </li>
            <li><a href="https://www.linkedin.com/in/soufiane-korchi/"><BsGithub style={icons}/></a> </li>
        </ul>
        
      </aside>
  )
}

export default SideBar