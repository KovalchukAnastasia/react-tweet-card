import React, { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import { TwitsCard } from "../TwitsCard/TwitsCard";
import { List } from "./TwitsCardsList.styled";
import db from "../../db/db.json";

export const TwitsCardList = () => {
  const [users, setUsers] = useState(getLocalStorage("localStorageData") || db);
  //   const status = "follow";

  useEffect(() => {
    setLocalStorage(users, "localStorageData");
  }, [users]);

  const changeUserInfo = (id) => {
    for (const user of users) {
      if (user.id === id) {
        // console.log(user.followers);

        const index = users.indexOf(user);
        if (user.status === "follow") {
          setUsers((prevState) => {
            console.log(prevState[index].followers);
            prevState[index].followers += 1;
            prevState[index].status = "following";
            return [...prevState];
          });
        } else {
          setUsers((prevState) => {
            prevState[index].followers -= 1;
            prevState[index].status = "follow";
            return [...prevState];
          });
        }
      }
    }
  };
  return (
    <List>
      {users.map((user) => {
        return (
          <TwitsCard
            key={user.id}
            user={user}
            changeUserInfo={changeUserInfo}
            status={user.status}
          />
        );
      })}
    </List>
  );
};
