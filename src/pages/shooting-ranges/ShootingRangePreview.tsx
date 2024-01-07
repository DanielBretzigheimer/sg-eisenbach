import { useNavigate } from "react-router-dom"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"
import { RoutePath } from "../../RoutePath"

export function ShootingRangePreview(props: {
  name: string
  imageName: string
  details: string[]
  url: string
}) {
  const navigate = useNavigate()

  return (
    <Card sx={{ height: "100%" }}>
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
