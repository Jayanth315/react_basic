import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/nayankumarrn21";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default User");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          setIsLoading(false);
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.json());
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error...</h2>;
  }
  if (user) return <h2>{user}</h2>;
};

export default MultipleReturns;
