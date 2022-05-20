import Grid from "@mui/material/Grid";

import { config } from "../../config";
import esIcon from "../assets/ftm.png";
import tgIcon from "../assets/TGIcon.png";
import twIcon from "../assets/TWIcon.png";
import dIcon from "../assets/discord-v2.svg"

export default function Footer() {
  return (
    <Grid container justifyContent="center" spacing={2} marginTop={4}>
      <Grid item>
        <a href={config.scanLink} target="__blank">
          <img src={esIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://discord.gg/QJCBP6HDZJ" target="__blank">
          <img src={dIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://twitter.com/FTMTowerOfPizza" target="__blank">
          <img src={twIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
    </Grid>
  );
}
