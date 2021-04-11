import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteRenderInputParams } from "@material-ui/lab";
import React from "react";
import { TestCaseStatus } from "../redux/testcase/types";

const useStyles = makeStyles(theme => ({
	dropdown: {
		width: 500
	},
}));

interface TestCaseStatusDropdownProps {
	status: TestCaseStatus;
	onChange: (value: any) => void;
}

export default function TestCaseStatusDropdown(props: TestCaseStatusDropdownProps) {
	const classes = useStyles();

	const onValueChange = (event: React.ChangeEvent<{}>, value: any, reason: any) => {
		props.onChange(value);
	}

	return (
		<Autocomplete
			className={classes.dropdown}
			options={Object.values(TestCaseStatus)}
			disableClearable
			onChange={onValueChange}
			defaultValue={props.status}
			renderInput={(inputProps: AutocompleteRenderInputParams) =>
				<TextField {...inputProps}>{props.status}</TextField>
			} />
	)
}