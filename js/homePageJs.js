 $(document).ready(function(){
    	$('#showimg').mouseover(function(){
    		 $('#imgg').animate({
                    width:"auto",
                    height:"100px",
              	 	marginLeft:"-5px",
                    marginTop:"-5px"
                },400);  
    		});
    	$('#showimg').mouseout(function(){
    		$('#imgg').animate({
    			width:"auto",
    			height:"95px",
    			marginLeft:"0px",
                marginTop:"0px"
    		},400);
    	});         
    });