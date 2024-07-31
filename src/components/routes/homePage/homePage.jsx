import "./homePage.scss";
import Buildings from "./buildings.jpg";
import SearchBar from "../../searchBar/searchBar";
import House from "./house.jpg";
import Apartment from "./apartment.jpg";
import OfficeSpace from "./officespace.png";


function HomePage(){

    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1>
                    
                      Find Real Estate & Get Your Dream Place 
                    
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut tellus suscipit, semper urna sed, sollicitudin lorem.    
                     Quisque a eros euismod, tempus eros a, posuere dolor. Maecenas ultrices vulputate consequat. 
                     Nulla facilisis tincidunt lectus vel vulputate. Morbi nec felis euismod, scelerisque lectus sed, commodo ante. Quisque dapibus feugiat massa. Mauris imperdiet, leo a aliquam aliquet, lectus nunc accumsan massa, nec suscipit ipsum nulla vitae velit. Integer eget orci gravida, euismod justo sit amet, rhoncus mi.</p>
                     <SearchBar />
                </div>
                    <h1>We offer you</h1>
                    <h2>Modern houses</h2>
                    <div className="properties">
                        <div className="property">
                            <div className="picture">
                                <img src={House} alt="" />
                            </div>
                            <div className="title">House1</div>
                            <div className="attributes">
                                <div className="row">
                                    <div className="column">Price: 500000 BAM</div>
                                    <div className="column">Location: 2017</div>
                                </div>
                                <div className="row">
                                    <div className="column">Location: Address1</div>
                                    <div className="column">Size: 300m2</div>
                                </div>
                            </div>
                            <div className="button-container">
                                <button>See more</button>
                            </div>
                        </div>
                        
                    </div>
                    <h2>Penthouse apartments</h2>
                    
                    <h2>Office spaces for your company</h2>
                 
            
            </div>
            <div className="imageContainer">
                <img src={Buildings} alt="" />
            </div>
        </div>
        
    )

}

export default HomePage;