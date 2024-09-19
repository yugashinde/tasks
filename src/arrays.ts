/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    // splice => the new position, the number of 
    // deletions, and then the new element 
    if(numbers.length == 0 ){
        return [];
    }
    const newA = [...numbers];
    if(numbers.length === 1){
        return [numbers[0],numbers[0]];
    }
    else{
    newA.splice(1,newA.length-1, newA[newA.length-1])
    // [1,2,3] => [1,3]
    //[-100, -200, 100, 200]; => [-100,200]
    return newA;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((price: number): number => price * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    if  (numbers.length == 0){
        return [];
    }
    const numbers2 = numbers.map((price:string): number => !isNaN(parseInt(price))? parseInt(price): 0);
    return numbers2;
}
/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //const sign = amounts.findIndex((prices:string): string => prices = "$");

    //["$1", "$2", "$3"] // [1, 2, 3] 
    amounts = amounts.map((price : string):string=> price.startsWith("$")? price.slice(1) : price );

    let amt3 = amounts.map((str:string):number => parseInt(str));
    amt3 = amt3.map((num:number)=> isNaN(num) ? 0: num);
    return amt3;

};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    
    let m = messages.map((str:string):string=> str.endsWith("!")?  str.toUpperCase(): str );
    m = m.filter((str:string) => str[str.length-1] != ("?"));
    return m;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {

    const w  = words.filter((s : string) => s.length < 4 )
    return w.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0){
        return true;
    }
    let b = true;
    colors.map((color:string): boolean => color == "red" || color ==  "blue" || color == "green" ? b : b = false );

    return b;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    
    let str = ""; 
    if (addends.length === 0){
        //empty string
        return "0" + "=" + "0";
    }
    const sum = addends.reduce((currentTotal: number, num: number) => currentTotal+num, 0);
    if(addends[0]== sum){
        //only 1 number in the array
        return sum + "=" +sum;
    }
    addends.map((num : number) : string => addends[addends.length-1] == num ? str = str + num.toString() :  str = str + num.toString() + "+");
    return sum + "=" + str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, ]
 */
export function injectPositive(values: number[]): number[] {

    let sum = 0;
    //values.map((num: number): number => num < 0 ? values[values.indexOf(num)].push[addition]: addition = addition+num );
    let newA = [...values];
    const findN = values.findIndex((n) => n<0); // index
    if(findN === -1){
        //all positive
        sum = values.reduce((TSum,curr)=>TSum+ curr,0);
        return [...newA,sum];
    }
    else{
        //negative number in array present
        const sum2 = values.reduce((TSum,curr,i)=>{
            if(i < findN){ return TSum+curr}
            return TSum;
        },0 
    );
        newA.splice(findN+1,0,sum2);
        return newA;
    }
}
