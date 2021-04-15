
var smw=prompt('choose your favorite social network: facebook, twitter, linkedin, instagram ')
var image = null;
var link=null;
while (smw !=='facebook' && smw !=='twitter' && smw !=='linkedin' && smw !=='instagram' )
{
  smw=prompt('choose your favorite social network: facebook, twitter, linkedin, instagram ')
}
alert('Hello in '+ smw+ 'World')
<<<<<<< HEAD
var count1= Number (prompt('how many logo do you want to see'))
for(i=1;i<=count1;i++)
{
=======

>>>>>>> daabc91ed29fd6697b34b84f2118e3ae53e67c00
if (smw =='facebook')
{
  image='<img src="images/face1.png" alt="facebook" >'
  link='<a href="https://web.facebook.com">www.facebook.com</a>'
  document.write(image);
  document.write(link);
 
  
}
else if(smw =='twitter')
{
  image='<img src="images/twitte.png" alt="twitter" >'
  link='<a href="https://twitter.com/?lang=en">www.twitter.com</a>'
  document.write(image);
  document.write(link);
}
  
else if(smw =='linkedin')
{
  image='<img src="images/LinkedIn.png" alt="LinkedIn" width="250">'
  link='<a href="https://www.linkedin.com">www.linkedin.com </a>'
   document.write(image);
  document.write(link);

}
else if(smw =='instagram')
{
  image='<img src="images/insta1.jpg" alt="instagram">'
  link='<a href="https://www.instagram.com">www.instagram.com </a>'
 document.write(image);
  document.write(link);
}
}




<<<<<<< HEAD
=======


>>>>>>> daabc91ed29fd6697b34b84f2118e3ae53e67c00
