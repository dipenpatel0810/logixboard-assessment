export function parseDateTime(datetime) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDateTime = new Date(datetime);
    currentDateTime = currentDateTime.getDate().toString() + " " 
                    + months[currentDateTime.getMonth()] + " "
                    + currentDateTime.getFullYear() + " "
                    + currentDateTime.getHours() + ":"
                    + currentDateTime.getMinutes();
    console.log(currentDateTime);
}