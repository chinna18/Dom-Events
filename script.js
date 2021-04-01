var container = myElement('div','container jumbotron');

var form = myElement('form','','myForm');

//First-Name
var div1 = myElement('div','form-group row');

var label1 = myElement('label','col-form-label col-sm-2');
label1.setAttribute('for','firstname');
label1.innerHTML = "First-Name";

var div12 = myElement('div','col-sm-10');
var inp1 = myElement('input','form-control','firstname');
inp1.setAttribute('type','text');
div12.append(inp1);
div1.append(label1,div12);


//Last-Name
var div2 = myElement('div','form-group row');

var label2 = myElement('label','col-form-label col-sm-2');
label2.setAttribute('for','lastname');
label2.innerHTML = "Last-Name";

var div22 = myElement('div','col-sm-10');
var inp2 = myElement('input','form-control','lastname');
inp2.setAttribute('type','text');
div22.append(inp2);
div2.append(label2,div22);

//Address
var div3 = myElement('div','form-group row');

var label3 = myElement('label','col-form-label col-sm-2');
label3.setAttribute('for','address');
label3.innerHTML = "Address";

var div32 = myElement('div','col-sm-10');
var inp3 = myElement('textarea','form-control','address');
inp3.setAttribute('type','text');
div32.append(inp3);
div3.append(label3,div32);

//Pincode
var div4 = myElement('div','form-group row');

var label4 = myElement('label','col-form-label col-sm-2');
label4.setAttribute('for','pincode');
label4.innerHTML = "Pincode";

var div42 = myElement('div','col-sm-10');
var inp4 = myElement('input','form-control','pincode');
inp4.setAttribute('type','text');
div42.append(inp4);
div4.append(label4,div42);

//Gender
var div5 = myElement('div','form-group row');

var label5 = myElement('label','col-form-label col-sm-2');
label5.innerHTML = "Gender";

var label51 = myElement('label','col-form-label col-sm-1');
label51.setAttribute('for','male');
label51.innerHTML = "Male ";

var inpr1 = myElement('input','','male');
inpr1.setAttribute('type','radio');
inpr1.setAttribute('value','Male');
inpr1.setAttribute('name','gender');
label51.append(inpr1);

var label52 = myElement('label','col-form-label col-sm-2');
label52.setAttribute('for','female');
label52.innerHTML = "Female ";

var inpr2 = myElement('input','','female');
inpr2.setAttribute('type','radio');
inpr2.setAttribute('value','Female');
inpr2.setAttribute('name','gender');
label52.append(inpr2);

div5.append(label5,label51,label52);

//Choice of Food

var div6 = myElement('div','form-group row');

var label6 = myElement('label','col-form-label col-sm-2');
label6.innerHTML = "Choice of Food";

var label61 = myElement('label','col-form-label checkbox-inline col-sm-2');
label61.setAttribute('for','north');
label61.innerHTML = "North-Indian ";

var inpc1 = myElement('input','','north');
inpc1.setAttribute('type','checkbox');
inpc1.setAttribute('value','North-Indian');
inpc1.setAttribute('name','chfood');
label61.append(inpc1);

var label62 = myElement('label','col-form-label checkbox-inline col-sm-2');
label62.setAttribute('for','south');
label62.innerHTML = "South-Indian ";

var inpc2 = myElement('input','','south');
inpc2.setAttribute('type','checkbox');
inpc2.setAttribute('value','South-Indian');
inpc2.setAttribute('name','chfood');
label62.append(inpc2);

var label63 = myElement('label','col-form-label checkbox-inline col-sm-2');
label63.setAttribute('for','chinese');
label63.innerHTML = "Chinese ";

var inpc3 = myElement('input','','chinese');
inpc3.setAttribute('type','checkbox');
inpc3.setAttribute('value','Chinese');
inpc3.setAttribute('name','chfood');
label63.append(inpc3);

var label64 = myElement('label','col-form-label checkbox-inline col-sm-2');
label64.setAttribute('for','japanese');
label64.innerHTML = "Japanese ";

var inpc4 = myElement('input','','japanese');
inpc4.setAttribute('type','checkbox');
inpc4.setAttribute('value','Japanese');
inpc4.setAttribute('name','chfood');
label64.append(inpc4);

var label65 = myElement('label','col-form-label checkbox-inline col-sm-2');
label65.setAttribute('for','italian');
label65.innerHTML = "Italian ";

var inpc5 = myElement('input','','italian');
inpc5.setAttribute('type','checkbox');
inpc5.setAttribute('value','Italian');
inpc5.setAttribute('name','chfood');
label65.append(inpc5);
div6.append(label6,label61,label62,label63,label64,label65);

