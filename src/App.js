import './App.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PackageItem from './components/PackageItem'

// Replace your code here
class App extends Component {
  state = {packagesList: [], isLoading: true}

  componentDidMount() {
    this.getPackages()
  }

  getPackages = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(apiUrl)

    const data = await response.json()
    console.log(data)
    const updatedData = data.packages.map(eachPackage => ({
      id: eachPackage.id,
      name: eachPackage.name,
      imageUrl: eachPackage.image_url,
      description: eachPackage.description,
    }))

    if (response.ok === true) {
      this.setState({packagesList: updatedData, isLoading: false})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderPackagesView = () => {
    const {packagesList} = this.state

    return (
      <ul className="packages-list">
        {packagesList.map(each => (
          <PackageItem key={each.id} packageDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="packages-container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="line-rule" />
        {isLoading ? this.renderLoader() : this.renderPackagesView()}
      </div>
    )
  }
}

export default App
