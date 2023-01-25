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

  const strInstructions =
    cocktail && cocktail[0] && cocktail[0].strInstructions;
  const image = cocktail && cocktail[0] && cocktail[0].strDrinkThumb;
  const type = cocktail && cocktail[0] && cocktail[0].strAlcoholic;
  const category = cocktail && cocktail[0] && cocktail[0].strCategory;
  const glass = cocktail && cocktail[0] && cocktail[0].strGlass;
  const strMeasure1 = cocktail && cocktail[0] && cocktail[0].strMeasure1;

  const status = useSelector((state) => state?.SingleCocktail?.status);
  const dispatch = useDispatch();
  console.log(cocktail, status);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleItem({ id }));
  }, []);
  if (!cocktail || status === "PENDING") {
    return <div>LOADING...</div>;
  }
  if (status === "idle") {
    console.log("error");
  }
  return (
    <Box className="box">
      <div className="single-card">
        <Text fontSize="4xl" color="white">
          {category}
        </Text>
        <img src={image} alt="" className="img-single" />
        <Text className="single-type">Type : {type}</Text>
        <Text color="white">
          MEASURE <br />
          {strMeasure1} <br />
          {/* {strMeasure2} <br />
          {strMeasure3} <br /> */}
        </Text>
        <Text color="white" className="single-type">
          GLASS USED : {glass}
        </Text>
        <Text color="white" className="instruction">
          INSTRUCTIONS : {strInstructions.slice(0, 40)}
        </Text>
      </div>
    </Box>
  );
};

export default CocktailCard;
