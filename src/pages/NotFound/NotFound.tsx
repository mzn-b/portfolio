import { Stack, Typography, Link } from "@mui/material";

export const NotFound = () => {
  return (
    <Stack>
      <Typography variant="h1">404 Not found</Typography>
      <Link href="/" variant="body2">
        Return to Homepage
      </Link>
    </Stack>
  );
};
