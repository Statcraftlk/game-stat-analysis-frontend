import { Grid, Pagination, Stack } from "@mui/material";
import { useState } from "react";
import Champion from "../Card";
import cards from "../../data.json";

const AllCards = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);
  const changePage = (page) => {
    console.log(page);
    setStartIndex((page - 1) * 8);
    setEndIndex(page * 8);
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 16 }}
      >
        {cards.items.slice(startIndex, endIndex).map((card) => {
          return (
            <Grid key={card.name} item xs={2} sm={4} md={4}>
              <Champion
                name={card.name}
                rarity={card.rarity}
                img={card.iconUrls.medium}
                imgEvo={card.iconUrls.evolutionMedium}
                icon={card.iconUrls.medium}
                maxlevel={card.maxLevel}
                evolevel={card.maxEvolutionLevel}
                elixr={card.elixirCost}
              />
            </Grid>
          );
        })}
      </Grid>
      <Stack spacing={2} sx={{ float: "right" }} padding={2}>
        <Pagination
          count={Math.ceil(cards.items.length / 8)}
          variant="outlined"
          onChange={(e, page) => changePage(page)}
        />
      </Stack>
    </>
  );
};

export default AllCards;
