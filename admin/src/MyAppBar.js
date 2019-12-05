import React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './myFoodLogo-branco.png';
import styled from 'styled-components';
// import Logo from './Logo';

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
});

const Logo = styled.img`
  height: 6vh;
`;

const MyFoodAppBar = styled(AppBar)`
  &&&&& {
    background-color: #f78f1e;
  }
`;

const MyAppBar = props => {
  const classes = useStyles();
  return (
    <MyFoodAppBar {...props}>
      <Typography variant="h6" color="inherit" className={classes.title} id="react-admin-title" />
      <Logo src={logo} alt="myFood logo" title="myFood" />
      <span className={classes.spacer} />
    </MyFoodAppBar>
  );
};

export default MyAppBar;
