import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css';
import cx from 'classnames';

function Cards({data:{confirmed,recovered,deaths,lastUpdate}}){
    if(!confirmed){
        return "LODING.."
    }
    //console.log(props)
    return (
        <div className={styles.container}>
           <Grid container spacing={4} justify="center">
               <Grid item component={Card} xs={7} md={3} className={cx(styles.Card,styles.infected)} >
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                           INFECTED
                       </Typography>
                       <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2} separator=","/>
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Number of people infected due to COVID-19</Typography>
                   </CardContent>
               </Grid>

               <Grid item component={Card} xs={7} md={3} className={cx(styles.Card,styles.recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                           RECOVERED
                       </Typography>
                       <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2} separator=","/></Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Number of people recovered from COVID-19</Typography>
                   </CardContent>
               </Grid>
            
               <Grid item component={Card} xs={7} md={3} className={cx(styles.Card,styles.deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                           DEATHS
                       </Typography>
                       <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2} separator=","/></Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Number of people died due to COVID-19</Typography>
                   </CardContent>
               </Grid>

           </Grid>
        </div>
    )
}
export default Cards