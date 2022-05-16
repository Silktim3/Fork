import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import logo from "../../assets/FullLogo.png";
import logo2 from "../../assets/tower.webp"
import Connect from "./Connect";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

export default function Header() {
  return (
    <Wrapper>
      <img src={logo2} alt="" width={"100%"} style={{ marginTop: -48 }} />
      <Connect responsive={false} />
      <Typography variant="h4" marginTop={-8}>
        Leaning Tower of Pizza
      </Typography>
      <Typography variant="h6" marginTop={2}>
        The FTM Reward Pool with the tastiest daily return and a daily jackpot to win 1% of the entire pool 🍕. Forked from Baked Beans, but vastly improved. See details at the bottom.
      </Typography>
      
    </Wrapper>
  );
}
