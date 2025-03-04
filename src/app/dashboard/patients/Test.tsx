import { Button } from "@mui/material";
import { checkIfMinted } from "./test_scripts/test_nteract";

import { addAccessor, test_2 } from "./test_scripts/test_new";
import { addAccessor_2 } from "./interact";

export default function Test() {

    const userAction = async () => {
        //@ts-ignore
        await checkIfMinted(window.ethereum.selectedAddress);
    }
    return (
        <div>
        <h1> 

            <Button onClick={addAccessor_2}> Test Func</Button>
        </h1>
        </div>
    );
    }