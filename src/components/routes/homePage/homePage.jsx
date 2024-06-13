import "./homePage.scss";
import Buildings from "./buildings.jpg";


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
                </div>
            </div>
            <div className="imageContainer">
                <img src={Buildings} alt="" />
            </div>
        </div>
        
    )

}

export default HomePage;