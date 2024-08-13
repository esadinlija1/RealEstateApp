import "./card.scss";

function Card({title,image}){
    return(
        <div className="card">
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <p>{title}</p>
            <button>See more</button>
        </div>
    )

}

export default Card;