import {
<<<<<<< HEAD
	Avatar,
	Chip,
	Collapse,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	withStyles,
=======
    Avatar,
    Box,
    Chip,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    withStyles,
>>>>>>> bc7355ab2446c1a76a53e586be4b970a897da6e1
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";
import React, { Component } from "react";
import indigo from "@material-ui/core/colors/indigo";

const style = (theme) => ({
	root: {
		marginTop: "1rem",
		marginBottom: "1rem",
	},
	attendee: {
		color: theme.palette.getContrastText(indigo[500]),
		backgroundColor: indigo[500],
		width: "100%",
		"&:hover": {
			backgroundColor: indigo[600],
		},
	},
});

class EventDetailedSidebar extends Component {
	state = { open: false };

<<<<<<< HEAD
	handleClick = () => {
		this.setState({ open: !this.state.open });
	};
	render() {
		const { classes } = this.props;
		const { attendees } = this.props;
		const isHost = false;
		return (
			<List className={classes.root}>
				<ListItem
					button
					onClick={this.handleClick}
					className={classes.attendee}
				>
					<ListItemIcon>
						<GroupIcon style={{ color: "#FFF" }} />
					</ListItemIcon>
					<ListItemText>
						<Typography variant="body1">
							<strong>{attendees && attendees.length}</strong>
							{attendees && attendees.length === 1
								? " Person is "
								: " People are "}
							Going
						</Typography>
					</ListItemText>
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{attendees &&
							attendees.map((attendee) => (
								<div>
									<ListItem
										button
										key={attendee.id}
										className={classes.nested}
									>
										<ListItemIcon>
											<Avatar
												alt={attendee.name}
												src={attendee.photoURL}
											/>
										</ListItemIcon>
										<ListItemText>
											<Typography
												variant="body2"
												color="textSecondary"
											>
												<strong>{attendee.name}</strong>
											</Typography>
										</ListItemText>
										{isHost && (
											<Chip
												label="HOST"
												color="secondary"
											/>
										)}
									</ListItem>

									<Divider />
								</div>
							))}
					</List>
				</Collapse>
			</List>
		);
	}
=======
    handleClick = () => {
        this.setState({ open: !this.state.open });
    };
    render() {
        const { classes } = this.props;
        return (
            <List className={classes.root}>
                <ListItem
                    button
                    onClick={this.handleClick}
                    className={classes.attendee}
                >
                    <ListItemIcon>
                        <GroupIcon style={{ color: "#FFF" }} />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1">
                            <strong>3</strong> People are Going
                        </Typography>
                    </ListItemText>
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Box style={{ height: "40vh", overflowY: "auto" }}>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <Avatar
                                        alt="UserName"
                                        src="https://source.unsplash.com/300x500/?person"
                                    />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        <strong>UserName</strong>
                                    </Typography>
                                </ListItemText>
                                <Chip label="HOST" color="secondary" />
                            </ListItem>

                            <Divider />

                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <Avatar
                                        alt="UserName"
                                        src="https://source.unsplash.com/300x500/?person"
                                    />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        <strong>UserName</strong>
                                    </Typography>
                                </ListItemText>
                            </ListItem>

                            {[...new Array(12)].map(() => (
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <Avatar
                                            alt="UserName"
                                            src="https://source.unsplash.com/300x500/?person"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            <strong>UserName</strong>
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                </Box>
            </List>
        );
    }
>>>>>>> bc7355ab2446c1a76a53e586be4b970a897da6e1
}

export default withStyles(style)(EventDetailedSidebar);
