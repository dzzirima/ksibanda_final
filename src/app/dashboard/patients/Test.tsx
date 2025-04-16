import { Button } from "@mui/material";
import { checkIfMinted } from "./test_scripts/test_nteract";

import { addAccessor, checkIfHasAccess } from "./test_scripts/test_new";
import { addAccessor_2 } from "./interact";

export default function Test() {

    const userAction = async () => {
        //@ts-ignore
        await checkIfHasAccess()
    }
    return (
        <div>
        <h1> 

            <Button onClick={userAction}> Test Func</Button>
        </h1>
        </div>
    );
    }