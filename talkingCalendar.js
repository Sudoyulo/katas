const talkingCalendar = function(date) {
	var year = date.substr(0,4);
	var month = date.substr(5,2);
	var day = date.substr(8,2)

	switch (month) {
		case "01": 
		month = "January";
		break;
	
		case "02":
                month = "February";
                break;

		case "03":
                month = "March";
                break;

		case "04":
                month = "April";
                break;

		case "05":
                month = "May";
                break;

		case "06":
                month = "June";
                break;

		case "07":
                month = "July";
                break;

		case "08":
                month = "August";
                break;

		case "09":
                month = "September";
                break;

		case "10":
                month = "October";
                break;

		case "11":
                month = "November";
                break;

		case "12":
                month = "December";
                break;
		}

//days

	switch (day) {
		case "01":
		day += "st";
		break;	

		case "21":
		day += "st";
		break

		case "31":
		day += "st";
		break;

		case "02":
		day += "nd";
		break;

		case "22":
		day += "nd";
		break;

		case "03":
		day += "rd";
		break;
		
		case "23":
		day += "rd";
		break;

		default:
		day += "th";
		break;

	}

	if (day[0] === "0"){
		day = day.substr(1,3);
	}


	
	return (month + " " + day + ", " + year);

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
