import { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";

const ListJobs = ({listData}) => {
    const [listTags, setListTags] = useState([]);
    const handleChangeTags = (newValue) => {
        let prevListTag = [];
        if(listTags){
            if(!listTags.includes(newValue)){
                prevListTag = [...listTags, newValue];
            }else{
                prevListTag = [...listTags];
            }
        }else{
            prevListTag = listTags ? [...listTags, newValue] : newValue;
        }
        setListTags(prevListTag);
    }
    const handleClearAllTags = (newValue) => {
        setListTags(newValue);
    }
    const handleClearTag = (delTag) => {
        let index = listTags.indexOf(delTag);
        listTags.splice(index, 1);
        setListTags([...listTags]);
    }
    return (
    <div className="jobs__list">
        <Filter selectedDetail={listTags} onClearAllTags={handleClearAllTags} onClearTag={handleClearTag}/>
        {listData.map((item)=>{
            return <Card key={item.id}  jobCard={item} onChangeTags={handleChangeTags} />
        })}
    </div>
  )
}

export default ListJobs