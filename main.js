name_of_people_array = [];

function submit(){

    var display_people_array = [];

    for (var j = 1; j <= 4; j++)
    {
        var name_of_people = document.getElementById("enter_name").value;
        console.log(name_of_people);
        name_of_people_array.push(name_of_people);
    }

    console.log(name_of_the_people_array);

    var lenght_of_name_of_people_array = name_of_the_people_array.length;
    console.log(lenght_of_name_people_array);

    for (var k = 0; k < lenght_of_name_of_people_array; k++) 
    {
        display_people_array.push("<h4>NAME - "+ name_of_the_people[k] + "</h4>");
        console.log(display_people_array);
    }
    console.log(display_people_array);
    document.getElementById("display_name_with_commas").innerHTML = display_people_array;
}
function sorting()
{
    name_of_people.sort();
    console.log(name_of_people);

    var display_people_array_sorting = [];

    var lenght_of_name_of_people_array = name_of_the_people_array.length;
    console.log(lenght_of_name_of_people_array);

    for (var k = 0; k < lenght_of_name_of_people_array; k++) 
    {
        display_people_array_sorting.push("<h4>NAME - " + name_of_people_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_people_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function searching(){
    var s=document.getElementById()
}