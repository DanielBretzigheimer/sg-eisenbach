import { useNavigate } from "@solidjs/router"
import { Grid, Link, Typography } from "@suid/material"
import { RoutePath } from "../../RoutePath"

export function ShootingRangeBow() {
  const nav = useNavigate()

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom variant="h2">
          Bogenplatz
        </Typography>
        <Typography gutterBottom>
          Unser Bogenplatz befindet sich hinter dem Schützenhaus. Er bietet bis
          zu 6 Schützen gleichzeitig die Möglichkeit auf unterschiedlichen
          Entfernungen zu schießen. Für Anfänger, Kinder und Jugendliche sind 2
          Scheiben im Abstand von 10 Metern aufgestellt. Für Wettkämpfe wird
          wahlweise auf 18 oder 30 Metern geschossen. Die am weitesten entfernte
          Scheibe steht auf 40 Metern.
        </Typography>
        <Typography gutterBottom>
          Seit dem Jahr 2019 kann unser Bogenplatz auch beleuchtet werden,
          wodurch ein Benutzen des Platzes auch zu später Stunde möglich ist.
          Hierzu sind im Abstand von einigen Metern Laternen aufgestellt worden,
          die den gesamten Platz mit Licht erfüllen.
        </Typography>
        <Typography>
          Der Schlüssel für den Bogenplatz kann im Schützenhaus vom
          Wirtschaftsdienst abgeholt werden. Vor der Benutzung des Platzes ist
          die Absperrkette aufzuhängen, welche den Fußweg, der parallel zum
          Platz verläuft, absperrt. Auf dem Bogenplatz stehen verschiedene
          Sitzgelegenheiten für Zuschauer zur Verfügung. Getränke können aus dem
          Schützenhaus mitgenommen werden.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom variant="h2">
          Bogenhalle
        </Typography>
        <Typography>
          Die Bogenhalle nutzt den hinteren Teil des{" "}
          <Link onClick={() => nav(`/${RoutePath.ShootingRanges}/50-meter`)}>
            50 Meter Standes
          </Link>
          . Sie wurde im Jahr 2017 zusätzlich zum Bogenplatz errichten um auch
          im Winter den Bogensport ausüben zu können. In der Halle kann auf 10
          oder 18 Metern geschossen werden. In der Mitte des 50 Meter Standes
          wird ein Sicherungsnetz aufgespannt, das Pfeile, die ihr Ziel
          verfehlen auffängt.
        </Typography>
      </Grid>
    </Grid>
  )
}
