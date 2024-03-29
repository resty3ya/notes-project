import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    console.log(error);
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not-found" />;<h3>Ohh! page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Error Page</h1>
      <Link to="/">back home</Link>
    </Wrapper>
  );
};
export default Error;
