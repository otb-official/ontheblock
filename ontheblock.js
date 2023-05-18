//Header Variables
const mainDiv = document.createElement("div");
const subDiv = document.createElement("div");
const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");
const a4 = document.createElement("a");
const companyLogo = document.createElement("img");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const XUMM = document.createElement("div");

//Middle Variables
const beginning = document.createElement("div");
const middle = document.createElement("div");
const end = document.createElement("div");

//Bottom Variables
const mainBotDiv = document.createElement("div");
const subBotDiv1 = document.createElement("div");
const subBotDiv2 = document.createElement("div");
const subBotDiv3 = document.createElement("div")
const a5 = document.createElement("a");
const a6 = document.createElement("a");
const a7 = document.createElement("a");
const a8 = document.createElement("a");
const a9 = document.createElement("a");
const a10 = document.createElement("a");
const a11 = document.createElement("a");
const paragraph1 = document.createElement("p");
const paragraph2 = document.createElement("p");
const androidDownload = document.createElement("img");
const appleDownload = document.createElement("img");
const twitterLink = document.createElement("img");
const facebookLink = document.createElement("img");
const instagramLink = document.createElement("img");
const mediumLink = document.createElement("img");


const a = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11];

//This is js script that is currently found in the index file_____________________
function removeBottomHeader() {
  document.getElementById("bottomHeader").style.position="relative";
  document.getElementById("bottomHeader").style.padding="1% 0% 1% 0%";
  document.getElementById("closeButton").style.display="none"; 
 }
 function refreshPage() {
     window.location.reload();
 }
 function hover(element) {
   element.setAttribute('src', './images/OTB Logos/24.gif');
 }
 function unhover(element) {
   element.setAttribute('src', './images/OTB Logos/still_image_blade_24.jpg');
 }
//_______________________________________________________________________________

//Header IDs
mainDiv.id = "topHeader";
subDiv.id = "pageLinks";
a1.id = "logoOTB";
a1.href = "./index.html";
a2.id = "aboutSection";
a2.href = "./about.html";
a3.id = "marketplacePage";
a3.href = "./marketplace.html";
a4.id = "contactInfo";
a4.href = "./contact.html";
XUMM.id = "xummLogin";

//Middle IDs
beginning.id = "beg";
middle.id = "mid";
end.id = "end";

//Bottom IDs
mainBotDiv.id = "bottomHeader";
subBotDiv1.id = "appDownloads";
subBotDiv2.id = "socials";
subBotDiv3.id = "closeButton";
a5.id = "andy";
a5.href = "";
a6.id = "appy";
a6.href = "";
a7.id = "twitty";
a7.href = "https://twitter.com/OnTheBlockOTB";
a8.id = "booky";
a8.href = "https://www.facebook.com/ontheblockOTB";
a9.id = "grammy";
a9.href = "https://www.instagram.com/otbrealestate";
a10.id = "meddy";
a10.href = "https://medium.com/@ontheblock";
a11.id = "x";
androidDownload.id = "android";
appleDownload.id = "apple";
twitterLink.id = "twitter";
facebookLink.id = "facebook";
instagramLink.id = "instagram";
mediumLink.id = "medium";


//Header innerHTML
button1.innerHTML = "About Us";
button2.innerHTML = "Marketplace";
button3.innerHTML = "Contact Us";
button4.innerHTML = "Login with XUMM";

//Bottom innerHTML
paragraph1.innerHTML = "Download the OnTheBlock app here:";
paragraph2.innerHTML = "Stay up to date:";
a11.innerHTML = "x";

//Header Images
companyLogo.src = "./images/OTB Logos/still_image_blade_24.jpg";

//Bottom Images
androidDownload.src = "./images/App Stores/google-play-badge.png";
appleDownload.src = "./images/App Stores/Download_on_the_App_Store_Badge_US-UK_blk_092917.png";
twitterLink.src = "./images/Socials/2021 Twitter logo - white.png";
facebookLink.src = "./images/Socials/f_logo_RGB-White_1024.png";
instagramLink.src = "./images/Socials/Instagram_Glyph_White.png";
mediumLink.src = "./images/Socials/Medium-Symbol-White-RGB@1x.png";

//Header Functions
companyLogo.setAttribute('onmouseover', 'hover(this);');
companyLogo.setAttribute('onmouseout', 'unhover(this);');

//Bottom Functions
a11.setAttribute('onclick', 'removeBottomHeader()');

//Header Appending
document.body.appendChild(mainDiv);
document.getElementById("topHeader").appendChild(subDiv);
document.getElementById("topHeader").appendChild(XUMM);
for (let i = 0; i < 4; i++) {
  document.getElementById("pageLinks").appendChild(a[i]);
};
document.getElementById("logoOTB").appendChild(companyLogo);
document.getElementById("aboutSection").appendChild(button1);
document.getElementById("marketplacePage").appendChild(button2);
document.getElementById("contactInfo").appendChild(button3);
document.getElementById("xummLogin").appendChild(button4);

//Middle Appending
document.body.appendChild(beginning);
document.body.appendChild(middle);
document.body.appendChild(end);

//Bottom Appending
document.body.appendChild(mainBotDiv);
document.getElementById("bottomHeader").appendChild(subBotDiv1);
document.getElementById("bottomHeader").appendChild(subBotDiv2);
document.getElementById("bottomHeader").appendChild(subBotDiv3);
document.getElementById("appDownloads").appendChild(paragraph1);
for (let i = 4; i < 6; i++) {
  document.getElementById("appDownloads").appendChild(a[i]);
};
document.getElementById("andy").appendChild(androidDownload);
document.getElementById("appy").appendChild(appleDownload);
document.getElementById("socials").appendChild(paragraph2);
for (let i = 6; i < 10; i++) {
  document.getElementById("socials").appendChild(a[i]);
};
document.getElementById("twitty").appendChild(twitterLink);
document.getElementById("booky").appendChild(facebookLink);
document.getElementById("grammy").appendChild(instagramLink);
document.getElementById("meddy").appendChild(mediumLink);
for (let i = 10; i < 11; i++) {
  document.getElementById("closeButton").appendChild(a[i]);
};
