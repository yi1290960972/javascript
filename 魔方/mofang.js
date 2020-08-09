var arr=document.querySelectorAll(".box-page");
        for(var n=0;n<arr.length;n++){
            for(var r=0;r<3;r++){
                for(var c=0;c<3;c++){
                    var divs=document.createElement("div");
                    divs.style.cssText="width:100px; height:100px; border:2px solid #fff;box-sizing:border-box;background-image:url(img/me"+n+".jpg);background-size:300px 300px;position:absolute";
                    arr[n].appendChild(divs);

                    divs.style.left=c*100+"px";
                    divs.style.top=r*100+"px";

                    divs.style.backgroundPositionX=-c*100+"px";
                    divs.style.backgroundPositionY=-r*100+"px";
                }
            }
        }