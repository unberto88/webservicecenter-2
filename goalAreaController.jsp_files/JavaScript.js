//-- --------------------------------------------------------------------
//
//      AUTHOR :  Roman Zhovtulya
//
// JavaScript Library for Database Lab website
// --------------------------------------------------------------------
//
//      Versions :
//
//      date         version         By whoom and what was done
// --------------------------------------------------------------------
//      20.10.2002    V 1.0	     Roman, optimizing
//      
//                                  
//     
//
//
// --------------------------------------------------------------------

//function that closes the current window:

  function closewindow()
{


    window.close();

}



//function that checkes user input:

function ValidForm(theForm)
{
  if (theForm.team_name.value == "")
  {
    alert("Please enter the team name!");
    theForm.team_name.focus();
    return (false);
  }

  if (theForm.student1.value == "")
  {
    alert("Please enter the name of the 1st member!");
    theForm.student1.focus();
    return (false);
  }

  if (theForm.student2.value == "")
  {
    alert("Please enter the name of the 2nd member!");
    theForm.student2.focus();
    return (false);
  }

}


// function to check whether the "name" input box is filled out at file upload in iLearning

function validFormUploadFile(theForm)
{
  if (theForm.dbFileName.value == "")
  {
    alert("Please put the file name");
    theForm.dbFileName.focus();
    return (false);
  }


}



//function that refreshes the target window to the location (LocString) provided
// (used for automatic refresh when select box value is changed):


function popUpNav(LocString,wTarget) 
{
	if (LocString != "") {
		wTarget.location.href = LocString;
	}
}






//function opens a window based on the provided information:

function openwindow (url, w, h, name) 
{

//window.open(url,name,'toolbar=no,resizable=yes,directories=no,status=no,scrollbars=yes,resize=no,menubar=no,width='+w+',height='+h);

child = window.open(url,name,'toolbar=no,resizable=yes,directories=no,status=no,scrollbars=yes,resize=no,menubar=no,width='+w+',height='+h);


}






// new function used to open a window in CMS editor in such a way that it would later be possible to close it and reload the parent page in Mozilla as well

function openwindowNew(url, w, h, name) 
{

child = window.open('',name,'toolbar=no,resizable=yes,directories=no,status=no,scrollbars=yes,resize=no,menubar=no,width='+w+',height='+h);

// if the window is already open, just bring it to the foreground, don't reload:
if (child.location == "about:blank")
    {
     child.location.href = url;
     child.focus();
    }
else
    {
     child.focus();
    }

}



// function for closing the edit window and refreshing the parent
// (in administration "edit data" scrips):

function closeChild() {

child.close();

 
self.location.reload();


}

// function for closing the child window from within the child window
// (for administration "edit data" scrips):


function endNow() { 
 opener.location.href="JavaScript:closeChild()";
}


// function for closing the child window from within the child window
// (for administration "edit data" scrips)
// and specifically for managing the reload of goal areas:

function endNowGoalAreaReload(reloadWindowName) { 

 opener.location.href="JavaScript:self.location.reload()";



// close itself:
 self.close();

// get the window object by name:
 // var win = window.open('', reloadWindowName);



// reload the given window:
 // win.location.reload();


}


// function for closing the child window and refresh only the parent goal:

function endNowGoal(parentId) {
 opener.location.href="JavaScript:closeChildGoal("+parentId+")"; 
}


// function for closing the edit window and refreshing only the parent goal:

function closeChildGoal(parentId) {

// closing the child window 
	child.close();

// Take the button of the area of the parent goal by its 'id' to simulate 
// the double-click behaviour and refresh only that area:


var buttonParentGoal = document.getElementById('Goal' + parentId);

buttonParentGoal.click();
buttonParentGoal.click();

}



// function for expanding goal in the tree view:

function expandGoalInTreeView(goalId) {

// Take the button of the area of the parent goal by its 'id' to simulate
// the double-click behaviour and refresh only that area:

var buttonParentGoal = document.getElementById('Goal' + goalId);

buttonParentGoal.click();
buttonParentGoal.click();

}





// function for loading the URL content into the parent window (used in FHO Portal search engine):

function loadIntoParent(url) {
 opener.location.href=url;
}





