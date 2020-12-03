import React, {useState} from 'react'
import { Button, Grid, TextField, Select, MenuItem } from "@material-ui/core";
import { Redirect } from "react-router-dom";

export default function Logout() {

    const [logout, setLogout] = useState(false);
    return (
        <div>
            <div style={{ marginTop: "50px", marginLeft: "40%", width: "200px" }}>
			<h4 style={{ marginLeft: "10%" }}>Login Successful...!!!</h4>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Button
						id="login"
						variant="contained"
						color="primary"
						onClick={() => setLogout(true)}
						style={{ marginLeft: "10%" }}
					>
						Logout
					</Button>
				</Grid>
				
			</Grid>
			{logout && <Redirect to="/login" />}
		</div>
        </div>
    )
}
