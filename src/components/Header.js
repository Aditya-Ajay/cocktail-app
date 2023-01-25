import React from "react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
const Header = () => {
  const [input, setInput] = useState("");
  const cocktail = useSelector((state) => state.search.cocktail.drinks);
  console.log(cocktail);
  return (
    <div>
      <nav className="nav">
        <img
          className="nav-img"
          src="https://img.freepik.com/free-vector/wine-bottle-template-with-glass-red-wine_1284-11798.jpg?w=1380&t=st=1674522328~exp=1674522928~hmac=09dad29af588fff7cb80024e4a2548d73ad9332e7c721e7d69f3082857147b8d"
          alt=""
        />
        <Input
          width="90%"
          className="search-input"
          variant="filled"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></Input>
        <Link to={`/search/${input}`} style={{ color: "white" }}>
          SEARCH
        </Link>
      </nav>

      <Text className="header-text">WELCOME TO THE COCKTAIL STORE </Text>
    </div>
  );
};

export default Header;
