import React from 'react'
interface LinkProps{
    URL:string;
    name:string
}
const  Link: React.FC<LinkProps>=(props)=> {
    return (
        <div>
           <button><a href={props.URL} target="_blank">{props.name} </a></button> 
          
        </div>
    )
}

export default Link;
