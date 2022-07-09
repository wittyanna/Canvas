var canvas = document.getElementById('myfirstcanvas');
var ctx=canvas.getcontext("2d");
color="red";
ctx.inpath();
ctx.strokestyle=color;
ctx.linewidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
my_mousedown(e);
{
    color=document.getElementById("color").Value;
    width_of_line=document.getElementById("width_of_line").Value;
    MouseEvent="mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
Function my_mouseleave(e);
{
    MouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
Function my_mouseup(e);
{
    MouseEvent="mouseUP";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousmove(e);
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    
    if (MouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokestyle=color;
        ctx.linewidth=width_of_line;
        
        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        
         console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}