import { Box, Card, CardContent, Grid, Stack, Typography } from "@suid/material"
import { JSX } from "solid-js"

type TeamCategoryProps = {
  imageSrc: string
  title: string
  children?: JSX.Element
}

export function TeamCategory(props: TeamCategoryProps) {
  return (
    <Grid item xs={12} md={6} xl={3}>
      <Card sx={{ height: "100%" }}>
        <Box pl={2} pr={2} pt={2}>
          <img
            style={{ height: "150px", "object-fit": "contain" }}
            src={props.imageSrc}
          />
        </Box>
        <Box>{props.children}</Box>
      </Card>
    </Grid>
  )
}
