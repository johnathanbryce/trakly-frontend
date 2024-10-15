import React from "react";
import { Button, Typography, Box, Paper } from "@mui/material";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Paper elevation={3} role="alert" sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="h6" color="error" gutterBottom>
        Something went wrong
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography
          variant="body2"
          component="pre"
          sx={{ whiteSpace: "pre-wrap" }}
        >
          {error.message}
        </Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
        Please refresh the app.
      </Button>
    </Paper>
  );
};

export default ErrorFallback;
