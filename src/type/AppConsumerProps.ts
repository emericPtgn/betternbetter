import React, { ReactNode } from "react";
import { AppContexte } from "./AppContexte";
import { AppActions } from "./AppActions";

export interface AppConsumerProps {
    children : ReactNode | ((value : {state : AppContexte ; dispatch : React.Dispatch<AppActions>}) => ReactNode)
}