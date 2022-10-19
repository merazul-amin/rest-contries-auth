import { HashLoader } from "react-spinners";
// import HashLoader from "react-spinners/HashLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Spinner() {
    return (
        <div className="sweet-loading">

            <HashLoader
                color={"#36d7b7"}
                loading={true}
                cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Spinner;