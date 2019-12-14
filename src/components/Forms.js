import React from 'react'



export default function Forms(props) {
    const handleClick = e => {
    e.preventDefault();
   props.scroll();
}

    return (
        
        <div>
        <form onSubmit={handleClick}>
         <input name="Seach" value={props.query} type="text" placeholder="search..." onChange={props.setQuery} />
            <br />
            <label>Color:  <select name="colors" value="" onChange="">
            <option value="Red">Red</option>
            <option value="Green">{props.value}</option>
            <option value="Blue">blue</option>
          </select> </label> <br />
                        <input
                    type="number"
                    name="quantity"
                    pattern="[0-9]*"
                    placeholder="results"
                    min="1" max="20"
                    onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}/>
          <br /> <label> <input name="imgType" value="Photo" type="radio" checked={props.Image_type === "Photo" } onChange={props.setImage_type} /> Photo </label>
          <br /> <label> <input name="imgType" value="Illustration" type="radio" checked={props.Image_type === "Illustration" } onChange={props.setImage_type} /> Illustration </label>
          <br /> <label> <input name="imgType" value="Vector" type="radio" checked={props.Image_type === "Vector" } onChange={props.setImage_type} /> Vector </label>
          <br />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
        
    )
}
