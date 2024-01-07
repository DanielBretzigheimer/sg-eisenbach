import { Box, Link, Typography } from "@mui/material"

type TeamDetailProps = {
  title: string
  members: TeamMember[]
  resultLink: string
}

type TeamMember = {
  name: string
  isLeader?: boolean
}

export function TeamDetails(props: TeamDetailProps) {
  return (
    <Box mt={2}>
      <Typography variant="h3" gutterBottom>
        {props.title}
      </Typography>
      {props.members.map((member) => (
        <Typography gutterBottom>
          {member.name}
          {member.isLeader && " (MF)"}
        </Typography>
      ))}
      <Box mt={4}>
        <Link href={props.resultLink}>Ergebnisse</Link>
      </Box>
    </Box>
  )
}
