import { useNavigate } from "@solidjs/router"
import { Stack } from "@suid/material"
import Box from "@suid/material/Box"
import Link from "@suid/material/Link"
import Typography from "@suid/material/Typography"
import { RoutePath } from "../RoutePath"

export function Footer() {
  const navigate = useNavigate()

  return (
    <Box gap={2} sx={{ display: "flex" }} mb={2}>
      <Stack flexGrow={1}>
        <Typography variant="caption">© 2020 SG Eisenbach 1958 e.V.</Typography>
      </Stack>
      <Link onClick={() => navigate(`/${RoutePath.Imprint}`)}>Impressum</Link>
      <Link onClick={() => navigate(`/${RoutePath.DataProtection}`)}>
        Datenschutz
      </Link>
    </Box>
  )
}
