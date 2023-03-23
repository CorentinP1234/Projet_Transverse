// import React from 'react'
// import Card from '@mui/material/Card';

// function MissionCard() {
//   return (
//     <Card>
//       <button fullWidth variant={tier.buttonVariant} >
//         <CardHeader
//           title={tier.title}
//           subheader={tier.subheader}
//           titleTypographyProps={{ align: 'center' }}
//           action={tier.title === 'Pro' ? <StarIcon /> : null}
//           subheaderTypographyProps={{
//             align: 'center',
//           }}
//           sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'light'
//                 ? theme.palette.grey[200]
//                 : theme.palette.grey[700],
//           }}
//         />
//       </button>
//       <CardContent>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'baseline',
//             mb: 2,
//           }}
//         >
//           <Typography component="h2" variant="h4" color="text.primary">
//             {tier.price}XP
//           </Typography>
//         </Box>
//         <ul>
//           {tier.description.map((line) => (
//             <Typography
//               component="li"
//               variant="subtitle1"
//               align="center"
//               key={line}
//             >
//               {line}
//             </Typography>
//           ))}
//         </ul>
//       </CardContent>
//       <CardActions>
//         <Button fullWidth variant={tier.buttonVariant}>
//           {tier.buttonText}
//         </Button>
//       </CardActions>
//     </Card>
//   )
// }

// export default MissionCard
