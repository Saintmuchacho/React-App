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
  // weka useState kwa ajiri ya kustore our users
  const [users, setUsers] = useState<Users[]>([]);
  // effectHook fetching data from backend
  useEffect(() => {
    // natumia axios kwa ajiri ya kusend request
    // kwenye server
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data)); //a promise
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
          // user.(either email/name)
        ))}
      </ul>
    </div>
  );
};

export default App;
