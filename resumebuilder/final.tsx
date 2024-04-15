import { Padding } from "@mui/icons-material";

export const finalPage = {
    mainBox: {
        height: "88vh",
        width: "99.9%",
        mt: 4


    },
    grid: {
        padding: 4,
        ml: 10
    }
    ,
    leftgrid: {
        height: "70vh",
        ml: -2,
        mt: -2

    },
    rightgrid: {

        height: "87vh",
        ml: 7,
        width: 800

    },
    leftsidebtn1: {
        backgroundColor: "white",
        color: "#013564",
        "&.MuiInputBase-root": { border: "1px solid #013564" },
        borderRadius: 5,
        textTransform: 'capitalize',
        "&:hover": {
            backgroundColor: "#2A64AD",
            color: "white"
        }
    },
    leftsidebtn2: {
        backgroundColor: "#FE4A5A",
        color: "black", "&.MuiInputBase-root": { border: "1px solid #013564" },
        textTransform: 'capitalize',
        borderRadius: 5
    },
    paper: {
        height: "70vh",
        width: "100%",
        mt: 1,
        borderTop: "3px solid #2A64AD"
    },
    leftsidebtn3: {
        "&.MuiInputBase-root": { border: "1px solid #013564" },
        borderRadius: 5,
        textTransform: 'capitalize',
        ml: 7,
        backgroundColor: "white",
        color: "#013564",
        "&:hover": {
            backgroundColor: "#2A64AD",
            color: "white"
        }

    },
    personal: {
        fontSize: 20,
        fontWeight: 480
    },
    personal1: {
        fontSize: 14,
        fontWeight: 400,
        color: "gray"
    }

}