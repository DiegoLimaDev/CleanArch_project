import { Box } from '@mui/material';
import { theme } from '../../../../styles/theme';
import { Text } from '../../common/Text';

export const Footer = () => {
  return (
    <Box bgcolor={theme.colors.primaryColor} position="absolute" width="100%">
      <Text
        fontSize={theme.textSizes.medium2}
        color={theme.colors.white}
        textAlign="center"
      >
        DIEGO LIMA DA SILVA, 2023
      </Text>
    </Box>
  );
};
