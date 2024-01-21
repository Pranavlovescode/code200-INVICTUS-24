import * as React from "react";
import { useState } from "react"; // Import useState
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, fireDB } from "../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Signin from "./SignIn";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Login() {
  // Renamed the component to SignUp
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [clg, setClg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // Updated to async
    event.preventDefault();
    console.log({
      fname,
      lname,
      email,
      password,
      phone,
      clg,
      dob,
    });
    const data = { fname, lname, email, password, phone, dob, clg };
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, { displayName: fname });
        try {
          console.log('test')
          const res = await fetch("/signup-intern", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
          });
          const result = await res.json();
          console.log("result:", result);
          alert("Signup Successfull")
          setfName("");
          setlName("");
          setEmail("");
          setPassword("");
          setDob("");
          setPhone("");
          setClg("");
          navigate("/homemain");
        } catch (error) {
          alert("Something went wrong");
        }
      });
      const user = {
        name: fname,
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      console.log("Signup successful:", user);

      // setLoading(false);
    } catch (error) {
      console.error("Signup error:", error);
      // setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid rgba(0, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "10px",
            padding: "20px",

            position: "absolute", // Make the container position relative
            zIndex: 1,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={fname}
                  onChange={(e) => setfName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lname}
                  onChange={(e) => setlName(e.target.value)}
                  // You can add similar value and onChange for Last Name if needed
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone No."
                  id="phoneNumber"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="dob"
                  type="date"
                  id="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="clg"
                  label="College Name"
                  type="text"
                  id="clg"
                  value={clg}
                  onChange={(e) => setClg(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"} variant="body2">
                  Already Have an account? Signin
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
