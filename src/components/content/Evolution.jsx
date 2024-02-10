import { Grid } from "@mui/material";

import Champion from "../Card";
import cards from "../../data.json";

const EvolutionCards = () => {
  const evoCards = cards.items.filter(
    (card) =>
      card.iconUrls.evolutionMedium !== null &&
      card.iconUrls.evolutionMedium !== undefined
  );

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
