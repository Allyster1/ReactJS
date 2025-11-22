import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import UserList from "./components/UserList.jsx";
import Pagination from "./components/Pagination.jsx";
import { useState, useEffect } from "react";
import CreateUserModal from "./components/CreateUserModal.jsx";

function App() {
   const [users, setUsers] = useState([]);
   const [showCreateUser, setShowCreateUser] = useState(false);
   const [forceRefresh, setForceRefresh] = useState(false);

   useEffect(() => {
      fetch("http://localhost:3030/jsonstore/users")
         .then((res) => res.json())
         .then((data) => {
            setUsers(Object.values(data));
         })
         .catch((err) => alert(err.message));
   }, [forceRefresh]);

   const addUserClickHandler = () => {
      setShowCreateUser(true);
   };

   const closeUserModalHandler = () => {
      setShowCreateUser(false);
   };

   const addUserSubmitHander = (event) => {
      event.preventDefault();

      const fromData = new FormData(event.target);

      const { country, city, street, streetNumber, ...userData } = Object.fromEntries(fromData);
      userData.address = {
         country,
         city,
         street,
         streetNumber,
      };
      userData.createdAt = new Date().toISOString();

      fetch("http://localhost:3030/jsonstore/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(userData),
      })
         .then(() => setForceRefresh((state) => !state))
         .catch((err) => alert(err.message));
   };

   return (
      <div>
         <Header />

         <main className="main">
            <section className="card users-container">
               <Search />

               <UserList users={users} />

               <button className="btn-add btn" onClick={addUserClickHandler}>
                  Add new user
               </button>

               <Pagination />
            </section>

            {showCreateUser && <CreateUserModal onClose={closeUserModalHandler} onSubmit={addUserSubmitHander} />}
         </main>

         <Footer />
      </div>
   );
}

export default App;
