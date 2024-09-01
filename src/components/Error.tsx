import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorData = useRouteError();
  console.log(errorData);
  return (
    <div>
      <h1>Oops !</h1>
      <h2>Something went wrong</h2>
      <h2>
        {errorData.status}:{errorData.statusText}
      </h2>
    </div>
  );
};

export default Error;
