import './style.scss';

const Image = ({ image, text}) => {
  return (
    <div className='img-banniere'>
      <p className='img-text'>{text ? text : ""}</p>
      <img src={image} alt="img banniere" className='img-background' />
    </div>
  )
}

export default Image;