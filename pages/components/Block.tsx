import { ReactNode } from 'react';

interface Props {
  className: string;
  children: ReactNode;
}

const Block = (props: Props) => {
    return (
        <>
        <div className={`${ props.className } p-6 bg-black bg-opacity-30 rounded-xl backdrop-blur-sm border-2 border-neutral-800 `}>
            {props.children}
        </div>
        </>
    )
}

export default Block;
