import { Grid, IconButton, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import faqs from "../assets/faqs.json";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import Close from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  maxHeight: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 4,
  py: 6,
  borderRadius: 8,
  overflow: "auto",
};

export default function Improvements() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box pt={4}>
      <Button
        variant="contained"
        fullWidth
        onClick={handleOpen}
        startIcon={<QuestionAnswer />}
      >
        Improvements
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="scrollbox">
          <Grid container spacing={2} direction="column" position="relative">
            <Typography variant="h5">
              Fair Pricing Curve 💰
            </Typography>
            <Typography variant="body1" gutterBottom>
              The existing Baked Beans pricing curve heavily favored early depositors, with a difference in buying efficiency of 100x or more. This essentially doomed later buyers. Here at Leaning Tower, we use flat pricing, so it doesn't matter when you enter. Early participants still have the benefit of compounding their capital earlier.
            </Typography>
            
            <Typography variant="h5">
              1% Daily Lottery 🎲
            </Typography>
            <Typography variant="body1" gutterBottom>
              The randomized and verifiable lottery gives even the smallest depositors a chance to win big. To keep it fair, your chance of winning is proportional to the amount that you've deposited.
            </Typography>
            
            <Typography variant="h5">
              Withdraw Cooldown (6 days) and Max Withdrawal ⏰
            </Typography>
            <Typography variant="body1" gutterBottom>
              Users can only Eat Pizza (withdraw) every 6 days. The withdrawal is also limited to 5% of your total each time. These guardrails keeps the contract balance at a healthy level. 6 days of multiply before eating, folks!
            </Typography>
            
            <Typography variant="h5">
              Ability to migrate funds to future contract 🚀
            </Typography>
            <Typography variant="body1" gutterBottom>
              It is expected that there will be new ideas in time. A current problem with the existing Baked Beans contract is that the funds are stuck forever. If 50% of eligible users vote (on-chain), the operator can end the current contract and mgirate funds and balances to a new contract. Eligible users are those that bought in with at least 1% of the contract.
            </Typography>
            
            <Typography variant="h5">
              Reduced referral rate 👨‍🚒
            </Typography>
            <Typography variant="body1" gutterBottom>
              Referral fee has been reduced from 12.5% to 10% and also removed referrals on compounds. We think this is a fair share for those who've marketed successfully, but also prevents them from running away with all the funds. 
            </Typography>
            
            <Typography variant="h5" gutterBottom>
              🍕 If you have recommendations for more improvements, let us know! 🍕
            </Typography>
            

            <IconButton
              color="primary"
              style={{ position: "absolute", right: -25, top: -24 }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
