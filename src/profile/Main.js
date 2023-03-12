

function Main({biographie,profession,}) {
    const title = { fontSize: "20px", color: "#6096B4" , borderBottom: "3px solid #BDCDD6",paddingBottom: "10px", width: "40%"}
    const para = {textIndent:"30px"}
    const mainStyle= {
        width:"70%",
        padding: "20px 30px",
        backgroundColor:"#EEE9DA",
        borderRadius: "5px"
    }
  return (
    <main style={mainStyle}>
        <div>
          <h4 style={title}>Biographie</h4>
          <p style={para}>{biographie}</p>
        </div>
        <div>
          <h4 style={title}>Profession</h4>
          <p style={para}>{profession}</p>
        </div>
      </main>
  )
}

export default Main