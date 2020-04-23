import React from "react";
import ReactDOM from "react-dom";

function CARD(props){
  return <div>
  <h2>{props.name}</h2>
  <img
    src={props.image}
    alt="avatar_img"
  />
  <p>{props.tel}</p>
  <p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

      
      <CARD name="Jack Bauer" image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel="+987 654 321" email="jack@nowhere.com"/>
      <CARD name="Jack Bauer" image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel="+987 654 321" email="jack@nowhere.com"/>
    </div>,
  document.getElementById("root")
);
