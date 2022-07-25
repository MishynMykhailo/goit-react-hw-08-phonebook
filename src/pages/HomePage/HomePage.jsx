import logoReact from '../HomePage/logoReact.png';
import s from '../HomePage/HomePage.module.css';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        component="img"
        src={logoReact}
        className={s.rotate}
        alt="React logo"
        sx={{ mb: 2 }}
      />
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
