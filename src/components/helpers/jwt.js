export const getJwt = () => {
  const tokens = {
    accessToken: localStorage.getItem('access_token'),
    refreshToken: localStorage.getItem('refresh_token')
  };
  return tokens;
};
