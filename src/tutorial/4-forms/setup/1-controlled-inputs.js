import React, { useState } from "react";

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsError(false);
    if (!firstName) {
      setIsError(true);
      console.log("Empty Values");
      return;
    }
    if (!email) {
      setIsError(true);
      console.log("Empty Values");
      return;
    }
    const person = { id: new Date().getTime().toString(), firstName, email };
    setPeople((people) => [...people, person]);
    setFirstName("");
    setEmail("");
    console.log(people);
  };

  const firstNameFuncion = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="mail"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {isError && (
            <p style={{ color: "red", margin: 0 }}>Please Fill up the form</p>
          )}
          <button type="submit" onClick={handleSubmitForm}>
            Add Person
          </button>
        </form>
      </article>
      {people.map((person, index) => {
        const { id, firstName, email } = person;
        return (
          <div key={id} className="item">
            <h4>{index + 1}</h4>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default InputForm;
