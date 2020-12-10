class CheckList {

    private numberSet: number[];

    setArray(dataSet:number[]){

        this.numberSet = dataSet;
    }

    getResults() {

        return this.numberSet;
    }

}

const answer = new CheckList;
answer.setArray([1,2,3,4])

console.log(answer.getResults());