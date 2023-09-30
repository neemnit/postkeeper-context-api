import { useState } from "react";
import { useValue } from "./postContext";

export const Navbar = () => {
  // remove this and get the value from context
  const{reset, savedPosts, showSavedList,add}=useValue()
  

  return (
    <div className="navbar">
      <span onClick={add}>
        Saved Posts: {/* show length of saved posts here */ savedPosts.length}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      <button onClick={reset}>Reset</button>
    </div>
  );
};
