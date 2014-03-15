window.onload = rawl;

//global variables
var overBtn = false;
var pos = 0;
var image;
 

function rawl() {

   var data_file = "banner.json";
   var http_request = new XMLHttpRequest();

   var clicker;
   doPager();

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
        console.log(jsonObj[key]);
       
        	// the banners on the top
        	for (var key=0; key < 9; key++){
		
			//console.log(jsonObj[key]);

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
		
		// for the list - when page loads first
			for (var key=9; key < 14; key++){
			var attatchHere = document.getElementById("bestSelling");
			
			// creating div for each articles
			var newdiv = document.createElement('div');
			newdiv.classList.add("listers");
			
			// article img
			var listImg = document.createElement('img');
			listImg.setAttribute('src',jsonObj[key].imageUrl);
			var title = document.createElement("h2");
			title.innerHTML = jsonObj[key].title;	
			
			// div that opens
			var openDiv = document.createElement('div'); 
			openDiv.classList.add("list_open");
			
			// video
			var videoSec =  document.createElement('section'); 
			videoSec.classList.add("video-container");
			
			var iframe = document.createElement('iframe');
			iframe.setAttribute("src",jsonObj[key].video);
			videoSec.appendChild(iframe);
			
			// text desc
			var texSec = document.createElement('section'); 
			texSec.classList.add("descprtionText");
			//the text
			var descText = document.createElement('p'); 
			descText.innerHTML =jsonObj[key].disc;
			texSec.appendChild(descText);
			
			// append title and img to lister div
			newdiv.appendChild(listImg);
			newdiv.appendChild(title);
			
			//append video and text to list-open div			
			openDiv.appendChild(videoSec);
			openDiv.appendChild(texSec);
			
			newdiv.appendChild(openDiv);			
			
			attatchHere.appendChild(newdiv);		
		}

		for (var key=14; key < 18; key++){
			var attatchHere = document.getElementById("newest");
			
			// creating div for each articles
			var newdiv = document.createElement('div');
			newdiv.classList.add("listers");
			
			// article img
			var listImg = document.createElement('img');
			listImg.setAttribute('src',jsonObj[key].imageUrl);
			var title = document.createElement("h2");
			title.innerHTML = jsonObj[key].title;	
			
			// div that opens
			var openDiv = document.createElement('div'); 
			openDiv.classList.add("list_open");
			
			// video
			var videoSec =  document.createElement('section'); 
			videoSec.classList.add("video-container");
			
			var iframe = document.createElement('iframe');
			iframe.setAttribute("src",jsonObj[key].video);
			videoSec.appendChild(iframe);
			
			// text desc
			var texSec = document.createElement('section'); 
			texSec.classList.add("descprtionText");
			//the text
			var descText = document.createElement('p'); 
			descText.innerHTML =jsonObj[key].disc;
			texSec.appendChild(descText);
			
			// append title and img to lister div
			newdiv.appendChild(listImg);
			newdiv.appendChild(title);
			
			//append video and text to list-open div			
			openDiv.appendChild(videoSec);
			openDiv.appendChild(texSec);
			
			newdiv.appendChild(openDiv);
			
			
			attatchHere.appendChild(newdiv);	
			
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

			// making video
			/*
			var videoCon = document.createElement('div');
			videoCon.classList.add("video-container");	
			
			//var video
			var bdo -document.createElement("iframe");
			bdo.setAttribute("src","//www.youtube.com/embed/-yw-d5woEhw");


			videoCon.appendChild(bdo);
			lightboxDiv.appendChild(videoCon);
			*/		 

  			
			var closeBtn = document.createElement('img');
			closeBtn.classList.add("closer");
			closeBtn.setAttribute('src',"images/icons/close.png");
			document.querySelector(".lightbox").appendChild(closeBtn); 
				
  		 
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

	
	$( document ).on( "click", ".listers", function() {
				$( this ).find("div").slideToggle( "slow" );
			});

	// page - reloading
	// Get links from paginated a tags
		// onclick get href value and pass it to the jquery load function
		function doPager() { 
		 $('.pager a').click(function(e) {
		  e.preventDefault();
		  loadProducts($(this).attr('href'));
		  //alert("DF");
		  $('.pager a').removeAttr('id');
		  $(this).attr('id', 'clickedOn');
		
		  
		 });
		};
		
		// empty elements from #inner div, add loading class, load in elements from link #inner div, remove loading class when complete.
		function loadProducts(url) {

		 $('#inner').empty().addClass('loading').load(url + ' #inner', function() {

		 $('#inner').removeClass();
		
		 });
};
 


};
 