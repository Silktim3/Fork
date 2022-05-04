import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "rgb(255 252 248)",
  marginBottom: 24,
});

const nutritionFacts = [
  {
    label: "Daily Return",
    value: 8,
  },
  {
    label: "APR",
    value: "2,920",
  },
  {
    label: "Marketing Fee",
    value: 3,
  },
  {
    label: "Deliciousness",
    value: "2,349,023,402,384",
  },
];

export default function NutritionFacts() {
  return (
    <CardWrapper>
      <CardContent>
        <Typography variant="h5" borderBottom="6px solid" paddingBottom={1}>
          Nutrition Facts
        </Typography>
        <Box paddingTop={2}>
          {nutritionFacts.map((f) => (
            <Grid container key={f.label} justifyContent="space-between">
              <Typography variant="body1" gutterBottom>
                {f.label}
              </Typography>
              <Typography gutterBottom>{f.value}%</Typography>
            </Grid>
          ))}
        </Box>
        <Typography
          textAlign="center"
          variant="body2"
          marginTop={2}
          paddingX={3}
          borderTop="6px solid"
        >
          
           <p> Rewards can be re-invested & withdrawn daily.  </p>
           <p>To ensure the max rewards (8%), we recommend the following strategy:
          </p>
          <p>
            Rebake 6 Days/Week & 
            Eat Pizzas 1 Day/Week
            </p>
            This strategy has been battle tested and proven to maximise returns for both the short and long term.
            <p>
            Please note:

            You can not unstake; only withdraw earnings.</p>
            
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}
