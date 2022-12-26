import { useNavigate } from "@solidjs/router"
import {
  Card,
  CardActionArea,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@suid/material"
import { RoutePath } from "../../RoutePath"

export function ShootingRangePreview(props: {
  name: string
  imageName: string
  details: string[]
  url: string
}) {
  const navigate = useNavigate()

  return (
    <Card>
      <CardActionArea
        onClick={() => navigate(`/${RoutePath.ShootingRanges}/${props.url}`)}
      >
        <img src={`images/pages/shooting-ranges/${props.imageName}.jpg`} />
        <CardContent>
          <Typography variant="h5">{props.name}</Typography>
        </CardContent>
        <List>
          {props.details.map((detail) => (
            <ListItem>
              <ListItemText primary={detail} />
            </ListItem>
          ))}
        </List>
      </CardActionArea>
    </Card>
  )
}
