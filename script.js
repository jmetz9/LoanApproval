$(document).ready(function () {
    $("button").on("click", approve);

    $('input').change(function() {
        if ($("input#salary").val() < 0)
            $("input#salary").val(0);
        if ($("input#score").val() < 300)
            $("input#score").val(300);
        if ($("input#score").val() > 850)
            $('input#score').val(850);
        if ($("input#months").val() < 0)
            $("input#months").val(0);
    });
});

function approve() {

    //set variables
    let salary = $("input#salary").val();
    let score = $("input#score").val();
    let months = $("input#months").val();

    //make the approval initially false so it defaults to
    //false whenever the requirements aren't met
    let approval = false;

    //set true if salary is greater than 40k-
    if(salary >= 40000){
        //-and their credit score is over 600
        if(score >= 600){
            approval = true;
        }
        //-and their credit score is less than 600 but they
        //have worked over a year at their job
        if(!(score >= 600)){
            if(months > 12){
                approval = true;
            }
        }
    }
    //if salary is less than 40k, only set true if their
    //credit score is over 600 and they have been working
    //at their job for over a year
    if(!(salary >= 40000)){
        if(score >= 600){
            if(months > 12){
                approval = true;
            }
        }
    }

    if(approval === true){
        $("p#output").text('You have been approved!');
    }
    else{
        $("p#output").text('You do not qualify for a loan.');
    }


}