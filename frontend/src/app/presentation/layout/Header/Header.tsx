import { Box, css, styled, useMediaQuery } from '@mui/material';
import { theme } from '../../../../styles/theme';
import { BackgroundColor } from '../../common/BackgroundColor';
import { Text } from '../../common/Text';
import { useAppDispatch, useAppSelector } from '../../../application/hooks';
import { setCoffeeOrTea } from '../../../application/displayCoffeeOrTea/displayCoffeeOrTea.slice';

const sessionIndicator = {
  coffee: () => css`
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1rem;
      opacity: 1;
      background-color: ${theme.colors.auxiliar};
      top: 3rem;
      right: 0.5rem;
    }
  `,
  tea: () => css`
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1rem;
      opacity: 1;
      background-color: ${theme.colors.auxiliar};
      top: 3rem;
      right: 1rem;
    }
  `,
};

const StyledBox = styled(Box)(
  (props: { iscoffee?: string; istea?: string }) => css`
    cursor: pointer;
    height: fit-content;
    position: relative;

    ${props.iscoffee === 'coffee' ? sessionIndicator.coffee() : null};
    ${props.istea === 'tea' ? sessionIndicator.tea() : null}
  `,
);

export const Header = () => {
  const match = useMediaQuery('(max-width:550px)');
  const dispatch = useAppDispatch();
  const { coffeeOrTea } = useAppSelector((state) => state.coffeeOrTeaSlice);

  return (
    <BackgroundColor bgcolor={theme.colors.primaryColor}>
      <Box
        height={match ? '12.3rem' : '3.6rem'}
        padding={match ? '0' : '1rem'}
        display="flex"
        flexDirection={match ? 'column' : 'row'}
        justifyContent="center"
      >
        <Text
          fontSize={match ? '4rem' : theme.textSizes.big2}
          color={theme.colors.white}
          fontFamily="'Limelight', cursive"
          position={match ? 'relative' : 'absolute'}
          left={match ? '0' : '6%'}
          display={match ? 'block' : 'flex'}
          margin={match ? '0 auto' : ''}
        >
          BREWED
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          margin="0 auto"
          justifyContent={match ? 'space-between' : 'center'}
        >
          <StyledBox marginRight="2rem" width="10rem" iscoffee={coffeeOrTea}>
            <Text
              fontSize={theme.textSizes.medium2}
              color={theme.colors.white}
              role="button"
              onClick={() => dispatch(setCoffeeOrTea('coffee'))}
            >
              Our Coffee
            </Text>
          </StyledBox>
          <StyledBox marginLeft="2rem" width="8.5rem" istea={coffeeOrTea}>
            <Text
              fontSize={theme.textSizes.medium2}
              color={theme.colors.white}
              role="button"
              onClick={() => dispatch(setCoffeeOrTea('tea'))}
            >
              Our Tea
            </Text>
          </StyledBox>
        </Box>
      </Box>
    </BackgroundColor>
  );
};
