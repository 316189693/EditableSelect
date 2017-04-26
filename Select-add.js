/*$(document).ready(function(){
 var previous = "null";
 var hPrevious = "null";

 $('#change').on('change', function() {
 previous = this.value;
 hPrevious = "h"+this.value;
 });

 $("#text").on('input', function(e) {
 if($("#change").children(":selected").attr('id') === "new")
 {

 $('#change').append($("<option></option>").attr("value",$(this).val()).attr("id",$(this).val()).text($(this).val()));
 $('#change').val($(this).val());
 hPrevious = "h"+$(this).val();
 previous = $(this).val();

 $('<input>').attr({
 type: 'hidden',
 value: $(this).val(),
 id: hPrevious,
 name: 'new[]'
 }).appendTo('form');
 }
 else if($(this).val() === "")
 {
 $(document.getElementById(previous)).remove();
 if($(document.getElementById("inverter")).text() !== trans('ui.inverter.edit.create'))
 {
 if($(document.getElementById(hPrevious)).attr('name') === "old[]") $(document.getElementById(hPrevious)).attr('name', "new["+previous+"]");
 $(document.getElementById(hPrevious)).val("");
 hPrevious = "null";
 }
 else $(document.getElementById(hPrevious)).remove();
 previous = "null";
 }
 else
 {
 if($(document.getElementById(previous)).attr('id') === previous)
 {
 var option = $(document.getElementById(previous));
 var hidden = $(document.getElementById(hPrevious));

 option.attr('id',$(this).val());
 option.val($(this).val());
 option.text($(this).val());

 hidden.attr('id',"h"+$(this).val());
 if(hidden.attr('name') === 'old[]')
 {
 hidden.attr('name', 'new['+hidden.val()+']');
 }
 else if(hidden.attr('name') === "new["+$(this).val()+"]")
 {
 hidden.attr('name', 'old[]');
 }
 hidden.val($(this).val());

 previous = $(this).val();
 hPrevious = "h"+$(this).val();
 }

 }
 });

 });*/