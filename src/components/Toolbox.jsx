import * as React from "react";
import { styled } from "@mui/material/styles";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import DownloadIcon from '@mui/icons-material/Download';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from "@mui/material/ToggleButtonGroup";
import { IconButton, Slider } from "@mui/material";
import { HexColorPicker } from "react-colorful";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
    },
}));

export default function CustomizedDividers({
  setCanvasOptions,
  canvasOptions,
}) {
  const [color, setColor] = React.useState("#aabbcc");
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState(() => ["italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={(theme) => ({
          display: "flex",
          border: `1px solid ${theme.palette.divider}`,
          flexWrap: "wrap",
          flexDirection: "row",
        })}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center ",
          }}
        >
          <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          <StyledToggleButtonGroup
            size="small"
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>

            <PopupState variant="popper" popupId="demo-popup-popper">
              {(popupState) => (
                <div>
                  {/* <Button variant="contained" {...bindToggle(popupState)}>
                    Toggle Popper
                  </Button> */}
                  <ToggleButton
                    value="color"
                    aria-label="color"
                    {...bindToggle(popupState)}
                  >
                    <FormatColorFillIcon />
                    <ArrowDropDownIcon />
                  </ToggleButton>
                  <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          <HexColorPicker color={color} onChange={setColor} />
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
          </StyledToggleButtonGroup>
          <div>
            <p style={{ margin: 0, fontSize: 12 }}>Brush Size</p>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
              style={{ width: 100 }}
              onChange={(e) => {
                console.log(e.target.value);
                setCanvasOptions({
                  ...canvasOptions,
                  brushRadius: e.target.value,
                });
              }}
            />
          </div>
          {/* <div>
            <HexColorPicker color={color} onChange={setColor} />
          </div> */}
          <div>
            <IconButton aria-label="delete" size="small">
              <DownloadIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      </Paper>
    </div>
  );
}
