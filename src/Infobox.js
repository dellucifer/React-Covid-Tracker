import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Infobox({title,cases,total}) {
  return (
    <Card className='infoBox'>
        <CardContent>
            {/* Title Covid cases */}
            <Typography className='infoBox__title' color="textSecondary">
                {title}
            </Typography>

            {/* +120 cases */}
            <h2 className='infoBox__cases'>{cases}</h2>

            {/* 1.2M Total */}
            <Typography className='infoBox__total' color="textSecondary">
                {total} Total
            </Typography>
        </CardContent>
    </Card>
  )
}

export default Infobox
