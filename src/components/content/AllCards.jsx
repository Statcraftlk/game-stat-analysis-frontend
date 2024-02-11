import { Grid, Pagination, Stack } from "@mui/material";
import { useState, useContext } from "react";
import Champion from "../Card";
import cards from "../../games/clash-royale/data.json";
import { SearchContext } from "../../App";

const sortByEvolution = (a, b) => {
  if (a.iconUrls.evolutionMedium && !b.iconUrls.evolutionMedium) {
    return -1;
  } else if (!a.iconUrls.evolutionMedium && b.iconUrls.evolutionMedium) {
    return 1;
  } else {
    return 0;
  }
};

if (!cards || !Array.isArray(cards.items)) {
  console.error(
    "Data is not in the expected format. Expected an object with an 'items' array."
  );
}

const itemsArray = cards.items;
const sortedCards = itemsArray.sort(sortByEvolution);

const AllCards = () => {
  const { search } = useContext(SearchContext);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8);
  const changePage = (page) => {
    setStartIndex((page - 1) * 8);
    setEndIndex(page * 8);
  };
  const filteredCards =
    search && search.search.name
      ? sortedCards.filter((card) => card.name.includes(search.search.name))
      : sortedCards;
  return (
    <>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={12}>
        {filteredCards.slice(startIndex, endIndex).map((card) => {
          return (
            <Grid key={card.name} item xs={12} sm={6} md={3}>
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
          count={Math.ceil(filteredCards.length / 8)}
          variant="outlined"
          onChange={(e, page) => changePage(page)}
        />
      </Stack>
    </>
  );
};

export default AllCards;
