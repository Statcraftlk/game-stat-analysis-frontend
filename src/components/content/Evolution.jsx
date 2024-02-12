import { Grid } from "@mui/material";

import Champion from "../Card";
import cards from "../../games/clash-royale/data.json";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../App";
import { useNavigate } from "react-router-dom";

const EvolutionCards = () => {
  const { search } = useContext(SearchContext);
  const navigate = useNavigate();
  const evoCards = cards.items.filter(
    (card) =>
      card.iconUrls.evolutionMedium !== null &&
      card.iconUrls.evolutionMedium !== undefined
  );
  useEffect(() => {
    if (search.search && search.search.name) {
      navigate("/all-cards");
    }
  });

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
        {evoCards.map((card) => {
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
    </>
  );
};

export default EvolutionCards;
