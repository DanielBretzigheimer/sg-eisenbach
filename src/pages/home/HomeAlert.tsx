import { useNavigate } from "@solidjs/router"
import { Alert, AlertTitle, Button } from "@suid/material"
import { RoutePath } from "../../RoutePath"

type HomeAlertProps = {
  title: string
  content: string
  action: {
    text: string
    url: string
  }
}

export function HomeAlert(props: HomeAlertProps) {
  const navigate = useNavigate()

  return (
    <Alert
      severity="info"
      action={
        <Button
          color="inherit"
          size="small"
          onClick={() => navigate(props.action.url)}
        >
          {props.action.text}
        </Button>
      }
    >
      <AlertTitle>{props.title}</AlertTitle>
      {props.content}
    </Alert>
  )
}
