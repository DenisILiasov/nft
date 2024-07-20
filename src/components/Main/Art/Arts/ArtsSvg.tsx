import { FC } from "react";

interface IArtsSvg{
    name: string
}

const ArtsSvg: FC<IArtsSvg> = ({name}) => {
    switch(name){
        case 'time': 
            return(
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5C17.52 2.5 22 6.98 22 12.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.71 15.68L12.61 13.83C12.07 13.51 11.63 12.74 11.63 12.11V8.01001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'price': 
            return(
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.89998 9.1L11.7 7C11.9 6.9 12.1 6.9 12.4 7L17.2 9.1C17.6 9.3 18 8.8 17.7 8.4L12.7 2.3C12.4 1.9 11.8 1.9 11.5 2.3L6.49997 8.4C6.09997 8.8 6.49998 9.3 6.89998 9.1Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.89998 14.9L11.7 17C11.9 17.1 12.1 17.1 12.4 17L17.2 14.9C17.6 14.7 18 15.2 17.7 15.6L12.7 21.7C12.4 22.1 11.8 22.1 11.5 21.7L6.49997 15.6C6.09997 15.2 6.49998 14.7 6.89998 14.9Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 9.3999L6.79999 11.9999L12 14.5999L17.2 11.9999L12 9.3999Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        default: 
            return(
                <div>
                    img
                </div>
            )
    }
};
 
export default ArtsSvg;