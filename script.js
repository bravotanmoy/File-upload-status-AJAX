
function _(el){ 
	return document.getElementById(el); 
}

function uploadFile(){
	var file = _("file1").files[0]; 
    
	var formdata = new FormData();
   formdata.append("file1",file);
   var ajrq = new XMLHttpRequest();
   ajrq.upload.addEventListener("progress", progressHandler, false);
   ajrq.addEventListener("load", completeHandler, false);
   ajrq.addEventListener("error", errorHandler, false);
   ajrq.addEventListener("abort", abortHandler, false);
   ajrq.open("POST", "file_upload.php");
   ajrq.send(formdata);  
}

function progressHandler(event){//You can put here tanmoy as like "event"
	_("loaded_n_total").innerHTML = "Uploded"+event.loaded+"bytes of"+event.total;
	var percent = (event.loaded / event.total) * 100;
	_("progressBar").value = Math.round(percent);
	_("status").innerHTML = Math.round(percent)+"% Please wait for upload";		
}

function completeHandler(){
	_("status").innerHTML = event.target.responseText;
	_("progressBar").value = 0;
		
}
function errorHandler(){
	_("status").innerHTML = "Upload Error";		
}
function abortHandler(){
	_("status").innerHTML = "Upload Abort";	
}