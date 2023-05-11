function CheckDate() {
  var CurrentDate = new Date();
  var TargetDate = new Date(2023, 5, 20); //June is represented by index 5

  return (
    CurrentDate.getDate() === TargetDate.getDate() &&
    CurrentDate.getMonth() === TargetDate.getMonth() &&
    CurrentDate.getFullYear() === TargetDate.getFullYear()
  );
}

function TIU() {
	var CurrentPath = window.location.pathname;
	var NewPath = CurrentPath + "/TIU.html";
	window.location.pathname = NewPath;
}

if (CheckDate() == true)
{
	TIU();
}

console.log("%cTIU", "color: grey;")