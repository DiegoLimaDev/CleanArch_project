import { Grid } from '@mui/material';
import { Coffee } from '../../domain/entities/coffee';
import { Tea } from '../../domain/entities/tea';
import { CustomCard } from './Card';

type types = {
  data: Coffee[] | Tea[];
};

export const CardsDiplayMap = (props: types) => {
  return (
    <Grid
      container
      justifyContent="center"
      margin="5rem 0"
      padding="0 3rem"
      gap={2}
    >
      {props.data.map((card) => {
        return (
          <Grid item key={card.title}>
            <CustomCard data={card} />
          </Grid>
        );
      })}
    </Grid>
  );
};
