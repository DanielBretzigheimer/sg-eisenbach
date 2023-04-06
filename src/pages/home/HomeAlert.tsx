import { useNavigate } from "@solidjs/router"
import { Alert, AlertTitle, Button } from "@suid/material"

type HomeAlertProps = {
  title: string
  content: string
  action: {
    text: string
    /**
     * May be a url or an element id.
     */
    target: string
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
          onClick={() =>
            props.action.target.includes("/")
              ? navigate(props.action.target)
              : document.getElementById(props.action.target).scrollIntoView()
          }
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
