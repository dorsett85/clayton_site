import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Slide, Zoom} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BuildIcon from '@material-ui/icons/Build';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import {Dialog, DialogContent, DialogTitle, DialogActions} from "@material-ui/core";
import {List, ListSubheader, ListItem, ListItemIcon, ListItemAvatar, ListItemText} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import {Card, CardActionArea, CardHeader, CardContent} from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {yellow, green, blue} from '@material-ui/core/colors';
import {ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import {withStyles} from '@material-ui/core/styles';

import snowbirdBackground from '../assets/img/snowbird_dark.jpg';

import reactLogo from '../assets/img/react-logo.png';
import materialUiLogo from '../assets/img/material-ui-logo.png';
import bootstrapLogo from '../assets/img/bootstrap-solid.svg';
import djangoLogo from '../assets/img/django-logo-negative.png';
import nodeLogo from '../assets/img/node-logo.png';
import laravelLogo from '../assets/img/laravel-l-slant.png';
import postgresLogo from '../assets/img/PostgreSQL-logo.png';
import mySqlLogo from '../assets/img/mysql-logo.png';
import awsLogo from '../assets/img/aws-logo.png';
import digitalOceanLogo from '../assets/img/DigitalOcean-logo.png';

import quickModelScreen from '../assets/img/quickmodel.png';
import laughingDogsScreen from '../assets/img/laughingdogs.png';
import emapScreen from '../assets/img/emap.png';

const styles = theme => ({
  background: {
    height: '100vh',
    backgroundImage: `url(${snowbirdBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  gridContainer: {
    height: '100%',
    padding: 20
  },
  centerGrid: {
    marginBottom: 40
  },
  headerGrid: {
    marginBottom: 20
  },
  headerText: {
    color: '#ffffff',
    textShadow: '2px 2px 5px #000000, 2px -2px 5px #000000, -2px 2px 5px #000000, -2px -2px 5px #000000',
    [theme.breakpoints.up('xs')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 40,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 45,
    },
  },
  modalOpenBtnText: {
    paddingLeft: 10
  },
  logoImg: {
    borderRadius: 5
  },
  sampleDiv: {
    marginTop: 12
  },
  sampleAppContent: {
    padding: 5
  },
  sampleAppImg: {
    width: '100%'
  },
  yellow: {
    color: yellow[500]
  },
  green: {
    color: green[500]
  },
  blue: {
    color: blue[500]
  }
});

// Modal transition component
function ModalTransition(props) {
  return <Slide direction="down" {...props} />;
}


const Layout = props => {
  const {classes} = props;
  const modalInfo = [
    {name: 'Development', btnIcon: <BuildIcon/>},
    {name: 'Visualization', btnIcon: <TrendingUpIcon/>},
    {name: 'Personal', btnIcon: <PersonPinCircleIcon/>}
  ];

  // Populate
  let modal = {
    ...modalInfo[props.modalNum],
    prevModal: props.modalNum === 0 ? modalInfo.length - 1 : props.modalNum - 1,
    nextModal: props.modalNum === modalInfo.length - 1 ? 0 : props.modalNum + 1
  };
  if (modal.name === 'Development') {
    modal.title = 'Software Development';
    modal.content = (
      <div>
        <Typography gutterBottom>
          Full-stack engineer with extensive production deployment experience. I have built and maintained applications
          utilizing the following technologies:
        </Typography>
        <Grid container justify={"center"} spacing={8}>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Frontend Frameworks</ListSubheader>}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={reactLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'React'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={materialUiLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'Material-UI'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={bootstrapLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'Bootstrap'}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Backend Frameworks</ListSubheader>}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={djangoLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'Python/Django'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={nodeLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'Node/Express'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={laravelLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'PHP/Laravel'}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Data Storage</ListSubheader>}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={postgresLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'PostgreSQL'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={mySqlLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'MySQL'}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Web Services</ListSubheader>}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={awsLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'Amazon Web Services'} secondary={'EC2, S3, Lambda, Route 53, etc.'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={digitalOceanLogo} className={classes.logoImg}/>
                </ListItemAvatar>
                <ListItemText primary={'Digital Ocean'} secondary={'Ubuntu'}/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider/>
        <Grid container className={classes.sampleDiv} spacing={8}>
          <Grid item xs={12}>
            <Typography variant={"h6"}>
              Sample Applications
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea onClick={() => props.handleAppClick('https://pymodel.cphillipsdorsett.com')}>
                <CardHeader subheader={'QuickModel'}/>
                <CardContent className={classes.sampleAppContent}>
                  <img src={quickModelScreen} className={classes.sampleAppImg} alt={'QuickModel'}/>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea onClick={() => props.handleAppClick('https://emap.cphillipsdorsett.com')}>
                <CardHeader subheader={'eMap (in development)'}/>
                <CardContent className={classes.sampleAppContent}>
                  <img src={emapScreen} className={classes.sampleAppImg} alt={'eMap'}/>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea onClick={() => props.handleAppClick('https://www.laughingdogsvt.com')}>
                <CardHeader subheader={'Laughing Dogs VT'}/>
                <CardContent className={classes.sampleAppContent}>
                  <img src={laughingDogsScreen} className={classes.sampleAppImg} alt={'laughingdogsvt'}/>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  } else if (modal.name === 'Visualization') {
    const chartIcon = color => (
      <ListItemIcon>
        <AssessmentIcon className={classes[color]}/>
      </ListItemIcon>
    );
    modal.title = 'Data Visualization';
    modal.content = (
      <div>
        <Typography gutterBottom>
          My programming life began with reporting and data visualization projects in R and I now offer solutions with
          the following libraries:
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <List subheader={<ListSubheader disableSticky>Javascript</ListSubheader>}>
              <ListItem>
                {chartIcon('yellow')} <ListItemText primary={'Highcharts'} secondary={'See samples below'}/>
              </ListItem>
              <ListItem>
                {chartIcon('yellow')} <ListItemText primary={'Mapbox'}/>
              </ListItem>
              <ListItem>
                {chartIcon('yellow')} <ListItemText primary={'Chart.js'}/>
              </ListItem>
              <ListItem>
                {chartIcon('yellow')} <ListItemText primary={'Plotly'}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List subheader={<ListSubheader disableSticky>Python</ListSubheader>}>
              <ListItem>
                {chartIcon('green')} <ListItemText primary={'Matplotlib'}/>
              </ListItem>
              <ListItem>
                {chartIcon('green')} <ListItemText primary={'ReportLab'}/>
              </ListItem>
            </List>
            <List subheader={<ListSubheader disableSticky>R</ListSubheader>}>
              <ListItem>
                {chartIcon('blue')} <ListItemText primary={'ggplot2'}/>
              </ListItem>
              <ListItem>
                {chartIcon('blue')} <ListItemText primary={'Leaflet R'}/>
              </ListItem>
              <ListItem>
                {chartIcon('blue')} <ListItemText primary={'R Markdown'}/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider/>
        <Grid container spacing={8} className={classes.sampleDiv}>
          <Grid item xs={12}>
            <Typography variant={"h6"}>
              Sample Visualizations
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>High stocks chart</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Wind rose</Typography>
          </Grid>
        </Grid>
      </div>
    )
  } else if (modal.name === 'Personal') {
    modal.title = "I'm not Always Working...";
    modal.content = (
      <div>
        <Typography gutterBottom>
          I grew up in beautiful southern Vermont and continue to enjoy all things outdoors. When I'm not developing
          you can probably find me on a mountain either climbing or snowboarding.
        </Typography>
        <Typography>
          claytonphillipsdorsett@gmail.com
        </Typography>
      </div>
    )
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <div id={'background'} className={classes.background}>
        <Grid container justify={'center'} className={classes.gridContainer} alignItems={'center'}>
          <Grid item md={6} sm={9} xs={12} className={classes.centerGrid}>
            <Slide in direction={"down"}>
              <Grid container justify={"center"} className={classes.headerGrid}>
                <Typography variant={"h3"} className={classes.headerText}>
                  Clayton Phillips-Dorsett
                </Typography>
              </Grid>
            </Slide>
            <Zoom in timeout={500}>
              <Grid container spacing={8}>
                {modalInfo.map((info, i) => (
                  <Grid key={i} item sm={4} xs={12}>
                    <Button
                      fullWidth
                      variant={"contained"}
                      onClick={() => props.handleToggleModal(i)}
                      color={"secondary"}
                    >
                      {info.btnIcon}
                      <div className={classes.modalOpenBtnText}>{info.name}</div>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Zoom>
          </Grid>
        </Grid>
        <Dialog
          open={Boolean(modal.name)}
          fullWidth
          fullScreen={window.innerWidth < 600}
          maxWidth={'md'}
          TransitionComponent={ModalTransition}
          onClose={() => props.handleToggleModal(null)}
        >
          <DialogTitle>
            {modal.title || ''}
          </DialogTitle>
          <DialogContent>
            {modal.content}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => props.handleToggleModal(modal.prevModal)} color="primary">
              <ArrowLeftIcon/>
            </Button>
            <Button onClick={() => props.handleToggleModal(modal.nextModal)} color="primary">
              <ArrowRightIcon/>
            </Button>
            <Button onClick={() => props.handleToggleModal(null)} color="primary">
              <CloseIcon/>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  )

};

export default withStyles(styles)(Layout);