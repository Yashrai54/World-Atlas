import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import footer from "./footer.json"
export const Footers=()=>{
    const footerIcon={
        MdPlace:<MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>
    }
    return(
        <footer className="footer">
            <div className="container-footer grid grid-three-cols">
                {
                    footer.map((e,index)=>{
                        const {icon,title,details}=e;
                        return(
                           <div className="footer-contact" key={index}>
                               <div className="icon">{footerIcon[icon]}</div>
                               <div className="footer-text">
                                  <p>{title}</p>
                                  <p>{details}</p>
                               </div>
                           </div>
                        )
                    })
                }
            </div>
        </footer>
    )
 }