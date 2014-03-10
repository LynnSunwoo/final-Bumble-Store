window.onload = rawl;


 

function rawl() {

   var data_file = "banner.json";
   var http_request = new XMLHttpRequest();

   var clicker;
   

   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        
        for (var key in jsonObj){
		
			console.log(jsonObj[key]);

			//banner captions 

			// targeting div id=article-feed
			var maindiv = document.getElementById("main_banner");
			
			// creating div for each articles
			var newdiv = document.createElement('div');
			newdiv.classList.add("imageWrapper");
						
			// article img
			var bannerImg = document.createElement('img');
			bannerImg.setAttribute('src',jsonObj[key].imageUrl);


			//when hover, the blue loverlay
			var cover = document.createElement('div');
			cover.classList.add("coverMe");	

			//title
			var title = document.createElement("h2");
			title.innerHTML = jsonObj[key].title;	
			cover.appendChild(title);

			//clickto
			var clickHere = document.createElement("p");
			clickHere.innerHTML = "View Description";	
			cover.appendChild(clickHere);	
						
			//append img to "main_banner_side"
			newdiv.appendChild(bannerImg);
			newdiv.appendChild(cover);
									
			//appending article divs in to article-feed.
			maindiv.appendChild(newdiv);

		}		
		
      }


   }

   

   http_request.open("GET", data_file, true);
   http_request.send();

		//Creating overlay   
			$( document ).on( "click", ".imageWrapper", function() {
  			//alert( "Goodbye!" );
  			var overlayDiv = document.createElement('div');
			overlayDiv.classList.add("overlay");	
  			
  			//create overlay
  			document.querySelector("body").appendChild(overlayDiv);
			//create lightbox
  			var lightboxDiv = document.createElement('div');
			lightboxDiv.classList.add("lightbox");
			document.querySelector("body").appendChild(lightboxDiv);

			 

  			
			var closeBtn = document.createElement('img');
			closeBtn.classList.add("closer");
			closeBtn.setAttribute('src',"images/icons/close.png");
			document.querySelector(".lightbox").appendChild(closeBtn);
			document.querySelector(".lightbox").appendChild(texter);
				
  		 
	});

			//close overlay - close btn
			$( document ).on( "click", ".closer", function() {
				document.querySelector(".lightbox").remove();
				document.querySelector(".overlay").remove();
			});
	 
	 		//close overlay - by clicking bg
			$( document ).on( "click", ".overlay", function() {
				document.querySelector(".lightbox").remove();
				document.querySelector(".overlay").remove();
			});




   // Click on the what is the huble store to open and close the info box
	$( ".openClose" ).click(function() {
	$( ".open_what" ).slideToggle( "slow" );
	});


	$( ".closeIt" ).click(function() {
	$( ".open_what" ).slideToggle( "slow" );
	});

	$( ".listers" ).click(function() {
	$( this ).find("div").slideToggle( "slow" );
	});

	


};

