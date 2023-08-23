// Get user input element
let userDate = document.getElementById('date');
//Disable future date selection 
userDate.max = new Date().toISOString().split("T")[0];

function calculateAgr() {
   //Get user output element 
   let userAge = document.getElementById('age');
   userAge.innerHTML = "";

   let birthDate = new Date(userDate.value);

   if(birthDate == "Invalid Date") {
      let userError = document.getElementById("error");
      //to show error message
      userError.innerHTML = "Date is invalid*";
   } else {
      let userError = document.getElementById("error");
      // to remove error massage
      userError.innerHTML = "";

      // Separating user's birthdate
      let userDay = birthDate.getDate();
      let userMonth = birthDate.getMonth() + 1;
      let userYear = birthDate.getFullYear();

      //get current date 
      let todayDate = new Date();

      //Separating today's date
      let todayDay = todayDate.getDate();
      let todayMonth = todayDate.getMonth() + 1;
      let todayYear = todayDate.getFullYear();

      // Calculation to get the age
      let ageDay, ageMonth, ageYear;
      // Get year
      ageYear = todayYear - userYear;
      
      // get Month 
      if (todayMonth >= userMonth) {
         ageMonth = todayMonth - userMonth;
      } else {
         ageYear--;
         ageMonth = 12 + todayMonth - userMonth;
      }

      //Get day 
      if (todayDay >= userDay) {
         ageDay = todayDay - userDay;
      } else {
         ageMonth--;
         ageDay = getDaysInMonth(userYear, userMonth) + todayDay - userDay;
      }

      //if ageMonth becomes negative
      if(ageMonth < 0){
         ageMonth = 11;
         ageYear--;
      }

      //to show output 
      userAge.innerHTML = `Your age is: <span>${ageYear}</span> years <span>${ageMonth}</span>
      months <span>${ageDay}</span> days`
   }
   function getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate()
   }
}