function goFurther() {
  if (checkboxanswer.checked == true)
    Document.getElementById("proceedbtn").disabled = true;
  else Document.getElementById("proceedbtn").disabled = false;
}
