import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();

  return (
    <div>
      <h1> Oops!!! </h1>
      <h2> Something went wrong </h2>
      <h2>
        {" "}
        {err?.status} : No such page as {err?.data?.split('"')[1]}{" "}
      </h2>
    </div>
  );
};

export default ErrorComponent;
