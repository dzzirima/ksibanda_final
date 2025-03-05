import { Button } from "@mui/material";
import { checkIfMinted } from "./test_scripts/test_nteract";

import { addAccessor, checkIfHasAccess } from "./test_scripts/test_new";
import { addAccessor_2 } from "./interact";

export default function Test() {

    const userAction = async () => {
        //@ts-ignore
        await checkIfMinted(window.ethereum.selectedAddress);
    }
    return (
        <div>
        <h1> 

            <Button onClick={checkIfHasAccess}> Test Func</Button>
        </h1>
        </div>
    );
    }