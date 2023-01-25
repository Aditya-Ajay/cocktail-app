import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchItem } from "../features/CocktailSlice";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Main = () => {
  const cocktail = useSelector((state) => state?.cocktail?.cocktail?.drinks);
  const status = useSelector((state) => state.cocktail.status);
  console.log(cocktail);
  console.log(status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItem());
  }, []);
  if (status === "PENDING") {
    return <div className="box">LOADING .....</div>;
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <Text color="white" fontSize="4xl" sx={{ ml: "1rem" }}>
          CHECKOUT SOME OF OUR LATEST COLLECTIONS
        </Text>
      </main>

      {status === "FULLFILED" ? (
        <div style={{ marginTop: "4rem", marginLeft: "1rem" }}>
          {cocktail?.map((e) => {
            //   console.log(e);
            return (
              <div className="main-div">
                <Link to={`/cocktail/${e.idDrink}`}>
                  <Card sx={{ width: "250px", height: "365px", mb: "1rem" }}>
                    <CardBody>
                      <h1 style={{ color: "red", marginBottom: "5%" }}>
                        CLICK TO KNOW MORE
                      </h1>
                      <img
                        src={e && e.strDrinkThumb}
                        alt="hi"
                        height="250px"
                        width="250px"
                      />

                      <Text sx={{ color: "red" }}>Ingredients</Text>
                      <Text>{e.strIngredient1}</Text>
                      <Text>{e.strIngredient2}</Text>
                      <Text>{e.strIngredient3}</Text>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        console.log("HELLO")
      )}
    </div>
  );
};

export default Main;
