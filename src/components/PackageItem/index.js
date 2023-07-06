import './index.css'

const PackageItem = props => {
  const {packageDetails} = props
  const {name, imageUrl, description} = packageDetails

  return (
    <li className="list-item">
      <img className="thumbnail-image" src={imageUrl} alt={name} />
      <div className="details-container">
        <h3 className="place-name">{name}</h3>
        <p className="place-description">{description}</p>
      </div>
    </li>
  )
}
export default PackageItem
