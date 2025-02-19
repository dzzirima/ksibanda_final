import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";
import CircularProgress from '@mui/material/CircularProgress';

interface props {
    label:string,
    size: number
}
export default function SubmitButton(passedData:props) {
    const { pending } = useFormStatus();
    const {label ,size } = passedData
    return (
      <Button variant="contained"  type = "submit" className="mt-4 w-full bg-green-600 hover:bg-green-500" disabled = {pending? true: false}>
        {`${label}`} { pending ?(<CircularProgress    className="ml-auto h-5 w-5" size={size} color="success"/>):<></>} 
      </Button>
    );
}