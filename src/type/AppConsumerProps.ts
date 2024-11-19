import React, { ReactNode } from "react";
import { AppContexte } from "./AppContexte";
import { AppActions } from "./AppActions";

export interface AppConsumerProps {
    children : React.ReactNode | ((value : {state : AppContexte ; dispatch : React.Dispatch<AppActions>}) => React.ReactNode)
}