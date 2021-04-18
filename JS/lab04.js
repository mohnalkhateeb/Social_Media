
 function smw(){
 var choic=prompt('choose your favorite social network: facebook, twitter, linkedin, instagram ')
 return choic}
var smw1=smw()

var image = null;
var link=null;
while (smw1 !=='facebook' && smw1 !=='twitter' && smw1 !=='linkedin' && smw1 !=='instagram' )
{
  //smw=prompt('choose your favorite social network: facebook, twitter, linkedin, instagram ')
  smw1=smw()
}



alert('Hello in '+ smw1+ ' World')


imageandlink(smw1)

function imageandlink(sname)
{

//alert('Hello in '+ smw+ 'World')

var count1= Number (prompt('how many logo do you want to see'))
for(i=1;i<=count1;i++)
{
  if (sname =='facebook')

{
  image='<img src="images/face1.png" alt="facebook" >'
  link='<a href="https://web.facebook.com">www.facebook.com</a>'
  document.write(image);
  document.write(link);
 
  
}
else if(sname =='twitter')
{
  image='<img src="images/twitte.png" alt="twitter" >'
  link='<a href="https://twitter.com/?lang=en">www.twitter.com</a>'
  document.write(image);
  document.write(link);
}
  
else if(sname =='linkedin')
{
  image='<img src="images/LinkedIn.png" alt="LinkedIn" width="250">'
  link='<a href="https://www.linkedin.com">www.linkedin.com </a>'
   document.write(image);
  document.write(link);

}
else if(sname =='instagram')
{
  image='<img src="images/insta1.jpg" alt="instagram">'
  link='<a href="https://www.instagram.com">www.instagram.com </a>'
 document.write(image);
  document.write(link);
}
}
}




