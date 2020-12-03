import React, {useState} from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import Axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState("");

    const onSubmit = () =>{
        if(username.trim()=== "" && password.trim() === ""){
            alert("Please enter username and password.");
        }
        else if(username.trim() === ""){
            alert("Please enter username.");
        }else if(password.trim() === ""){
            alert("Please enter password.");
        }
        else{
			Axios.post("http://localhost:8000/backend/login",{
				username:username.trim(),
				password:password.trim(),
			})
				.then((response) => {
					if(response.status === 200){
						
						setRedirect("success");
					}
				})
				.catch((error) => {
					alert(error.response.data.message)
				});
        }
    }

	return (
		<div style={{ marginTop: "50px", marginLeft: "40%", width:"200px" }}>
			<h4 style={{marginLeft:"30%"}}>Login</h4>
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
					<Button
						id="login"
						variant="contained"
						color="primary"
                        onClick={() => onSubmit()}
                        style={{marginLeft:"30%"}}
					>
						Login
					</Button>
				</Grid>
				<Grid item xs={12}>
					<span
						style={{ color: "blue", marginLeft:"25%" }}
						onClick={() => setRedirect("register")}
					>
						Register here
					</span>
				</Grid>
			</Grid>
            {redirect === "register" && <Redirect to="/register" />}
			{redirect === "success" && <Redirect to="/success" />}
		</div>
	);
}
