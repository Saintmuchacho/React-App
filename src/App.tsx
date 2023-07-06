import { useEffect} from "react";

const App = () => {
  const connect = () => console.log("connecting");
  const disconnect = () => console.log("disconnecting");
  // effectHook clean up function
  useEffect(() => {
    // setup code
    connect();
    // clean up code
    return () => disconnect();
  });
  return <div></div>;
};

export default App;
