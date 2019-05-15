import Airtable from 'airtable';
const base = new Airtable({
    apiKey: "keyOvvhUnOpma7wQk"
}).base("applJ4lNbPAUA6ZEb")

const airtable = (setState) => {
    base('script').select({view: 'Grid view'})
    .eachPage(
      (records, fetchNextPage) => {
        setState({
          records
        });
        fetchNextPage();
      }
    );
}

export default airtable