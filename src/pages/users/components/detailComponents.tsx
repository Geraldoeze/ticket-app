

interface DetailItemProps {
    header?: string; 
    text?: React.ReactNode;
    height?:number;
    headerWidth?:any;
}

// export const DetailRow = ({header, headerWidth, height, text}: DetailRowProps) => {
//       <div className="flex gap-1 mb-3">
//        <p className="w-40 text-gray-600" style={{ width: headerWidth }}>
//         {header}
//       </p>
//       <div style={{ height: height }} className="rounded-md w-full text-gray-500 text-sm">
//         <>{text}</>
//       </div>
//       </div>
//   }

export const DetailItem = ({
    header,
    headerWidth,
    height,
    text,
  }: DetailItemProps) => {
    const headerStyle = headerWidth ? `w-${headerWidth}` : "";
    const containerStyle = height ? `h-${height}` : "";
  
    return (
      <div className={`flex gap-2 mb-10 font-medium items-center`}>
        <p className={`w-50 text-gray-600 self-center ${headerStyle}`}>{header}:</p>
        <div className={`rounded-md w-full text-black dark:text-bodydark  text-md ${containerStyle}`}>
          {text}
        </div>
      </div>
    );
  };