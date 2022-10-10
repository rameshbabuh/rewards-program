/*API request to read the data from json file
    @returns data: array
*/
export const readData = async ()=>{
    const response = await fetch('../api/transactionData.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

/*Business logic to calculate reward points for each transaction amount
    @takes amount as input: number
    @returns points: integer
*/
export const calculatePoints = (amount) => {
    var points = 0;
    if(amount > 100){
        points = points + 50 + (amount - 100)*2;
    } else{
        points += amount - 50 > 0 ? amount -50 : 0 ;
    }
    return points;
}

/* To add the total points in each array
    @takes data array as input: array
    @returns points: integer
*/
export const GetTotalPoints = (dataArr) => {
    var totalPoints = 0;
    dataArr.forEach(element => {
        totalPoints += calculatePoints(element.amount)
    });
    return totalPoints;
}

/* To get Month name for a corresponding month numer
    @takes month number as input: integer
    @returns month name: string
*/
export const getMonthName = (monthNum)=>{
    return Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(monthNum.toString()));
}