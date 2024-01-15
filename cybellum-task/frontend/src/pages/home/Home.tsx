import { Card, CardContent, Typography } from '@mui/material';
import { useGetNotificationMutation } from 'api/notifications/notifications';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { accessTokenSelector } from "../../slices/user/userSlice";
import { useAppSelector } from 'app/hooks';
import { StyledBox } from './home.styled';

export default function Home() {
  const navigate = useNavigate();
  const [trigger, { data }] = useGetNotificationMutation();
  const accessToken = useAppSelector(accessTokenSelector);

  useEffect(() => {
    if (accessToken) {
      trigger({ id: "1" });
    } else {
      navigate("/login");
    }
  }, [accessToken, navigate, trigger]);

  return (
    <StyledBox>
      <Card sx={{ maxWidth: 500, textAlign: 'center' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ mt: 4 }}>
            {data?.description}
          </Typography>
        </CardContent>
      </Card>
    </StyledBox>
  );
}
