import axios from "axios";
import { useEffect, useState } from "react";
// hapa na define interface iliniweze kuaccess
// vizuri user object ya kwa fake backend ya
// json
interface Users {
  //hii ni kwa ajiri ya autoComplition and
  // type safety
  id: number;
  name: string;
  email: string;
}
const App = ({}) => {
  // useState kwa ajiri ya kuonyesha error message
  const [error, setError] = useState("");
  // weka useState kwa ajiri ya kustore our users
  const [users, setUsers] = useState<Users[]>([]);
  // effectHook fetching data from backend
  useEffect(() => {
    // natumia axios kwa ajiri ya kusend request
    // kwenye server
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/musers")
      .then((res) => setUsers(res.data)) //a promise
      .catch((err) => {
        setError(err.message);
      }); //this function will be called when something goes wrong
    //while fetching the data
  }, []);
  return (
    <>
      {/* displaying error */}
      {error && <p className="text-danger">{error}</p>}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.email}</li>
            // user.(either email/name)
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
