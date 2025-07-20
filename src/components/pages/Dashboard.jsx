import React from "react";
import { Box, Grid, Paper, Typography } from '@mui/material';

function StatCard({ title, value }) {
  return (
    <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h6" color="textSecondary">{title}</Typography>
      <Typography variant="h4" fontWeight="bold">{value}</Typography>
    </Paper>
  );
}

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Users" value={1523} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Orders" value={876} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Revenue" value="$24,300" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Products" value={128} />
        </Grid>
      </Grid>

      {/* Placeholder for chart or recent activity */}
      <Box mt={4} p={3} component={Paper} elevation={3} minHeight={200}>
        <Typography variant="h6" color="textSecondary">
          Sales Chart (coming soon)
        </Typography>
      </Box>
    </Box>
  );
}
