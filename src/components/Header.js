import React from "react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <img
          className="nav-img"
          src="https://img.freepik.com/free-vector/wine-bottle-template-with-glass-red-wine_1284-11798.jpg?w=1380&t=st=1674522328~exp=1674522928~hmac=09dad29af588fff7cb80024e4a2548d73ad9332e7c721e7d69f3082857147b8d"
          alt=""
        />
        <Input width="80%" className="search-input" variant="filled" />
      </nav>

      <Text className="header-text">WELCOME TO THE COCKTAIL STORE </Text>
    </div>
  );
};

export default Header;
