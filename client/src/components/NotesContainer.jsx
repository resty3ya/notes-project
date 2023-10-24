import Notes from "./Notes";
import { useAllNotesContext } from "../pages/Note/AllNotes";
import Wrapper from "../assets/wrappers/JobsContainer";

const NotesContainer = () => {
  const { data, userInfo } = useAllNotesContext();

  console.log(data);
  console.log(userInfo);

  return (
    <Wrapper>
      <div className="jobs">{}</div>
    </Wrapper>
  );
};
export default NotesContainer;
