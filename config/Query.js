module.exports =class Query {
    subjects;
    searchQuery;
    indecator ;
    constructor(subjects, searchQuery,indecator){
        this.subjects = subjects;
        this.searchQuery = searchQuery;
        this.indecator = indecator
    }
    async render(){
        const res = [];
        let tmp = this.subjects;
        for(let i = 0 ; i < tmp.length; i++){
            res.push(this.searchQuery.replace(this.indecator,tmp[i]));
        }
        return res;
    }
}
