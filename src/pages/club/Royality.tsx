import { Grid, Typography } from "@mui/material"
import { CaptionImage } from "../../controls/CaptionImage"

type RoyalityProps = {
  year: string
  image?: {
    src: string
    caption: string
  }
  adult: {
    king: string
    firstKnight: string
    secondKnight: string
    robinHood?: string
  }
  youth: {
    king: string
    firstKnight: string
    secondKnight: string
  }
}

export function Royality(props: RoyalityProps) {
  return (
    <Grid item container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Königshaus {props.year}
        </Typography>
        {props.image && (
          <CaptionImage src={props.image.src} label={props.image.caption} />
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Erwachsene</Typography>
        <Typography variant="overline">König</Typography>
        <Typography gutterBottom>{props.adult.king}</Typography>
        <Typography variant="overline">1. Ritter</Typography>
        <Typography gutterBottom>{props.adult.firstKnight}</Typography>
        <Typography variant="overline">2. Ritter</Typography>
        <Typography>{props.adult.secondKnight}</Typography>
        {props.adult.robinHood && (
          <>
            <Typography variant="overline">Robin Hood</Typography>
            <Typography>{props.adult.robinHood}</Typography>
          </>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Jugend</Typography>
        <Typography variant="overline">König</Typography>
        <Typography gutterBottom>{props.youth.king}</Typography>
        <Typography variant="overline">1. Ritter</Typography>
        <Typography gutterBottom>{props.youth.firstKnight}</Typography>
        <Typography variant="overline">2. Ritter</Typography>
        <Typography>{props.youth.secondKnight}</Typography>
      </Grid>
    </Grid>
  )
}
