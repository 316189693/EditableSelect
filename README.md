# EditableSelect


This quick JS file makes i possible to edit a select inputs.

To make it work use this html:

<div class="form-group">
    <label class="control-label col-sm-4"> 'The name you want' </label>
        <div id="select-editable" class="col-sm-8">
            <select id="change" class="  form-control" onchange="this.nextElementSibling.value=this.value">
                <option id="new" value=""></option>
                //insert existing values here
                    <option id="your ID" value="Value">name</option>
            </select>
            <input type="text" id="text" class=" form-control" placeholder="Add new" value="" />
        </div>
</div>

To overlap the text input use this CSS:


<style>
        #select-editable input {
            position:absolute;
            top:1px;
            left: 17px;
            width:84%;
            border:none;
        }
        #select-editable select:focus, .select-editable input:focus {
            outline:none;
        }
    </style>