import { Box, Card, CardContent, Stack } from '@mui/material';
import { Coffee } from '../../domain/entities/coffee';
import { Tea } from '../../domain/entities/tea';
import { Text } from '../common/Text';
import { theme } from '../../../styles/theme';
import { motion } from 'framer-motion';
import { framerVariants } from '../../../utils/framerMotionVariants';

type types = {
  data: Coffee | Tea;
};

export const CustomCard = (props: types) => {
  const checkType = () => {
    if (props.data.type.toLowerCase() === 'arabic')
      return theme.colors.thirdColor;
    if (props.data.type.toLowerCase() === 'robusta')
      return theme.colors.primaryColor;
  };

  return (
    <Box
      component={motion.section}
      variants={framerVariants}
      whileHover="onHover"
      margin="2rem 0"
    >
      <Card sx={{ width: '26.4rem', height: '34.9rem' }}>
        <CardContent>
          <Stack flexDirection="column">
            <img src={props.data.imgUrl} width="248px" height="248px" />
            <Stack
              flexDirection="row"
              alignItems="baseline"
              justifyContent="space-around"
            >
              <Stack direction="column" marginTop="1rem" width="100%">
                <Text
                  fontSize={theme.textSizes.medium2}
                  fontWeight="bold"
                  textAlign="left"
                >
                  {props.data.title}
                </Text>
                <Text
                  fontSize={theme.textSizes.medium}
                  fontWeight="bold"
                  textAlign="left"
                >
                  {props.data.description}
                </Text>
              </Stack>
              {props.data.type !== 'Tea' ? (
                <Box
                  bgcolor={checkType}
                  borderRadius="2px"
                  height="1.6rem"
                  width="6.6rem"
                >
                  <Text
                    fontSize={theme.textSizes.small}
                    color={theme.colors.white}
                    textAlign="center"
                    fontWeight="600"
                  >
                    {props.data.type.toLocaleUpperCase()}
                  </Text>
                </Box>
              ) : null}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
