import React from 'react';
import {FaUbuntu} from 'react-icons/fa';

interface TabsProps {
    tabs?: any; 
    onChange?: (item: any)=> void; 
    activeTab?: string;
    children?: React.ReactNode;
}

interface TabProps {
    children?: React.ReactNode;
    tab?: string;
    activeTab: string;
    onChange: (tab: string) => void; 
}

export const Tab: React.FC<TabProps> = ({children, tab, activeTab, onChange}) => {
    let val: any = tab || children
    let classNames = "border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base text-primary";
    let clsN = val === activeTab ? classNames+' flex flewx-row text-primary border-primary' : classNames+' flex flewx-row border-transparent';
    return (
        <a onClick={() => onChange(val)} className={clsN} href="#/">
            {children} {tab}
        </a>
    )  
}

export default function Tabs({tabs, onChange, activeTab, children}: TabsProps) {
    let classNames = "border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base text-primary";

    return (
        <div className="rounded-sm border-stroke bg-white p-2 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="mb-3 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">

                {
                    tabs ? tabs?.map((item: any, index: string) => {
                        let clsN = activeTab === item ? classNames+' flex flewx-row text-primary border-primary' : classNames+' flex flewx-row border-transparent'
                        return (<a key={index+'-'+item} 
                        onClick={() => typeof onChange === 'function' ? onChange(item) : {}} 
                        className={clsN} 
                        href="#/">
                        <FaUbuntu style={{marginTop:'5px', marginRight: '5px'}}/>
                        {item}
                    </a>)  
                    }): children                    
                }
            </div>
        </div>
    )
}

