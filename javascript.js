

        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = '';
            }
        })
        function myFunction() {
            let input = Number(document.getElementById("input").value);
            let result;
            if (input % 4 == 0) {
                result = `Your Entered ${input} So this is the leap year.`
                document.getElementById("output").style.background = "brown"

            }
            else if (input % 100 == 0 && input % 400 == 0) {
                result = `Your Entered ${input} So this is the Leap Year`
                document.getElementById("output").style.background = "red"

            }
            else {
                result = `Your Entered ${input} So this is not a leap year.`
                document.getElementById("output").style.background = "black"
            }

            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;






        }
