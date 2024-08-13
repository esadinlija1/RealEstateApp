import "./homePage.scss";
import Buildings from "./buildings.jpg";
import SearchBar from "../../searchBar/searchBar";
import House from "./house.jpg";
import Apartment from "./apartment.jpg";
import OfficeSpace from "./officespace.png";
import Card from "./card";


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
                    <div className="cards-container">
                      <Card title={"Modern Homes"} image={House}></Card>
                      <Card title={"Appartments"} image={Apartment}></Card>
                      <Card title={"Office Spaces"} image={OfficeSpace}></Card>
                    </div>
            </div>

                    
            
         
        </div>
        
    )

}

export default HomePage;