import { useState, useEffect } from "react";
import Card from "./Card";
import Filter from "./Filter";

const ListJobs = ({listData}) => {
    const [listTags, setListTags] = useState([]);
    const [listDataFilter, setListDataFilter] = useState([]);
    const [listDataFilterTags, setListDataFilterTags] = useState([]);
    
    useEffect(() => {
        setListDataFilter([...listData]);
    }, listData);
    
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
        filterList(newValue);
        setListTags(prevListTag);
    }
    const handleClearAllTags = (newValue) => {
        setListDataFilter([...listData]);
        setListTags(newValue);
    }
    const handleClearTag = (delTag) => {
        let index = listTags.indexOf(delTag);
        listTags.splice(index, 1);
        setListTags([...listTags]);
        if(listTags.length > 0){
            filterListDelete();
        }else{
            setListDataFilter([...listData]);
        }
    }
    const filterList = (filterValue) => {
        let parcialFilter = listDataFilter.filter((job) => {
            if(job.level === filterValue){ return job }
            if(job.role === filterValue){ return job }
            if(job.languages.includes(filterValue)){ return job }
        })
        setListDataFilter([...parcialFilter]);
    }

    const filterListDelete = () => {
        let resultadosParciales = [];
        listTags.map((tag) => {
            let parcialFilterData = listData.filter((job) => {
                if(job.level === tag) return job 
                if(job.role === tag) return job 
                if(job.languages.includes(tag)) return job
            });
            resultadosParciales = [...resultadosParciales, ...parcialFilterData];
        })
        
        const parcialFilterClean = resultadosParciales.reduce((parcialArr,item)=>{
            if(!parcialArr.includes(item)){
                parcialArr.push(item);
            }
            return parcialArr;
        },[])
        setListDataFilter([...parcialFilterClean]);
    }

    return (
    <div className="jobs__list">
        <div className="list__content">
            <Filter selectedDetail={listTags} onClearAllTags={handleClearAllTags} onClearTag={handleClearTag}/>
            {listDataFilter.map((item)=>{
                return <Card key={item.id}  jobCard={item} onChangeTags={handleChangeTags} />
            })}
        </div>
    </div>
  )
}

export default ListJobs