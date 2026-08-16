import { useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material"

type EventData = {
  title: string
  date: string
  description: string
  image: string
  path: string
}

type EventCardProps = {
  event: EventData
}

export function EventCard({ event }: EventCardProps) {
  const navigate = useNavigate()

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 4,
        },
      }}
    >
      <CardActionArea
        onClick={() => navigate(event.path)}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image={event.image}
          alt={event.title}
          sx={{
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="caption"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              display: "block",
            }}
          >
            📅 {event.date}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 1,
              mt: 1,
            }}
          >
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
