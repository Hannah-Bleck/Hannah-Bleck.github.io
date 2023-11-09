
      window.onscroll = function() {
        myFunction()
    };
      
      function myFunction() {
        if (document.documentElement.scrollTop > 20) {
            document.getElementById("projectsdiv").className = "slideUp";
            document.getElementById("projectsdiv").style.visibility = "visible";
            document.getElementById("secondseperator").style.visibility = "visible";
        }else if(document.documentElement.scrollTop < 400 && document.documentElement.scrollTop > 200){
            document.getElementById("projectsdiv").className = "slideDown";
        }else{
            document.getElementById("projectsdiv").style.visibility = "collapse";
            document.getElementById("secondseperator").style.visibility = "collapse";
        }
      }

      document.getElementsByClassName("thumb").onhover = function() {
        hoverProjects()
    };

    function hoverProjects(){
        document.getElementsById("thumb1").style.backgroundColor = "red";
    }
