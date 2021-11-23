import { Grid, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import CustomButton from "../../components/Common/Button";
import { makeStyles, useTheme } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const ContactUsPage = () => {
  const theme = useTheme();
  const [name, setName] = React.useState("");
  const [organisation, setOrganisation] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errorName, setErrorStatusName] = React.useState(false);
  const [errorStatusEmail, setErrorStatusEmail] = React.useState(false);
  const [errorStatusMessage, setErrorStatusMessage] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleOrgChange = (event) => {
    setOrganisation(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (checked) {
      if (name.length === 0) {
        setErrorStatusName(true);
      } else {
        setErrorStatusName(false);
      }
      if (email.length === 0) {
        setErrorStatusEmail(true);
      } else {
        setErrorStatusEmail(false);
      }
      if (message.length === 0) {
        setErrorStatusMessage(true);
      } else {
        setErrorStatusMessage(false);
      }
      if (name && email && message) {
        setName("");
        setOrganisation("");
        setEmail("");
        setMessage("");
        setChecked(false);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": event.target.getAttribute("name"),
            name,
            email,
            organisation,
            message,
          }),
        })
          .then(() => setOpen(true))
          .catch((error) => alert(error));
      }
    }
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <Grid
          container
          justifyContent="center"
          sx={{
            padding: {
              xs: "1rem 1rem",
              sm: "0rem 0rem",
            },
          }}
        >
          <Grid item xs={12} textAlign="center" sx={{ margin: "2rem 0rem" }}>
            <Typography
              color={theme.palette.tertiary.main}
              variant="h3"
              fontWeight="700"
            >
              Contact us
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs={12}
            textAlign="center"
            sx={{ margin: "2rem 0rem" }}
            justifyContent="center"
          >
            <Grid item sm={6} lg={5} xs={12} sx={{ padding: "0rem 1rem" }}>
              <Typography color={theme.palette.tertiary.main}>
                Fill out this form with your contact details, if you're
                interested in staying in contact with us, whether it is to share
                your own ideas and experiences related to DivIT or to just
                follow us along on this journey!
              </Typography>
            </Grid>
          </Grid>

          <Grid item sm={6} lg={5} xs={12}>
            <Grid item>
              <Typography
                sx={{
                  padding: "0rem 1rem",
                  display: "flex",
                  margin: "0.5rem 0rem",
                }}
              >
                Name*
              </Typography>
              <TextField
                maxRows={1}
                value={name}
                error={errorName}
                sx={{
                  padding: "0rem 1rem",
                  display: "flex",
                }}
                onChange={handleNameChange}
              />
            </Grid>
            <Grid
              item
              sx={{
                marginTop: "2rem",
              }}
            >
              <Typography
                sx={{
                  padding: "0rem 1rem",
                  display: "flex",
                  margin: "0.5rem 0rem",
                }}
              >
                Organisation
              </Typography>
              <TextField
                maxRows={1}
                value={organisation}
                sx={{
                  padding: "0rem 1rem",
                  display: "flex",
                }}
                onChange={handleOrgChange}
              />
            </Grid>
            <Grid
              item
              sx={{
                margin: "2rem 0rem",
              }}
            >
              <Typography
                sx={{
                  padding: "0rem 1rem",
                  display: "flex",
                  margin: "0.5rem 0rem",
                }}
              >
                Email*
              </Typography>
              <TextField
                maxRows={1}
                value={email}
                error={errorStatusEmail}
                sx={{
                  padding: "0rem 1rem",
                  display: "flex",
                }}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid
              item
              sx={{
                margin: "2rem 0rem",
              }}
            >
              <Typography
                sx={{
                  padding: "0rem 1rem",
                  display: "flex",
                  margin: "0.5rem 0rem",
                }}
              >
                Message*
              </Typography>
              <TextField
                maxRows={1}
                value={message}
                onChange={handleMessageChange}
                sx={{
                  padding: "0rem 1rem",
                  display: "flex",
                }}
                multiline
                rows={4}
                error={errorStatusMessage}
              />
            </Grid>
            <Grid
              item
              container
              sx={{
                padding: "0rem 1rem",
                margin: "2rem 0rem",
              }}
              direction="row"
              alignItems="center"
            >
              <Grid lg={1} md={2} xs={2}>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  {...label}
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 28 },
                    "&.Mui-checked": {
                      color: theme.palette.tertiary.main,
                    },
                  }}
                />
              </Grid>
              <Grid lg={11} md={10} xs={10}>
                <Typography
                  color="common.black"
                  sx={{ textAlign: "justify", fontSize: "0.85rem" }}
                >
                  By filling out this form you give Team DivIT permission to
                  contact you by email with information about the project and
                  with specific questions about the comments that you might
                  given above
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                padding: "0rem 1rem",
                margin: "2rem 0rem",
              }}
            >
              <CustomButton
                disabled={!checked}
                type="submit"
                backGroundColor={theme.palette.tertiary.main}
                color={theme.palette.common.white}
                hoverTextColor={theme.palette.common.white}
              >
                Send
              </CustomButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          variant="h5"
          sx={{ fontWeight: 700 }}
        >
          Successfully Submitted!!
        </DialogTitle>
        <DialogContent>
          <DialogContentText variant="h6" id="alert-dialog-description">
            Thank you from Team DivIT!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: theme.palette.tertiary.main }}
            size="medium"
            onClick={handleClose}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactUsPage;
