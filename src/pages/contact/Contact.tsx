import {
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@suid/material"

export default function Contact() {
  return (
    <>
      <Typography variant="h2">Kontakt</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <p>
            <Typography variant="h4">Öffnungszeiten</Typography>
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
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>
            <Typography variant="h4">Anfahrt</Typography>
            <Typography>Schützengesellschaft Eisenbach</Typography>
            <Typography>Naturparkstraße 3</Typography>
            <Typography>63785 Obernburg am Main</Typography>
            <Link href="https://goo.gl/maps/55MD6xgH3XLEAhPb8">
              Google Maps
            </Link>
          </p>
          <p>
            <Typography variant="h4">Telefon</Typography>
            <Link href="tel:+49 6022 38859">+49 6022 38859</Link>
          </p>
          <p>
            <Typography variant="h4">E-Mail</Typography>
            <Link href="mailto:info@sg-eisenbach1958.de">
              info@sg-eisenbach1958.de
            </Link>
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Vorstandschaft</Typography>
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
                  <Link href="mailto:sf@sg-eisenbach1958.de">Angela Hepp</Link>
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
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="images/pages/contact/board.jpg" />
          <Typography variant="caption">
            Von links nach rechts: Stefan Andres, Willi Korn, Isolde Müller,
            Sandra Schott, Manuel Schott, Wolfgang Heß
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