/* This script is constructing a loader button using the XMLHttpRequest object, 
     a very basic element of AJAX technology */

function ajaxLoader(url, contId, boxId, childGoalId)
{

    // getting the button name:
            var goalChildElement='Goal'+childGoalId;

    // getting the button value:
            var goalButtonValue=document.getElementById(goalChildElement).value;

    // Setting the button's status to 'OFF' and do not display any content on that state.
      if (goalButtonValue == '-')
      {
          // set the button value to "-":
        document.getElementById(goalChildElement).value='+';
        document.getElementById(boxId).style.display = "none";
      }
      else 
      {
       // Setting the button's value to "-" and loading/displaying the content
        document.getElementById(goalChildElement).value='-';

        document.getElementById(boxId).style.display = "inline";
            var XMLHttpRequestObject = false;
            
           // For Mozilla Browser create the request object
            if (window.XMLHttpRequest) 
            {
                XMLHttpRequestObject = new XMLHttpRequest();
            } 
            
           // for Internet Explorer
            else if (window.ActiveXObject) 
            {
                XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
            }
          
            if(XMLHttpRequestObject) 
            {
                var obj = document.getElementById(contId);
                XMLHttpRequestObject.open("GET", url, true);
                XMLHttpRequestObject.onreadystatechange = function()
                {
                   if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) 
                   {
                       obj.innerHTML = XMLHttpRequestObject.responseText;
                   }
                }
            
              XMLHttpRequestObject.send(null);
            }

      }



}
var child;
var addonsOptionShow = true;



/*
function hide(){
	addonsOptionShow = !addonsOptionShow;
	if(addonsOptionShow){
		document.getElementById('addonsOption').innerHTML="Hide";
		document.getElementById('addonsOptionTable').style.display="block";
		opener.child.resizeTo(650,1000); 
	}else{
		document.getElementById('addonsOption').innerHTML="Show";
		document.getElementById('addonsOptionTable').style.display="none";
		opener.child.resizeTo(650,700); 
	}
}
*/

function clearSelection(){
	document.getElementById('emailRecipientsUserId').value="";
}
function checkUser(isChecked,userId){
	if(isChecked){
		addUserId(userId);
	}else{
		removeUserId(userId);
	}
}
function addUserId(userId){
	var userIdStr = document.getElementById('emailRecipientsUserId').value;
	var canFind = userIdStr.indexOf(','+userId+',');
	if(canFind == -1){
		userIdStr += userId+',';
	}else if(userIdStr.indexOf(userId+',')==0){
		userIdStr += userId+',';
	}
	document.getElementById('emailRecipientsUserId').value=userIdStr;
}
function removeUserId(userId){
	var userIdStr = document.getElementById('emailRecipientsUserId').value;
	var canFind = userIdStr.indexOf(userId+',');
	if(canFind > -1){
		str1 = userIdStr.substring(0,canFind);
		str2 = userIdStr.substring(canFind+userId.length+1,userIdStr.length);
		userIdStr = str1 + str2;
	}
	document.getElementById('emailRecipientsUserId').value=userIdStr;
}

function cmdEnter(event,textInput){
	if(event.keyCode == 13){
		document.forms['ileEditDataForm'].submit();
	}
}


// function to open or update advanced contact form: 

var winEmailForm="undefined"; 

function openEmailForm(url, w, h, name, userId) 
{
	var isOpen=false;
	if(winEmailForm!="undefined" && winEmailForm!=null)
	{		
		isOpen=true;
	}
	else
	{
		isOpen=false;
	}
	
	if(!isOpen)
	{
		winEmailForm = window.open(url,name,'toolbar=no,resizable=yes,directories=no,status=no,scrollbars=yes,resize=no,menubar=no,width='+w+',height='+h);
	}
	else
	{
		// deal with duplicate emails: 	
		var newRecipient=window.open('../../Insight/jsp/putNewRecipient.jsp?userId='+userId,'NewRecipients','toolbar=no,resizable=yes,directories=no,status=no,scrollbars=yes,resize=no,menubar=no,width='+w+',height='+h); 
	}
	
}

function MsgOkCancel(message, link)
{
    var userAnswer = confirm(message);
    if(userAnswer) window.location.href=link;
}