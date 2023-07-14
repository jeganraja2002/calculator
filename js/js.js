
			var  input=document.getElementById("input")


			function num(f) {
				input.value+=f
			}

			function clean() {
				input.value=innerHTML=""
			}
		
			function res(){
				var math=eval(input.value)
				input.value=math

			}