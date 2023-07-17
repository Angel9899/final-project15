function makeMealPlan() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

    if (!validateEmail(email)){
        alert('your email is invalid');
        return;
    }

    var mealPlan = '<h2> The meal is made for: ' + name + '</h2>'
    mealPlan += '<p>Email: ' + email + '</p>';
    mealPlan += '<p>Goal: '+ goal + '</p>';
    mealPlan += '<h3>This weeks meal plan</h3>';
    mealPlan += '<ul>';
    
    var day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

    for(var i = 0; i < day.length; i++) {
        var week = day[i];
        mealPlan += '<li><strong>' + week + ':</strong> Breakfast ' + document.getElementById(week.toLowerCase() + 'breakfast').value + ', Snack: ' + document.getElementById(week.toLowerCase() + 'Snack').value + ', Lunch: ' + document.getElementById(week.toLowerCase() + 'Lunch').value + ', Snack: ' + document.getElementById(week.toLowerCase() + 'Snack2').value + ', Dinner: ' + document.getElementById(week.toLowerCase() + 'Dinner').value + '</li>';
    }

    mealPlan += '</ul>'

    var mealPlanPage = window.open('', '_blank');
    mealPlanPage.document.write(mealPlan);
    mealPlanPage.document.close();

}


function displayMealPlan() {
    window.print();
}

function validateEmail(email){
    var valid = /^\S+@\S+\.\S+$/;
    return valid.test(email);
}