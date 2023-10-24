import React from 'react';

export default function SignupStages(props = {stages, activeStage, stageCount}) {
    return (
        <div className="flex flex-col justify-center items-center bg-white mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
                {
                    props?.stages?.map((stage, index) => {
                        let isActive = props?.activeStage === stage?.title;
                        let ctnCls = "flex items-center space-x-2.5";
                        let indexCls = "flex items-center justify-center w-8 h-8 rounded-full shrink-0 border";
                        ctnCls = isActive ? ctnCls + " text-primary dark:text-primary" : ctnCls + " text-gray dark:text-gray";
                        indexCls = isActive ? indexCls + " border-primary dark:border-primary" : indexCls + " border-gray dark:border-gray"
                        
                        return (<li key={stage+"-"+index+"-"+props.stageCount} className={ctnCls}>
                            <span className={indexCls}>
                                {props.stageCount ? props.stageCount : 1 + index}
                            </span>
                            <span>
                                <h3 className="font-medium leading-tight">{stage?.title}</h3>
                                <p className="text-sm">{stage?.desc}</p>
                            </span>
                        </li>)
                    })
                }
            </ol>
        </div>
    )
}
