import { useNavigate } from "@solidjs/router"
import { Box, Link, Stack, Typography } from "@suid/material"
import { RoutePath } from "../../RoutePath"

export function ShootingRangePreview(props: {
  name: string
  imageName: string
  details: string[]
  url: string
}) {
  const navigate = useNavigate()

  return (
    <Stack mt={2}>
      <img src={`images/pages/shooting-ranges/${props.imageName}.jpg`} />
      <Box margin="auto" pt={2}>
        <Link
          onClick={() => navigate(`/${RoutePath.ShootingRanges}/${props.url}`)}
        >
          {props.name}
        </Link>
      </Box>
      <ul>
        {props.details.map((detail) => (
          <li>{detail}</li>
        ))}
      </ul>
    </Stack>
  )
}
