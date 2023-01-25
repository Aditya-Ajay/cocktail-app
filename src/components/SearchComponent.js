import React from "react";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SearchfetchItem } from "../features/SearchSlice";
const SearchComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SearchfetchItem());
  }, []);
  return <Box className="box">SEARCH</Box>;
};

export default SearchComponent;
