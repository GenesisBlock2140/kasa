import "./style.scss";
const ProfilIcon = ({firstname, lastname}) => {
  return (
    <>
      <div className="profilicon-box">
        <div>
          <p>{firstname}</p>
          <p>{lastname}</p>
        </div>
        <div>
          <div />
        </div>
      </div>
    </>
  )
}

export default ProfilIcon;