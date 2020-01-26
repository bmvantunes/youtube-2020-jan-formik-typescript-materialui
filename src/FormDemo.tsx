import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';

export function FormDemo() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">New Account</Typography>
        
        <CardActions>
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
