import { useState, useEffect } from "react";

const UserComponent = () => {
  const [usersData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [sortedOrder, SetSortedOrder] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [sortType, setSortType] = useState("");
  const getUser = async () => {
    console.log("callingggggggggggg");
    const fetchUserData = await fetch("https://reqres.in/api/users?page=2");
    const userData = await fetchUserData.json();
    console.log(userData.data);
    setUserData(userData.data);
    setFilterData(userData.data);
  };
  useEffect(() => {
    getUser();
    console.log("effect");
  }, []);

  console.log(Object.keys(usersData));
  const deleteUser = (id) => {
    console.log("Calling delete function", id);
    const updatedUserList = usersData.filter((data) => {
      if (data.id !== id) {
        return data;
      }
    });
    // console.log(updatedUserList);
    setUserData(updatedUserList);
    setFilterData(updatedUserList);
  };
  const handleChange = (e) => {
    let text = e.target.value;
    const data = usersData.filter((item) => {
      return (
        item.last_name.toLowerCase().includes(text.toLowerCase()) ||
        item.first_name.toLowerCase().includes(text.toLowerCase())
      );
    });
    if (data) setFilterData(data);
  };
  const handleClick = (sortBy) => {
    console.log("clicked", filterData);
    if (!sortedOrder) {
      usersData.sort(
        ({ first_name: aFirstName }, { first_name: bFirstName }) => {
          const nameA = aFirstName.toUpperCase(); // ignore upper and lowercase
          const nameB = bFirstName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        }
      );
    } else {
      usersData.sort(
        ({ first_name: aFirstName }, { first_name: bFirstName }) => {
          const nameA = aFirstName.toUpperCase(); // ignore upper and lowercase
          const nameB = bFirstName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }

          // names must be equal
          return 0;
        }
      );
    }
    setFilterData([...usersData]);
  };
  const handleSort = () => {
    console.log("before", usersData);
    usersData.sort((a, b) => {
      if (["first_name", "last_name"].includes(sortBy)) {
        const nameA = a[sortBy]; // ignore upper and lowercase
        const nameB = b[sortBy]; // ignore upper and lowercase
        if (nameA < nameB) {
          return sortType == "asc" ? 1 : -1;
        }
        if (nameA > nameB) {
          return sortType == "asc" ? -1 : 1;
        }

        // names must be equal
        return 0;
      } else {
        if (a[sortBy] < b[sortBy]) {
          return sortType == "asc" ? -1 : 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return sortType == "asc" ? 1 : -1;
        }

        // names must be equal
        return 0;
      }
    });
    console.log("after", usersData);
    setFilterData([...usersData]);
  };
  useEffect(() => {
    handleSort();
  }, [sortBy, sortType]);
  return (
    <div>
      <h1>User Data</h1>
      <input
        type="search"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <select
        id="sortBy"
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value="select sort by option">Select sort by option</option>
        <option value="id">ID</option>
        <option value="first_name">FirstName</option>
        <option value="last_name">LastName</option>
        <option value="email">Email</option>
      </select>
      <select
        id="sortType"
        onChange={(e) => {
          setSortType(e.target.value);
        }}
      >
        <option value="select sort type">Select sort type</option>
        <option value="asc">Ascending</option>
        <option value="des">Desending</option>
      </select>
      <button onClick={handleSort}>Sort</button>
      {/* <button onClick={() => SetSortedOrder(!sortedOrder)}>
        {sortedOrder ? "DESC" : "ASCE"}
      </button> */}

      <table>
        <tr>
          <th>first Name</th>
          <th>Second Name</th>
        </tr>
        {filterData.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <button
                key={user.id}
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                delete
              </button>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UserComponent;
