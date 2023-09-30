// create post context here
import { createContext, useContext, useState } from "react";
const postContext = createContext();
// Create custom hook that returns context value here
function useValue() {
  const value = useContext(postContext);
  return value;
}

// create a custom saved post provider here with add and reset functions
function CustomSavedPostContext({ children }) {
  const [savedPosts, setSavedPosts] = useState([]);

  const [showSavedList, setShowSavedList] = useState(false);

  const add = () => {
    
    setShowSavedList(!showSavedList)
  };
  const reset = () => {
    setSavedPosts([]);
  };
  const addPost=(post)=>{
 setSavedPosts([post,...savedPosts])
  }
  return (
    <postContext.Provider value={{ reset, savedPosts, showSavedList,add,addPost}}>
      {children}
    </postContext.Provider>
  );
}
export{useValue}
export default CustomSavedPostContext
