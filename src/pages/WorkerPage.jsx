
import React from 'react'
import './WorkerPage.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

function WorkerPage() {
    const type_of_workers=[
        {label:'Plumber'},
        {label:'Painter'},
        {label:'Electrician'},
        {label: 'Carpenter'},
        {label: 'Children caring'},
        {label: 'Animal care'},
        {label: 'gardener'}
    ]
  const locations = [
    { label: 'Porur' },
    { label: 'Perambur' },
    { label: 'Avadi' },
    { label: 'Kattupakkam' },
    { label: 'Iyyappanthangal' },
    { label:'Kundrathur'}
    ]
  return (
    <div className='worker_page'>
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <h3>Search for a Worker...</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item sm={6} md={6} lg={6}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <div>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={type_of_workers}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Type of Worker" />
                        )}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={6} md={6} lg={6}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <div>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={locations}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Locations" />
                        )}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={10} lg={10} md={10}>
            <div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Type of worker</th>
                  <th>Location</th>
                  <th>Mobile Number</th>
                </tr>
                <tr>
                  <td>Vaish</td>
                  <td>Plumber</td>
                  <td>porur</td>
                  <td>6789543254</td>
                </tr>
                <tr>
                  <td>Priya</td>
                  <td>Carpenter</td>
                  <td>Perambur</td>
                  <td>9875242857</td>
                </tr>
                <tr>
                  <td>Varsha</td>
                  <td>Painter</td>
                  <td>Avadi</td>
                  <td>8765402456</td>
                </tr>
                <tr>
                  <td>Komel</td>
                  <td>Electrician</td>
                  <td>kattupakkam</td>
                  <td>7654054374</td>
                </tr>
                <tr>
                  <td>kaushi</td>
                  <td>Chidren caring</td>
                  <td>Avadi</td>
                  <td>6876502463</td>
                </tr>
                <tr>
                  <td>Logasri</td>
                  <td>Animal care</td>
                  <td>Kundrathur</td>
                  <td>8758734986</td>
                </tr>
              </table>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default WorkerPage