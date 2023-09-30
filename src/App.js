import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import CustomSavedPostContext from "./postContext";

export default function App() {
  return (
    <CustomSavedPostContext>
    <div className="App">
      <Navbar />
      <List />
    </div>
    </CustomSavedPostContext>
  );
}
