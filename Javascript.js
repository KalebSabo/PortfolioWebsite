function myFunction() {
				/* 
                accesses the document object's getElementById function, passes in the parameter "heading", 
                then accesses the innerHTML property of the returned result (from the function)
                 and assigns the string "Pressed Button" to the property
                */
                document.getElementById("heading").innerHTML = "Pressed Button"; 

                // Accesses the window object's alert function and passes in the parameter 'button pressed!'
				window.alert("Button Pressed and the Javascript worked!"); 
			}

// this is a Javascript comment