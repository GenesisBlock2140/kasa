import "./style.scss";
const Badge = ({text}) => {
  return (
    <>
      <div className="badge-box">
        <p>{text}</p>
      </div>
    </>
  )
}

export default Badge;