//State
var div7 = myElement('div','form-group row');

var label7 = myElement('label','col-form-label col-sm-2');
label7.setAttribute('for','state');
label7.innerHTML = "State";

var div72 = myElement('div','col-sm-10');
var inp7 = myElement('input','form-control','state');
inp7.setAttribute('type','text');
div72.append(inp7);
div7.append(label7,div72);

//Country
var div8 = myElement('div','form-group row');

var label8 = myElement('label','col-form-label col-sm-2');
label8.setAttribute('for','country');
label8.innerHTML = "Country";

var div82 = myElement('div','col-sm-10');
var inp8 = myElement('input','form-control','country');
inp8.setAttribute('type','text');
div82.append(inp8);
div8.append(label8,div82);

//Submit Button
var divbtn  = myElement('div','text-center','btn');
var btn = myElement('button','btn bg-danger','sbtn');
btn.setAttribute('type','button');
btn.setAttribute('onclick','formSubmit()');
btn.innerHTML = "Submit";
divbtn.append(btn);

form.append(div1,div2,div3,div4,div5,div6,div7,div8);
container.append(form,divbtn);

//Create table
var divc = myElement('div','container');
var table = myElement('table','table table-bordered table-responsive-md');
var tr1 = myElement('tr');
var th1 = myElement('th');
th1.innerHTML = "First-Name";
var th2 = myElement('th');
th2.innerHTML = "Last-Name";
var th3 = myElement('th');
th3.innerHTML = "Address";
var th4 = myElement('th');
th4.innerHTML = "Pincode";
var th5 = myElement('th');
th5.innerHTML = "Gender";
var th6 = myElement('th');
th6.innerHTML = "Choice of Food";
var th7 = myElement('th');
th7.innerHTML = "State";
var th8 = myElement('th');
th8.innerHTML = "Country";
tr1.append(th1,th2,th3,th4,th5,th6,th7,th8);
table.append(tr1);
divc.append(table);
document.body.append(container,divc);

//Function Create Element
function myElement(elemName,elemClass="",elemId="")
{
	var element = document.createElement(elemName);
	element.setAttribute('class',elemClass);
	element.setAttribute('id',elemId);
	return element;
}

//Function On-Submit
function formSubmit()
{
	var tr = document.createElement('tr');
	
    var td1 = document.createElement('td');
	var tdin1 = document.getElementById('firstname').value;
	if(tdin1 == ""){alert('First Name field must be filled'); return false};
	
    td1.innerHTML = tdin1;
	
    var td2 = document.createElement('td');
	var tdin2 = document.getElementById('lastname').value;
	if(tdin2 == ""){alert('Last Name field must be filled'); return false};
    td2.innerHTML = tdin2;
	
    var td3 = document.createElement('td');
    var tdin3 = document.getElementById('address').value;
	if(tdin3 == ""){alert('Address field must be filled'); return false};
    td3.innerHTML = tdin3;
	
    var td4 = document.createElement('td');
    var tdin4 = document.getElementById('pincode').value;
	if(tdin4 == ""){alert('Pincode must be filled'); return false};
    td4.innerHTML = tdin4;
	
    var td5 = document.createElement('td');
	var gencheck = document.getElementsByName('gender');
	var tdin5 = "";
	for(i=0;i<gencheck.length;i++)
	{
		if(gencheck[i].checked === true)
		{
			tdin5 = gencheck[i].value;
		}
	}
    if(tdin5 == ""){alert('Gender should be selected'); return false};
    td5.innerHTML = tdin5;
	
    var td6 = document.createElement('td');
	var fdchoices = document.getElementsByName('chfood');
	var count = 0;
	var tdin6 = "";
	var res = [];
	for(i=0;i<fdchoices.length;i++)
	{
		if(fdchoices[i].checked === true)
		{
			res.push(fdchoices[i].value);
			count++;
		}
	}
	if(count<2)
	{
		alert('Atleast two food choices should be selected');
		return false;
	}
	
    td6.innerHTML = res.join(",");
	
    var td7 = document.createElement('td');
	var tdin7 = document.getElementById('state').value;
	if(tdin7 == ""){alert('State field must be filled'); return false};
    td7.innerHTML = tdin7;
	
    var td8 = document.createElement('td');
    var tdin8 = document.getElementById('country').value;
	if(tdin8 == ""){alert('Country field must be filled'); return false};
    td8.innerHTML = tdin8;
	
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    table.append(tr);
	divc.append(table);
    document.body.append(divc);
	document.getElementById('myForm').reset();
	
}
