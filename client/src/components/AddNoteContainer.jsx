// import { AddNote } from "../pages";
import CreateNote from "../pages/Note/CreateNote";
import { useAllNotesContext } from "../pages/Note/AllNotes";
import Wrapper from "../assets/wrappers/JobsContainer";

const AddNoteContainer = () => {
  const { user } = useAllNotesContext();

  //destructure
  const { data: usersData } = user;

  return (
    <Wrapper>
      <div className="jobs">
        <CreateNote usersData={usersData} />;
      </div>
    </Wrapper>
  );
};
export default AddNoteContainer;
