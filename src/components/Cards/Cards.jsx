import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate } }) => {
  
  useEffect(() => {
    console.log(confirmed)
  }, []);

  if (!confirmed) {
    return 'Loading...'
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.tescardt, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
            <Typography variant="body2">Number of active cases of CODIV-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.tescardt, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
            <Typography variant="body2">Number of recoveries from CODIV-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.tescardt, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
            <Typography variant="body2">Number of deaths caused by CODIV-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;