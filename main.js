function submitAnswers()
{
	var total=4;
	var score=0;

	var q1=document.forms["quiz"]["q1"].value;
	var q2=document.forms["quiz"]["q2"].value;
	var q3=document.forms["quiz"]["q3"].value;
	var q4=document.forms["quiz"]["q4"].value;

	for(i=1; i<=total; i++)
	{
		if(eval('q'+i)== null || eval('q'+i)== '')
		{
			alert(You missed question' + i);
			return false;

		}
	}
	var answers=["a","d","c","a"];

	for(i=1; i<=total; i++){
		if(eval('q'+i)== answers[i=1]){
			score++;
		}
	}
	var results=document.getElementById('results');
	results.innerHTML=<h3>You scored <span>'+score'</span>;
	alert("You scored '+score+');
	return false;
}