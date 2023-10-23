import { useAllNotesContext } from "../pages/Note/AllNotes";
import Notes from "./Notes";
import Wrapper from "../assets/wrappers/JobsContainer";

const NotesContainer = () => {
  const { data1 } = useAllNotesContext();
  const { data2 } = useAllNotesContext();

  console.log(data1.data);
  console.log(data2.data);

  return (
    <Wrapper>
      <div className="jobs">{console.log(data1.data._id)}</div>
    </Wrapper>
  );
};
export default NotesContainer;
