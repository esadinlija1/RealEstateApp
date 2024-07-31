import "./searchBar.scss";
import Search from "./search.png"
import {useState} from "react";


function SearchBar(){
    const [query,setQuery]=useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0
    });

    const swicthType=(type)=>{
         setQuery((prev)=>({
            ...prev,
            type
         }))
    }
    return(
        <div className="searchBar">
            <div className="types">
                <button className={query.type==="buy" ? "active" : ""} onClick={()=>swicthType("buy")}>Buy</button>
                <button className={query.type==="rent" ? "active" : ""} onClick={()=>swicthType("rent")}>Rent</button>
            </div>
            <form>
                <input type="text" name="location" placeholder="City Location"/>
                <input type="number" name="minPrice" min={0} max={1000000000} placeholder="Min Price"/>
                <input type="number" name="maxPrice" min={0} max={1000000000} placeholder="Max Price"/>
                <button>
                    <img src={Search} alt="" />
                </button>
            </form>
                
            
                
         </div>
    )
}

export default SearchBar;
