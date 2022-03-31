import React, { useState } from "react";

const MultipleForm = () => {
  const [person, setPerson] = useState({ firstName: "", email: "" });
  const [people, setPeople] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleChangeOn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsError(false);
    const { firstName, email } = person;
    if (!(firstName && email)) {
      setIsError(true);
      return;
    }
    const newPerson = { ...person, id: new Date().getTime().toString() };
    setPeople((people) => [...people, newPerson]);
    setPerson({ firstName: "", email: "" });
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
              value={person.firstName}
              onChange={handleChangeOn}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="mail"
              name="email"
              id="email"
              value={person.email}
              onChange={handleChangeOn}
            />
          </div>
          {isError && (
            <p style={{ color: "red", margin: 0, fontSize: "12px" }}>
              Please Fill up the form
            </p>
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

export default MultipleForm;
