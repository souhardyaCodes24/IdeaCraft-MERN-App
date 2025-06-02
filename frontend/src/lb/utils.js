
export function formatDate(date) {
    if (date!=undefined){

        // function pad(n) {return n < 10 ? "0"+n : n;}
        // var result = pad(date.getDate())+"/"+pad(date.getMonth()+1)+"/"+date.getFullYear();

        // return result
        return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    });
    }else{
        console.log(date)
    }

}