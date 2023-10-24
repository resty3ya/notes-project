import Notes from "./Notes";
import { useAllNotesContext } from "../pages/Note/AllNotes";
import Wrapper from "../assets/wrappers/JobsContainer";

const NotesContainer = () => {
  const { data, userInfo } = useAllNotesContext();

  //destructure again
  const { user } = userInfo;
  const { notes } = data;

  return (
    <Wrapper>
      <div className="jobs">
        {notes.map((note) => {
          return <Notes key={note._id} {...note} />;
        })}
      </div>
    </Wrapper>
  );
};
export default NotesContainer;
