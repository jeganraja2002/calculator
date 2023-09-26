			let input=document.getElementById("input")
			let boolean = false

			function num(f) {
				
				if (input.value=="Syntax Error") {
					input.value=""
				}

				else if(f>=0){
					input.value+=f
					boolean=true
				}

				else if(boolean){
					input.value+=f
				}
			}

			function clean() {
				input.value=""
				boolean=false
			}
		
			function res(){
				try{
				let math=eval(input.value)
				input.value=math

				}
				catch{
					boolean=false
					input.value="Syntax Error"
				}
			}