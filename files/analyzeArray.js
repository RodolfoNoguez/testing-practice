
// example array = [1,8,3,4,2,6]

function analyzeArray(arr){
    class ArrayAnlyzer{
        constructor(data){
            this.data = data;
        }

        average(){
            let total = 0;
            for(let i = 0; i < this.data.length; i++){
                total += this.data[i];
            }
            return total / this.data.length;
        }
        min(){
            let min = this.data[0];
            for(let i = 1; i < this.data.length; i++){
                if(this.data[i] < min){
                    min = this.data[i];
                }
            }
            return min;
        }
        max(){
            let max = this.data[0];
            for(let i = 1; i < this.data.length; i++){
                if(this.data[i] > max){
                    max = this.data[i];
                }
            }
            return max;
        }
        length(){
            return this.data.length;
        }
    }
    return new ArrayAnlyzer(arr);
}


module.exports = analyzeArray;