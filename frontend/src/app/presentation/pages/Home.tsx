import { Box, Stack } from '@mui/material';
import { useAppSelector } from '../../application/hooks';
import { CardsDiplayMap } from '../components/CardsDiplayMap';
import { PageTitle } from '../components/PageTitle';
import { Text } from '../common/Text';
import { theme } from '../../../styles/theme';

export const Home = () => {
  const { coffees } = useAppSelector((state) => state.coffeeSlice);
  const { teas } = useAppSelector((state) => state.teaSlice);
  const { coffeeOrTea } = useAppSelector((state) => state.coffeeOrTeaSlice);

  return (
    <Box>
      <PageTitle />
      {coffeeOrTea === 'coffee' && <CardsDiplayMap data={coffees} />}
      {coffeeOrTea === 'tea' && <CardsDiplayMap data={teas} />}
      <Stack flexDirection="row" justifyContent="center" marginBottom="5rem">
        <Text
          fontSize={theme.textSizes.small}
          color={theme.colors.auxiliar2}
          fontWeight="400"
          textAlign="center"
          marginRight="0.5rem"
        >
          Made with
        </Text>
        <img src="/static/ginger-cat-690 1.png" width="36px" height="17px" />
      </Stack>
    </Box>
  );
};
