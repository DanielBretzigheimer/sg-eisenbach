import { Grid, Stack, Typography } from "@suid/material"
import { JSX } from "solid-js"

type TeamCategoryProps = {
  imageSrc: string
  title: string
  children?: JSX.Element
}

export function TeamCategory(props: TeamCategoryProps) {
  return (
    <Grid item xs={12} md={6} xl={3}>
      <img
        style={{ height: "150px", "object-fit": "contain" }}
        src={props.imageSrc}
      />
      <Typography variant="h4" textAlign="center" gutterBottom>
        {props.title}
      </Typography>
      <Stack direction="column" alignItems="center">
        {props.children}
      </Stack>
    </Grid>
  )
}
