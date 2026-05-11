import { useNavigate } from "react-router-dom"
import { Alert, AlertTitle, Button } from "@mui/material"

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

  function handleAction() {
    if (
      props.action.target.startsWith("http://") ||
      props.action.target.startsWith("https://")
    ) {
      window.open(props.action.target, "_blank", "noopener,noreferrer")
      return
    }

    if (props.action.target.startsWith("/")) {
      navigate(props.action.target)
      return
    }

    document.getElementById(props.action.target)?.scrollIntoView()
  }

  return (
    <Alert
      severity="info"
      action={
        <Button color="inherit" size="small" onClick={handleAction}>
          {props.action.text}
        </Button>
      }
    >
      <AlertTitle>{props.title}</AlertTitle>
      {props.content}
    </Alert>
  )
}
