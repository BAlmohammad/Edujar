import "./Footer.css"



const Footer = ({edu,jar , title ,copy,quick1,quick2,ti,enter,subs}) => {
  return (
    <div className="footer">
        <div className="leftdiv">
            <h2 className="edu">{edu}<span>{jar}</span></h2>
            <p className="jar">{title}</p>
            <h4 className="copy">{copy}</h4>
        </div>
        <div className="middlediv">
        <div className="middle">
{quick1.map((it,index)=>{return(
    <div key={index}>
    <h2 className="links">{it.title}</h2>
    <p className="legal">{it.content}</p>
    </div>
)})}
</div>
<div className="middle">
{quick2.map((it,index)=>{return(
    <div key={index}>
    <h2 className="links">{it.title}</h2>
    <p className="legal">{it.content}</p>
    </div>
)})}
</div>

        </div>

        <div className="rightdiv">
            <h2 className="ti">{ti}</h2>
            <input  placeholder={enter} type="text" className="enter" /> 
            <p className="subs">{subs}</p>
        </div>
    </div>
    
  )
}

export default Footer