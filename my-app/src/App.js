import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

// const style = {
//   table: {
//     borderCollapse: "collapse",
//   },
//   tableCell: {
//     border: "1px solid gray",
//     margin: 0,
//     padding: "5px 10px",
//     width: "max-content",
//     minWidth: "150px",
//   },
//   form: {
//     container: {
//       padding: "20px",
//       border: "1px solid #F0F8FF",
//       borderRadius: "15px",
//       width: "max-content",
//       marginBottom: "40px",
//     },
//     inputs: {
//       marginBottom: "5px",
//     },
//     submitBtn: {
//       marginTop: "10px",
//       padding: "10px 15px",
//       border: "none",
//       backgroundColor: "lightseagreen",
//       fontSize: "14px",
//       borderRadius: "5px",
//     },
//   },
// };

// function PhoneBookForm({ addEntryToPhoneBook }) {
//   const [contacts, setContacts] = useState({ first: "", last: "", phone: "" });
//   const [first, setFirst] = useState("");
//   const [last, setLast] = useState("");
//   const [phone, setPhone] = useState("");

//   useEffect(() => {
//     const contacts = localStorage.getItem(contacts);
//     const parsedContacts = JSON.parse(contacts);
//     setContacts(parsedContacts);
//   }, []);
//   useEffect(() => {
//     window.localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   const handleChange = (event) => {
//     const { first, last, phone } = event.currentTarget;
//     switch (name) {
//       case "first":
//         setFirst(value);
//         break;
//       case "last":
//         setLast(value);
//         break;
//       case "phone":
//         setPhone(value);
//         break;
//       default:
//         break;
//     }
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const contact = {
//       first,
//       last,
//       phone,
//     };
//     setContacts((state) => {
//       [...state, contact];
//     });
//     // console.log(contacts);
//   };
//   return (
//     <form onSubmit={handleSubmit} style={style.form.container}>
//       <label>First name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className="userFirstname"
//         name="first"
//         type="text"
//         value={first}
//         onChange={handleChange}
//       />
//       <br />
//       <label>Last name:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className="userLastname"
//         name="last"
//         type="text"
//         value={last}
//         onChange={handleChange}
//       />
//       <br />
//       <label>Phone:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className="userPhone"
//         name="phone"
//         type="text"
//         value={phone}
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         style={style.form.submitBtn}
//         className="submitButton"
//         type="submit"
//         value="Add User"
//       />
//     </form>
//   );
// }

// function InformationTable({ first, last, phone }) {
//   return (
//     <table style={style.table} className="informationTable">
//       <thead>
//         <tr>
//           <th style={style.tableCell}>First name</th>
//           <ul>
//             <li>{first}</li>
//           </ul>
//           <th style={style.tableCell}>Last name</th>
//           <ul>
//             <li>{last}</li>}
//           </ul>
//           <th style={style.tableCell}>Phone</th>
//           <ul>
//             <li>{phone}</li>}
//           </ul>
//         </tr>
//       </thead>
//     </table>
//   );
// }

// function Application(props) {
//   return (
//     <section>
//       <PhoneBookForm />
//       <InformationTable />
//     </section>
//   );
// }

// ReactDOM.render(<Application />, document.getElementById("root"));

// React Phone Book
// We provided some simple React template code.Your goal is to create
// a simple form at the top that allows the user to enter in a first name,
//   last name, and phone number and there should be a submit button.
// Once the submit button is pressed, the information should be
// displayed in a list below(automatically sorted by last name)
// along with all the previous information that was entered.
// This way the application can function as a simple phone book.
// When your application loads, the input fields(not the phone book list)
//  should be prepopulated with the following values already:

// First name = Coder
// Last name = Byte
// Phone = 8885559999

// You are free to add classes and styles, but make sure you leave
// the element ID's as they are. Submit your code once it is complete
// and our system will validate your output.
// Browse Resources
// Search for any help or documentation you might need
// for this problem.For example: array indexing, Ruby hash tables, etc.

//////////////////////// task 2
// function CaesarCipher(str, num) {
//   // code goes here
//   return str;
// }

// // keep this function call here
// console.log(CaesarCipher(readline()));

// Caesar Cipher
// Have the function CaesarCipher(str, num) take the str parameter and
//  perform a Caesar Cipher shift on it using the num parameter
//   as the shifting number.A Caesar Cipher works by shifting
//   each letter in the string N places in the
// alphabet(in this case N will be num).
//   Punctuation, spaces, and capitalization should remain intact.
//   For example if the string is "Caesar Cipher"
//   and num is 2 the output should be "Ecguct Ekrjgt".
// Examples
// Input: "Hello" & num = 4
// Output: Lipps
// Input: "abc" & num = 0
// Output: abc
// Browse Resources
// Search for any help or documentation you might need
// for this problem.For example: array indexing, Ruby hash tables, etc.
