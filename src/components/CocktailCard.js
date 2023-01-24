import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleItem } from "../features/SpecificChannnelCard";
import { Text } from "@chakra-ui/react";
const CocktailCard = () => {
  const cocktail = useSelector(
    (state) => state?.SingleCocktail?.singleCocktail?.drinks
  );
  console.log(cocktail);

  //   const strInstructions = cocktail[0].strInstructions;
  //   const image = cocktail[0].strDrinkThumb;
  //   const type = cocktail[0].strAlcoholic;
  //   const category = cocktail[0].strCategory;
  //   const glass = cocktail[0].strGlass;
  //   const strMeasure1 = cocktail[0].strMeasure1;

  const status = useSelector((state) => state?.SingleCocktail?.status);
  const dispatch = useDispatch();
  console.log(cocktail, status);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleItem({ id }));
  }, []);
  if (status === "PENDING") {
    return <div>LOADING...</div>;
  }
  if (status === "idle") {
    console.log("error");
  }
  return (
    <Box className="box">
      <div className="single-card">
        <Text fontSize="4xl" color="white">
          {/* {category} */}
        </Text>
        <img
          src=""
          //   src={image}
          alt=""
          width="60%"
          height="60%"
          style={{ marginTop: "10%" }}
        />
        {/* <Text sx={{ color: "white", mt: "10%" }}>Type : {type}</Text> */}
        <Text color="white">
          MEASURE <br />
          {/* {strMeasure1} <br /> */}
          {/* {strMeasure2} <br />
          {strMeasure3} <br /> */}
        </Text>
        <Text color="white" sx={{ mt: "10%" }}>
          {/* GLASS USED : {glass} */}
        </Text>
        <Text color="white" sx={{ mt: "10%", width: "90%" }}>
          {/* INSTRUCTIONS : {strInstructions} */}
        </Text>
      </div>
    </Box>
  );
};

export default CocktailCard;
