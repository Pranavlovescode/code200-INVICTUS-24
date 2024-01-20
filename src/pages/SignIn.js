import * as React from "react";
import { useState } from "react"; // Import useState
import { auth } from "../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Signin({
  onCloseSignin,
  openSignin,
  openLogin,
  onCloseLogin,
}) {
  // Renamed the component to SignUp
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleSubmit = async (event) => {
    // Updated to async
    event.preventDefault();
    console.log({
      email,
      password,
    });

    try {
      if (!email || !password) {
        console.error("Email and password are required.");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userCredential.user.name || "",
        time: Timestamp.now(),
      };

      //   const userRef = collection(fireDB, "users");
      //   await addDoc(userRef, user);
      console.log("SignIn successful:", user);
      setEmail("");
      setPassword("");
      // setLoading(false);

      onCloseSignin();
      navigate("/homemain");
      navigate("/user-profile", { state: { user } });

      setIsOverlayVisible(false); // Hide overlay after successful signup
    } catch (error) {
      console.error("SignIn error:", error);
      // setLoading(false);
    }
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {isOverlayVisible && (
          <div className="overlay" onClick={toggleOverlay}></div>
        )}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2">
                  <button
                    onClick={openLogin}
                    className="mr-5 hover:text-gray-900"
                  >
                    Don't have an account? Sign up
                  </button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
