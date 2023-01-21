import Card from "./Card";
import Filter from "./Filter";

const ListJobs = ({listData}) => {
    console.log('PROPS ', listData);
    return (
    <div className="jobs__list">
        <Filter selectedDetail={false} />
        {listData.map((item)=>{
            return <Card key={item.id}  jobCard={item} />
        })}
    </div>
  )
}

export default ListJobs