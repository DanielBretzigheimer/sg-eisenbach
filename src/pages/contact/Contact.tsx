import { useNavigate } from "@solidjs/router"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@suid/material"
import { RoutePath } from "../../RoutePath"

export default function Contact() {
  const nav = useNavigate()

  return (
    <Box mt={2}>
      <Typography variant="h3">Kontakt</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Öffnungszeiten</Typography>
            </CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Dienstag</TableCell>
                  <TableCell>18:00 - 21:00 Uhr</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Freitag</TableCell>
                  <TableCell>19:00 - 23:00 Uhr</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Samstag</TableCell>
                  <TableCell>15:00 - 18:00 Uhr</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sonntag</TableCell>
                  <TableCell>09:00 - 12:00 Uhr</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea
              onClick={() =>
                (window.location.href = "https://goo.gl/maps/55MD6xgH3XLEAhPb8")
              }
            >
              <CardContent>
                <Typography variant="h5">Anfahrt</Typography>
                <Typography>Schützengesellschaft Eisenbach</Typography>
                <Typography>Naturparkstraße 3</Typography>
                <Typography>63785 Obernburg am Main</Typography>
              </CardContent>
            </CardActionArea>
            <CardContent>
              <Typography variant="h5">Telefon</Typography>
              <Link href="tel:+49 6022 38859">+49 6022 38859</Link>
            </CardContent>
            <CardContent>
              <Typography variant="h5">E-Mail</Typography>
              <Link href="mailto:info@sg-eisenbach1958.de">
                info@sg-eisenbach1958.de
              </Link>
            </CardContent>
            <CardContent>
              <Typography variant="h5">Schnuppertraining</Typography>
              <Link onClick={() => nav(`/${RoutePath.Contact}/trial-shooting`)}>
                Mehr Infos
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">Vorstandschaft</Typography>
            </CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>1. Schützenmeister</TableCell>
                      <TableCell>
                        <Link href="mailto:1.sm@sg-eisenbach1958.de">
                          Wolfgang Heß
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2. Schützenmeister</TableCell>
                      <TableCell>
                        <Link href="mailto:2.sm@sg-eisenbach1958.de">
                          Manuel Schott
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sportleiter</TableCell>
                      <TableCell>
                        <Link href="mailto:sportleiter-gewehr@sg-eisenbach1958.de">
                          Christian Otterstedt
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sportleiter Pistole</TableCell>
                      <TableCell>
                        <Link href="mailto:sportleiter-pistole@sg-eisenbach1958.de">
                          Jochen Beez
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Schriftführer</TableCell>
                      <TableCell>
                        <Link href="mailto:sf@sg-eisenbach1958.de">
                          Angela Hepp
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Kassier</TableCell>
                      <TableCell>
                        <Link href="mailto:kassier@sg-eisenbach1958.de">
                          Sandra Schott
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jugendleiter</TableCell>
                      <TableCell>
                        <Link href="mailto:1.jl@sg-eisenbach1958.de">
                          Daniel Bretzigheimer
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="images/pages/contact/board.jpg" />
                <Box m={1} mt={0}>
                  <Typography variant="caption" sx={{ hyphens: "none" }}>
                    Von links nach rechts: Daniel Bretzigheimer, Jochen Beez,
                    Manuel Schott, Sandra Schott, Wolfgang Heß, Angela Hepp,
                    Christian Otterstedt
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
