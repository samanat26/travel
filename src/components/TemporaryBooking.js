import React , {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


const rows = [
  {
    id: 1,
    Pax_Name: '@MUI',
    Contact:'0000020',
    PNR : 22,
    GSD_PNR: 22,
    Carrer:'none',
    TotalFare:'8888',
    Sold:'none',
    TimeLimit: 'null',
  },

];


export default function TemporaryBooking() {
  
  const [value, setValue] = React.useState(null);
 
 return 
 <div>
      
       <Container maxWidth="lg">
       <h1>Tempoary Booking</h1>
        {/* <Box sx={{ bgcolor '#cfe8fc', height: '10:0vh' }} /> */}
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Pax Name"
      />
       <TextField
        id="outlined-name"
        label="Contact"
      />
       <TextField
        id="outlined-name"
        label="PNR"
      />
       <TextField
        id="outlined-name"
        label="GSD PNR"
      />
      <TextField
        id="outlined-name"
        label="Carrer"
      />
       <TextField
        id="outlined-name"
        label="Total Fare"
      />
       <TextField
        id="outlined-name"
        label="Sold"
      />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Time Limit"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
      </Box>
      <Box sx={{ '& button': { m: 1 } }}> <div>
      <Button variant="outlined" size="large">
          Submit
        </Button>
        <Button color= "secondary" variant="outlined" size="large">
          Reset
        </Button>
      </div></Box>
   {/* ...................Table............................ */}
     <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'Pax_Name', width: 100 },
         { field: 'Contact', width: 100 },
          {field: 'PNR', width: 100},
          {field:'GSD_PNR', width: 100}, 
          {field:'Carrer', width: 100}, 
          {field:'TotalFare', width: 100},
          {field:'Sold', width: 100},
          {field:'TimeLimit', width: 100}]}
        rows={rows}
      />
    </div>
    </Container>
  </div>;
}