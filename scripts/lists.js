
window.onload = rawl;

function rawl(){

   var data_file = "list.json";
   var http_request = new XMLHttpRequest();
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
			// targeting div id=article-feed
			var maindiv = document.getElementById("addList");

			var newDiv = document.createElement('div');
			newDiv.classList.add("listers");


			// article img
			var bannerImg = document.createElement('img');
			bannerImg.setAttribute('src',jsonObj[key].imageUrl);	
 
			var articleTitle = document.createElement('h2');
			articleTitle.innerHTML = jsonObj[key].title;

			//the open things
			var kaka = document.createElement('div');
			kaka.classList.add("list_open");

			// descriptions
			var desc = document.createElement('p');
			desc.innerHTML = jsonObj[key].captions;		
			
			kaka.appendChild(desc);

			//append img to "main_banner_side"
			newDiv.appendChild(bannerImg);
			newDiv.appendChild(articleTitle);
			newDiv.appendChild(kaka); 									
			//appending article divs in to article-feed.
			maindiv.appendChild(newDiv);

			
		}		
		
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();

	

   // Click on the what is the huble store to open and close the info box
	$( ".openClose" ).click(function() {
	$( ".open_what" ).slideToggle( "slow" );
	});


	$( ".closeIt" ).click(function() {
	$( ".open_what" ).slideToggle( "slow" );
	});

	$( ".listers" ).click(function() {
	$( this ).find("div").slideToggle( "fast" );
	});
}

//auto load loadJSON();


