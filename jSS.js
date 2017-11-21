j_selected = new Array();
blur_iter = 0;
blur_val = 0;
current_val = 0;
function S(arg){if(j_selected.length > 0){for (var xd = 0; xd<j_selected.length;xd++){j_selected.pop();}}if(arg[0] == "#"){ j_selected.push(document.getElementById(arg.substr(1))); }else if(arg[0] == "."){ j_selected = document.getElementsByClassName(arg.substr(1)); }return this;}
function write(text){for (var xd = 0; xd<j_selected.length;xd++){j_selected[xd].innerHTML = text;}return this;}
//test

function blur(val, time)
{
	blur_val = parseFloat(val);
	interv_blur = setInterval(blur_interv, parseFloat(time)/100);
}

function blur_interv()
{
	if(parseFloat(current_val) >= parseFloat(blur_val))
	{
		current_val = 0;
		clearInterval(interv_blur);

		return;
	}

	j_selected[0].style.filter = "blur(" + current_val.toString() + "px)";
	current_val += blur_val * 0.01;
}

function unblur(val, time)
{
	current_val = parseFloat(val);
	interv_blur = setInterval(unblur_interv, parseFloat(time)/100);
}

function unblur_interv()
{
	if(parseFloat(current_val) <= 0)
	{
		current_val = 0;
		clearInterval(interv_blur);

		return;
	}

	j_selected[0].style.filter = "blur(" + current_val.toString() + "px)";
	current_val -= current_val * 0.01;
}
