import Notes from "./Notes";
import { useAllNotesContext } from "../pages/Note/AllNotes";
import Wrapper from "../assets/wrappers/JobsContainer";

const NotesContainer = () => {
  const { notes, user } = useAllNotesContext();

  //destructure
  // const { notes } = data; //OLD
  const { data: notesData } = notes;

  const notesDataForMapping = notesData.notes;

  const notesDetails =
    notes === null ? (
      <Wrapper>
        <p>No Notes yet</p>
      </Wrapper>
    ) : (
      <Wrapper>
        <div className="jobs">
          {notesDataForMapping.map((note) => {
            return <Notes key={note._id} {...note} />;
          })}
        </div>
      </Wrapper>
    );

  return notesDetails;
};
export default NotesContainer;
