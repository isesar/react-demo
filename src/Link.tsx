import React from "react";
import "./Link.css";
interface LinkProps {
  URL: string;
  name: string;
}
const Link: React.FC<LinkProps> = (props) => {
  return (
    <div className="row">
      <a href={props.URL} rel="noreferrer" target="_blank" className="abutton">
        {props.name}
      </a>
    </div>
  );
};

export default Link;
