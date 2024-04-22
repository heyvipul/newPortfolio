import GitHubCalendar from "react-github-calendar";
import "../../App.css"


export const Github = () => {

    return (
        <>
            <div className={"section "} id="github-div" style={{marginTop:"-14rem"}} data-aos="fade-right">
                <h2 className="section__title different">
                    Days I <span className="different"> Code</span>
                </h2>
                <GitHubCalendar
                    username="heyvipul"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={16}
                />
            </div>
        </>
    );
};
