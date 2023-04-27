import React, { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import { TwitsCard } from "../TwitsCard/TwitsCard";
import { List } from "./TwitsCardsList.styled";
import db from "../../db/db.json";

export const TwitsCardList = () => {
  const [users, setUsers] = useState(getLocalStorage("localStorageData") || db);
  const status = "";

  useEffect(() => {
    setLocalStorage(users, "localStorageData");
  }, [users]);

  const changeUserInfo = (id) => {
    for (const user of users) {
      if (user.id === id) {
        const index = users.indexOf(user);
        if (user.status === "follow") {
          return setUsers((previousState) => {
            previousState[index].followers += 1;
            previousState[index].status = "following";
            return [...previousState];
          });
        }
        if (user.status === "following") {
          return setUsers((previousState) => {
            previousState[index].followers -= 1;
            previousState[index].status = "follow";
            return [...previousState];
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
            status={status}
          />
        );
      })}
    </List>
  );
};
