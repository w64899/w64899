import React from "react";
import './style.scss';

const Filter=(props)=>{
    return(
        <div className="filter">
            <div className="filter__rating">
                <h6 className="span-2">Ratings</h6>
                <div className='filter__rating-wrapper'>
                    <div>
                        <input type="checkbox" className="filter__input" name="four" value="4" onClick={()=>props.clickHandle(this)}></input>
                        <label htmlFor="four" className="filter__label">4 and above</label>
                    </div>
                    <div>
                        <input type="checkbox" className="filter__input" name="three" value="3" onClick={()=>props.clickHandle(this)}></input>
                        <label htmlFor="three" className="filter__label">between 3 and 4</label>
                    </div>
                    <div>
                        <input type="checkbox" className="filter__input" name="two" value="2" onClick={()=>props.clickHandle(this)}></input>
                        <label htmlFor="two" className="filter__label">between 2 and 3</label>
                    </div>
                    <div>
                        <input type="checkbox" className="filter__input" name="one" value="1" onClick={()=>props.clickHandle(this)}></input>
                        <label htmlFor="one" className="filter__label">between 1 and 2</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filter