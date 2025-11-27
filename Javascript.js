// Use ` for multi-line strings
let project3_javascript_popup = `
    The Javascript worked! 
    Check out my github below for how this was done!

    https://github.com/KalebSabo"


`;

function myFunction() {
				/* 
                accesses the document object's getElementById function, passes in the parameter "heading", 
                then accesses the innerHTML property of the returned result (from the function)
                 and assigns the string "Pressed Button" to the property
                */
                document.getElementsByClassName("javascript_button")[0].innerHTML = "Pressed it!"
                // Accesses the window object's alert function and passes in the parameter 'button pressed!'
				window.alert(project3_javascript_popup); 
			}

            
