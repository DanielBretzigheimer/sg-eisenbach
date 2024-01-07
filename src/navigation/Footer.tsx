import { useNavigate } from "react-router-dom"
import { Stack } from "@mui/material"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import { RoutePath } from "../RoutePath"

export function Footer() {
  const navigate = useNavigate()

  return (
    <Box gap={2} sx={{ display: "flex" }} pb={2}>
      <Stack flexGrow={1}>
        <Typography variant="caption">
          © {new Date().getFullYear()} SG Eisenbach 1958 e.V.
        </Typography>
      </Stack>
      <Link onClick={() => navigate(`/${RoutePath.Imprint}`)}>Impressum</Link>
      <Link onClick={() => navigate(`/${RoutePath.DataProtection}`)}>
        Datenschutz
      </Link>
    </Box>
  )
}
