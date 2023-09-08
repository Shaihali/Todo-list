import FormControl from '@mui/material/FormControl';
import { Button, Checkbox, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import form from './view-config.module.css';
import { UseViewConfigLogic } from './view-config.logic';


const ViewConfig = () => {
  const {
    name,
    age,
    subscribed,
    isChecked,
    handleChangeName,
    handleChangeAge,
    handleChangeSubscribe,
    handleChangeCheckbox,
    handleClickInsert,
    handleClickDelete,
    handleChangeSwitch,
  } = UseViewConfigLogic();

  return (
    <form noValidate autoComplete="off" className={form.form}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <FormControl sx={{ width: '45ch' }}>
            <TextField id="outlined-basic" value={name} label="Name" variant="outlined" onChange={(event) => handleChangeName(event)}/>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl sx={{ width: '45ch'}}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={(event) => handleChangeAge(event)}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    overflowY: 'auto',
                  },
                },
              }}
            >
              <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {Array.from({ length: 101 }, (_, index) => (
              <MenuItem key={index} value={index}>
                {index}
              </MenuItem>
            ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl sx={{ width: '45ch' }}>
            <InputLabel id="demo-simple-select-label">Subscribed</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subscribed}
              label="Age"
              onChange={(event) => handleChangeSubscribe(event)}
            >
              <MenuItem value="">
              <em>None</em>
              </MenuItem>
              <MenuItem value={'Subscribed'}>Subscribed</MenuItem>
              <MenuItem value={'Not Subscribed'}>Not Subscribed</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControlLabel control={<Checkbox />} label="Employed" checked={isChecked === 'Employed'} onChange={(event) => handleChangeCheckbox(event)}/>
        </Grid>
        <Grid item>
          <Button variant="outlined" style={{ width: '100%' }} onClick={handleClickInsert}>Insert</Button>
        </Grid>
        <Grid item>
          <FormControlLabel control={<Switch />} label="Mode" onChange={handleChangeSwitch}/>
        </Grid>
        <Grid item>
        <Button variant="outlined" style={{ width: '100%' }} onClick={handleClickDelete}>Delete</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ViewConfig;