import React from "react";
// import { pizzas } from "../staticdata";
import { Box, Grid, Spinner } from "@chakra-ui/react";
import PizzaComponent from "./PizzaComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArrayData } from "../StoreFolder/arraySlice";

const HomeScreen = () => {
  // const { pizzas } = PizzaState();
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.array.data);

  const loadingStatus = useSelector((state) => {
    return state.array.loadingStatus;
  });

  //userGlobal State
  const userInfo = useSelector((state) => state.userState.userInfo);

  console.log(`get derived`, { pizzas, loadingStatus, userInfo });
  useEffect(() => {
    // dispatch(updateLoading(true));
    // setTimeout(() => {
    // }, 2000);
    dispatch(fetchArrayData());
  }, [dispatch]);
  return (
    <Grid
      mt={"20px"}
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {!loadingStatus && pizzas ? (
        pizzas.map((pizza, idx) => {
          return <PizzaComponent key={idx} pizza={pizza} />;
        })
      ) : (
        <Box display={"flex"} justifyContent={"center"}>
          Loading..... <Spinner size="lg" />
        </Box>
      )}
    </Grid>
  );
};
export default HomeScreen;
