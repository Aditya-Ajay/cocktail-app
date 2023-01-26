import React from "react";
import { Text } from "@chakra-ui/react";
import { searchfetchItem } from "../features/CocktailSlice";
import { useDispatch } from "react-redux";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const searchref = useRef();

  const handleChange = () => {
    const search = searchref.current.value;
    dispatch(searchfetchItem({ search }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <nav className="nav">
        <img
          className="nav-img"
          src="https://img.freepik.com/free-vector/wine-bottle-template-with-glass-red-wine_1284-11798.jpg?w=1380&t=st=1674522328~exp=1674522928~hmac=09dad29af588fff7cb80024e4a2548d73ad9332e7c721e7d69f3082857147b8d"
          alt=""
        />

        <Input
          type="text"
          width="90%"
          className="search-input"
          variant="filled"
          ref={searchref}
          onChange={handleChange}
          style={{ color: "black" }}
        />
      </nav>

      <Text className="header-text">WELCOME TO THE COCKTAIL STORE </Text>
    </div>
  );
};

export default Header;
