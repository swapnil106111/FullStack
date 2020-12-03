import React, { useState } from "react";
import { Button, Grid, TextField, Select, MenuItem } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Axios from "axios";

export default function Registration() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [panNumber, setPanNumber] = useState("");
    const [gender, setGender] = useState("")
	const [redirect, setRedirect] = useState(false);

	const onSubmit = () => {
    const patt = new RegExp("^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$");
    const res = patt.test(password);
    console.log("Is regular matches:", res);
		if (username.trim() === "") {
			alert("Please enter username.");
		} else if (password.trim() === "") {
			alert("Please enter password.");
        } else if (confirmPassword.trim() === "") {
			alert("Please enter confirm password.");
        } else if (panNumber.trim() === "") {
			alert("Please enter PAN Number.");
        } else if(gender === ""){
            alert("Please select gender.");
        } else if(password !== confirmPassword){
            alert("Please enter same password and confirm password.")
        } else if(res === false){
            alert("Password must contain 8 letters, spacial character, number.");
        } else if(panNumber.length !== 10){
            alert("PAN number should be 10 in length.")
        }
        else {
			Axios.post("http://localhost:8000/backend/register",{
				username:username.trim(),
				password:password.trim(),
				confirm_password: confirmPassword.trim(),
				pan_number:panNumber,
				gender:gender

			})
				.then((response) => {
					if(response.status === 200){
						alert("User is registered successfully...!!!")
						setRedirect(true);
					}
				})
				.catch((error) => {
					alert(error.response.data.message);
				});
		}
	};

	return (
		<div style={{ marginTop: "50px", marginLeft: "40%", width: "200px" }}>
			<h4 style={{ marginLeft: "10%" }}>User Registration</h4>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<TextField
						id="outlined-full-width"
						label="Username"
						placeholder="Username"
						margin="normal"
						variant="outlined"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="outlined-full-width"
						label="Password"
						placeholder="Password"
						margin="normal"
						variant="outlined"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="outlined-full-width"
						label="Confirm Password"
						placeholder="Confirm Password"
						margin="normal"
						variant="outlined"
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="outlined-full-width"
						label="PAN Number"
						placeholder="PAN Number"
						margin="normal"
						variant="outlined"
						type="text"
						value={panNumber}
						onChange={(e) => setPanNumber(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<Select
                        fullWidth
						value={gender}
						onChange={(e)=> setGender(e.target.value)}
					>
						<MenuItem value="M">Male</MenuItem>
						<MenuItem value="F">Female</MenuItem>
					</Select>
				</Grid>

				<Grid item xs={12}>
					<Button
						id="login"
						variant="contained"
						color="primary"
						onClick={() => onSubmit()}
						style={{ marginLeft: "10%" }}
					>
						Registration
					</Button>
				</Grid>
				<Grid item xs={12}>
					<span
						style={{ color: "blue", marginLeft: "25%" }}
						onClick={() => setRedirect(true)}
					>
						Login here
					</span>
				</Grid>
			</Grid>
			{redirect && <Redirect to="/login" />}
		</div>
	);
}
