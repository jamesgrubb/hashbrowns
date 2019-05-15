import Airtable from 'airtable';
const base = new Airtable({
    apiKey: "process.env.REACT_APP_AIRTABLE_KEY"
}).base("process.env.REACT_APP_AIRTABLE_BASE")

const airtable = (setState) => {
base("script")
.select({view: "Grid view"})
.eachPage((records, fetchNextPage) => {
    if(records.length){
        setState({
            records
        })
    }
    console.log(records);
    fetchNextPage();
})
}

export default airtable