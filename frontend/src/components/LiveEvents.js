
import "./LiveEvents.css";
export default function LiveEvents(){
    return(
    <>
    <div className="total">
        <h3>The Best Of Live Events</h3>
        <div className="live1">
            <a className="ms-2" href="#">
                <img src="./images/liveevent1.avif" alt="" width={"100%"}/>
            </a>
            <a className="ms-5 " href="#">
                <img src="./images/liveevent2.avif" alt="" width={"100%"}/>
            </a>
            <a className="ms-5 border border-danger border-rounded-pill" href="#">
                <img src="./images/liveevent3.avif" alt="" width={"100%"}/>
            </a>
        </div>
    </div>
    
    </>
    )
}