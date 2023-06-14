import { Box } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { Text } from '../common/Text';
import { theme } from '../../../styles/theme';

const textData = {
  coffee: {
    title: 'Our beloved coffee',
    subtitle:
      'Hand-picked, made with love, curated, call it what you want. But we promise you, this will be the best coffe of your life.',
  },
  tea: {
    title: 'Just you, hot water and our tea',
    subtitle: 'No pesticies or artificial flavours. We promise!',
  },
};

export const PageTitle = () => {
  const { coffeeOrTea } = useAppSelector((state) => state.coffeeOrTeaSlice);
  return (
    <Box margin="2rem 0 2rem 6%" width="90%">
      <Text
        fontSize={theme.textSizes.extraLarge}
        color={theme.colors.title}
        fontWeight="600"
      >
        {coffeeOrTea === 'coffee' ? textData.coffee.title : textData.tea.title}
      </Text>
      <Text
        fontSize={theme.textSizes.medium2}
        color={theme.colors.subtitle}
        fontWeight="400"
      >
        {coffeeOrTea === 'coffee'
          ? textData.coffee.subtitle
          : textData.tea.subtitle}
      </Text>
    </Box>
  );
};
