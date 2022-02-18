import React, { memo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton, ListItem, Typography } from "@mui/material";

const Item = ({ text, completed }) => {
    return (
        <div>
            <ListItem>
                <div className="d-flex item">
                    <input type="checkbox" checked={completed} readOnly />
                    <Typography className="item-text">{text}</Typography>
                    <div className="item-buttons d-flex">
                        <IconButton>
                            <EditIcon style={{ fontSize: 20 }} />
                        </IconButton>
                        <IconButton>
                            <DeleteOutlineIcon style={{ fontSize: 20 }} />
                        </IconButton>
                    </div>
                </div>
            </ListItem>
        </div>
    );
};

export default memo(Item);
