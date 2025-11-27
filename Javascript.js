
let project3_javascript_popup = `
    "Button Pressed and the Javascript worked! 
    https://github.com/KalebSabo/PortfolioWebsite/blob/main/Javascript.js"


`;

function myFunction() {
				/* 
                accesses the document object's getElementById function, passes in the parameter "heading", 
                then accesses the innerHTML property of the returned result (from the function)
                 and assigns the string "Pressed Button" to the property
                */
                document.getElementById("heading").innerHTML = "Pressed Button"; 

                // Accesses the window object's alert function and passes in the parameter 'button pressed!'
				window.alert(project3_javascript_popup); 
			}

// this is a Javascript comment