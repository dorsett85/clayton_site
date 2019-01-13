import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import BuildIcon from '@material-ui/icons/Build';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import {Dialog, DialogContent, DialogTitle, DialogActions} from "@material-ui/core";
import {List, ListSubheader, ListItem, ListItemIcon, ListItemAvatar, ListItemText} from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import {Card, CardActionArea, CardHeader, CardContent} from '@material-ui/core';
import {ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    height: '100vh'
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
    [theme.breakpoints.up('xs')]: {
      fontSize: 35,
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
  sampleAppsDiv: {
    marginTop: 12
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

  // Populate modal
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
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'React'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'Material-UI'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'Bootstrap'}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Backend Frameworks</ListSubheader>}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'Python/Django'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'Node/Express'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'PHP/Laravel'}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Data Storage</ListSubheader>}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'PostgreSQL'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'MySQL'}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Web Services</ListSubheader>}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'Amazon Web Services'} secondary={'EC2, Lambda, Route 53, etc.'}/>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={'Digital Ocean'} secondary={'Ubuntu'}/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider/>
        <Grid container className={classes.sampleAppsDiv} spacing={8}>
          <Grid item xs={12}>
            <Typography variant={"h6"}>
              Sample Applications
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea>
                <CardHeader subheader={'QuickModel'}/>
                <CardContent>
                  Image for QuickModel
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea>
                <CardHeader subheader={'eMap (in development)'}/>
                <CardContent>
                  Image for eMap
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea>
                <CardHeader subheader={'Laughing Dogs VT'}/>
                <CardContent>
                  Image for Laughing Dogs VT
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  } else if (modal.name === 'Visualization') {
    const chartIcon = (
      <ListItemIcon>
        <AssessmentIcon/>
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
                {chartIcon} <ListItemText primary={'Highcharts'}/>
              </ListItem>
              <ListItem>
                {chartIcon} <ListItemText primary={'Mapbox'}/>
              </ListItem>
              <ListItem>
                {chartIcon} <ListItemText primary={'Chart.js'}/>
              </ListItem>
              <ListItem>
                {chartIcon} <ListItemText primary={'Plotly'}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List subheader={<ListSubheader disableSticky>Python</ListSubheader>}>
              <ListItem>
                {chartIcon} <ListItemText primary={'Matplotlib'}/>
              </ListItem>
              <ListItem>
                {chartIcon} <ListItemText primary={'ReportLab'}/>
              </ListItem>
            </List>
            <List subheader={<ListSubheader disableSticky>R</ListSubheader>}>
              <ListItem>
                {chartIcon} <ListItemText primary={'ggplot2'}/>
              </ListItem>
              <ListItem>
                {chartIcon} <ListItemText primary={'Leaflet R'}/>
              </ListItem>
              <ListItem>
                {chartIcon} <ListItemText primary={'R Markdown'}/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    )
  } else if (modal.name === 'Personal') {
    modal.title = 'Not Always Working...';
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
            <Grid container justify={"center"} className={classes.headerGrid}>
              <Typography variant={"h3"} className={classes.headerText}>
                Clayton Phillips-Dorsett
              </Typography>
            </Grid>
            <Grid container spacing={8}>
              {modalInfo.map((info, i) => (
                <Grid key={i} item sm={4} xs={12}>
                  <Button
                    fullWidth
                    variant={"contained"}
                    onClick={() => props.handleToggleModal(i)}
                  >
                    {info.btnIcon}
                    <div className={classes.modalOpenBtnText}>{info.name}</div>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          open={Boolean(modal.name)}
          fullWidth
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