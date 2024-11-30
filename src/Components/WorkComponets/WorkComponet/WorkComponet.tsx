import React from "react";
import WorkHeros from "../WorkLayouts/WorkHeros/WorkHeros";
import WorkHeaders from "../WorkLayouts/WorkHeaders/WorkHeaders";
import Styles from "./WorkComponet.module.css";



export const WorkComponet: React.FC = () => {
    return (
        <div className={Styles.WorkComponetContainer}>
            <WorkHeaders />
            <WorkHeros />
        </div>
    )
}
