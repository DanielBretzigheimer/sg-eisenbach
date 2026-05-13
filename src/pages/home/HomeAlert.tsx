import { useNavigate } from "react-router-dom"
import { Alert, AlertTitle, Button } from "@mui/material"

type HomeAlertProps = {
  title: string
  content: string
  action: {
    text: string
    /**
     * May be a route path, an element id, or an external url.
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
          onClick={() => {
            if (props.action.target.startsWith("http")) {
              window.open(props.action.target, "_blank", "noopener,noreferrer")
              return
            }

            if (props.action.target.startsWith("/")) {
              navigate(props.action.target)
              return
            }

            document
              .getElementById(props.action.target)
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }}
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
