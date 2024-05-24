import "./Home.css"; // Import your CSS file for styling
import Note from "./Note";
import AddNote from "./AddNote";

const Home = () => {

  return (
    <div className="home_parent">
      <div className="container_addnote">
      <h2>Add new Note</h2>
      <AddNote></AddNote>
      </div>
      <div>
        <Note></Note>
      </div>
      
      </div>
  );
};

export default Home;
