import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    screen: {
      backgroundColor: theme.palette.primary.light,
    },
    text: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    marginRight: {
      marginRight: theme.spacing(1),
    },
  })
);

export default useStyles;
