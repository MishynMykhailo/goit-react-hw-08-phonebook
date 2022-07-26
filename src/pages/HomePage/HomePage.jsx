import { ReactComponent as LogoReact } from '../HomePage/logoReact.svg';
import s from '../HomePage/HomePage.module.css';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <LogoReact
          className={s.rotate}
          height="100"
          title="LogoReact"
          alt="LogoReact"
          fill="#836bf2"
          // fill="#61dafb" standart color - react logo
        />
      </Box>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          textAlign: 'center',
        }}
      >
        React Apps for saving contacts to phonebook.
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          mt: 2,
          mb: 2,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        Let's try to get in.
      </Typography>
      <Button
        onClick={() => navigate('/login')}
        variant="contained"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Try it now
      </Button>
    </>
  );
};
export default HomePage;
