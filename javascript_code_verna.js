var value=window.innerWidth;
var back_up;

     function funx()
    { 
        var loader=document.getElementById("loader");    
 
        loader.style.opacity="0"; 
        loader.style.display="none";
    }     
        
        
        window.addEventListener("load", function(){  
        setInterval("funx()");
                });


     function navbar(element) 
     {
        // body...
        var change=document.getElementById('navbar').style.bottom;

        if(element=='hide'){
        document.getElementById('navbar').style.bottom='-100%';
        document.getElementById('3_bars').style.transform='rotate(-90deg)';
        document.getElementById('3_bars').innerHTML="X";

        }
        else{
        if(change<='0'){
        document.getElementById('navbar').style.bottom='0%';
        document.getElementById('3_bars').style.transform='rotate(90deg)';
        document.getElementById('3_bars').innerHTML="X";

        }
        else{
        document.getElementById('navbar').style.bottom='-100%';
        document.getElementById('3_bars').style.transform='rotate(-90deg)';
        document.getElementById('3_bars').innerHTML="!!!";

        }
        }
     }

    function content_2_show(res)
    {
        // body...
        if(res=='show'){
        document.getElementById('content_2').style.left='0%';
        document.getElementById('content_2').style.display='block';
        }
        else{
        document.getElementById('content_2').style.left='100%';
        document.getElementById('content_2').style.display='none';
    }

    }
    function view_source_code(res) {
        // body...
        var values=document.getElementById('source_code_'+res).style.left;

        if(values>='0'){
        document.getElementById('source_code_'+res).style.left='-100%';
        document.getElementById('content_1','footer').style.opacity='1';
         document.getElementById('footer').style.opacity='1';

        }
        else{
        document.getElementById('source_code_'+res).style.left='0%';
        document.getElementById('content_1','footer').style.opacity='0';
        document.getElementById('footer').style.opacity='0';


        }


    }
    function view_code(id) 
    {
        // body...
        var lang=id.split("_");
        
        
        if(lang[1]=='html'){
        document.getElementById(id).style.display='block';
        document.getElementById(lang[0]+"_css").style.display='none';
        document.getElementById(lang[0]+"_js").style.display='none';
                 }

        else if(lang[1]=='css'){
        var change=document.getElementById(id).style.display='block';
        document.getElementById(lang[0]+"_html").style.display='none';
        document.getElementById(lang[0]+"_js").style.display='none';
                        }
        else if(lang[1]=='js'){
        var change=document.getElementById(id).style.display='block';
        document.getElementById(lang[0]+"_css").style.display='none';
        document.getElementById(lang[0]+"_html").style.display='none';
                        }
    }

    function copy_code(id)
    {

        // body...
        var lang=id.split("_");
        var copy=document.getElementById(lang[0]+"_"+lang[1]);
         
        document.execCommand("copy");

        if(lang[1]=='html'){
        document.getElementById(id).innerHTML='Copied';
        document.getElementById(lang[0]+"_css_copy").innerHTML='Copy';
        document.getElementById(lang[0]+"_js_copy").innerHTML ='Copy';

                 }

        else if(lang[1]=='css'){
        var change=document.getElementById(id).innerHTML='Copied';
        document.getElementById(lang[0]+"_html_copy").innerHTML='Copy';
        document.getElementById(lang[0]+"_js_copy").innerHTML='Copy';
                        }
        else if(lang[1]=='js'){
        var change=document.getElementById(id).innerHTML='Copied';
        document.getElementById(lang[0]+"_css_copy").innerHTML='Copy';
        document.getElementById(lang[0]+"_html_copy").innerHTML='Copy';
                        }
        back_up.innerHTML="copy";
        
        var back_up=document.getElementById(id);

    }
                

                        

   