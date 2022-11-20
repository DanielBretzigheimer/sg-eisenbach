import { useNavigate } from "@solidjs/router"
import Box from "@suid/material/Box"
import Link from "@suid/material/Link"
import Typography from "@suid/material/Typography"
import { RoutePath } from "../RoutePath"

export function Footer() {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Typography sx={{ flexGrow: 1 }}>
        © 2020 Schützengesellschaft Eisenbach 1958 e.V.
      </Typography>
      <Link onClick={() => navigate(`/${RoutePath.Imprint}`)}>Impressum</Link>
      <Link onClick={() => navigate(`/${RoutePath.DataProtection}`)}>
        Datenschutz
      </Link>
    </Box>
  )
}
