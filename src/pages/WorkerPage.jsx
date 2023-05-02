
import React from 'react'
import './WorkerPage.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

function WorkerPage() {
  const type_of_workers = [
    { label: 'Plumber' },
    { label: 'Painter' },
    { label: 'Electrician' },
    { label: 'Carpenter' },
    { label: 'Children caring' },
    { label: 'Animal care' },
    { label: 'gardener' }
  ]
  const locations = [
    { label: 'Porur' },
    { label: 'Perambur' },
    { label: 'Avadi' },
    { label: 'Kattupakkam' },
    { label: 'Iyyappanthangal' },
    { label: 'Kundrathur' }
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
              <Grid item sm={4} md={4} lg={4}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <div>
                      <input type="text" name="type_of_worker" className='workerType_field' placeholder='Type of worker' />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={4} md={4} lg={4}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <div>
                      <input type="text" name="location" className='location_field' placeholder='Location' />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={4} md={4} lg={4}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <div>
                      <button className='filter'>Filter</button>
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