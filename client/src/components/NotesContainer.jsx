import Notes from "./Notes";
import { useAllNotesContext } from "../pages/Note/AllNotes";
import Wrapper from "../assets/wrappers/JobsContainer";

const NotesContainer = () => {
  const { data } = useAllNotesContext();

  //destructure
  const { notes } = data;

  const notesDetails =
    notes === null ? (
      <Wrapper>
        <p>No Notes yet</p>
      </Wrapper>
    ) : (
      <Wrapper>
        <div className="jobs">
          {notes.map((note) => {
            return <Notes key={note._id} {...note} />;
          })}
        </div>
      </Wrapper>
    );

  return notesDetails;
};
export default NotesContainer;
