import { makeStyles } from "@material-ui/core";

export const useWeatherAppStyles = makeStyles({
  content: {
    padding: "10px",
  },

  fxVCenter: {
    display: "flex !important",
    alignItems: "center",
  },

  person: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "20px",
    color: "rgba(0, 0, 0, 0.8)",
  },
  background: {
    backgroundColor: "#ffffff",
  },
  profileCard: {
    marginBottom: "20px",
    borderRadius: "3px",
  },
  blackClr: {
    color: "rgba(0, 0, 0, 1) !important",
  },
  bgTheme: {
    // backgroundColor: "#eeeeee !important",
    backgroundColor: "#747373 !important",
  },

  listingContainer: {
    // minHeight: "174px",
    padding: "10px 5px",
    // maxHeight: "176px",
    height: "32vh",
    overflowY: "auto",
  },
  newListItem: {
    cursor: "pointer",
    background: "#ffffff",
    color: "#4c4c4c",
    padding: "5px 5px",
    borderRadius: "2px",
    marginBottom: "4px",
    "&:hover": {
      backgroundColor: "#eeeeee",
      transition: "0.2s",
    },
  },
  avatarIcon: {
    height: "32px",
    width: "32px",
    marginRight: "10px",
    borderRadius: "2px",
    position: "relative",
  },
  squareRoundedAvatar32: {
    height: "32px",
    width: "32px",
    borderRadius: "2px",
  },
  newListItemTitle: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#000000",
  },
  ellipsisBy210: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "205px",
    minWidth: "205px",
  },
  squareBadge: {
    backgroundColor: "#f0e2eb",
    fontSize: "11px",
    fontWeight: 600,
    color: "#e63d72",
    borderRadius: "2px",
    height: "20px",
    width: "20px",
    textAlign: "center",
    lineHeight: "18px",
  },
  mlAuto: {
    marginLeft: "auto",
  },
  regContainer: {
    maxWidth: "1140px !important",
    margin: "0 auto",
  },
});
