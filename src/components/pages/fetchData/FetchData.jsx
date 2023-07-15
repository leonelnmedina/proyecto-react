import { useState, useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let data = fetch("https://jsonplaceholder.typicode.com/users");

    data
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
  }, []);

  let newUser = {
    id: 1,
    name: "Leonel",
    username: "Medina",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const createUser = () => {
    let data = fetch("https://jsonplaceholder.typicode.com/users");
    method: "POST";
  };
  return (
    <div>
      <h1>Fetching de datos</h1>
      <button onClick={createUser}>Crear usuario</button>
    </div>
  );
};

export default FetchData;
