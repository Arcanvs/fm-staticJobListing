import BackGround from "../BackGround";
import ListJobs from "../ListJobs";
import data from "../../data/data.json";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [jsonData, setJsonData] = useState(null);
    useEffect(() => {
        setJsonData(data);
    }, []);

  return (
    <div className="jobs">
        <BackGround />
        { jsonData && <ListJobs listData={jsonData} /> }        
        
    </div>
  )
}

export default HomePage