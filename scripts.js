//runs onLoad
function randPrompt(){
    var prompt = document.getElementById("prompt");
    var btn = document.getElementById("qBtn");
    
    prompt.style.opacity = '1';
    btn.style.opacity = '1';
    
    //Random num from 0 to 2
    var randNum = Math.floor(Math.random() * 7);
    
    if(randNum == 0){
        prompt.innerHTML = "Looking for inspiration?";
    }
    
    if(randNum == 1){
        prompt.innerHTML = "Welcome to Quotey";
    }
    
    if(randNum == 2){
        prompt.innerHTML = "What'll it be...";
    }
    
    if(randNum == 3){
        prompt.innerHTML = "Find a new quote!";
    }
    
    if(randNum == 4){
        prompt.innerHTML = "Click for a quote!";
    }
    
    if(randNum == 5){
        prompt.innerHTML = "Motivation incoming...";
    }
    
    if(randNum == 6){
        prompt.innerHTML = "Hello!";
    }
}


function btnClick() {
    
    var btnDiv = document.getElementById("btnDiv");
    var prompt = document.getElementById("prompt");
    var btn = document.getElementById("qBtn");
    var btnText = document.getElementById("btnText");
    
    var fullDisp = document.getElementById("dispDiv");
    var quote = document.getElementById("quote");
    var details = document.getElementById("details");
    var pic = document.getElementById("pic");

    
    //Animate Button and Prompt
    if(btnDiv.style.top != "10%"){
        buttonMid = false;
        
        btnDiv.style.top="15%";
        prompt.style.marginBottom = "-30px";
        prompt.style.opacity='0';
        prompt.style.display='none';
      
        btnText.style.opacity='0';
        
        setTimeout(function(){
            btnText.innerHTML = "New Quote";
            btnText.style.opacity='1';
        }, 500);

    }
    
    //Fade Out Quote, Details etc
    fullDisp.style.opacity = '0';
    setTimeout(randomQuote, 700);
}


function quoteIn(){
    
    var fullDisp = document.getElementById("dispDiv")
    var details = document.getElementById("details");
    var imgDiv = document.getElementById("imgDiv");
    
    fullDisp.style.opacity = '1';
    details.style.right= '40%';
    imgDiv.style.left = '60%';
}


function randomQuote(){
    
    var quote = document.getElementById("quote");
    var name = document.getElementById("name");
    var info = document.getElementById("info");
    var imgLink = document.getElementById("imgLink");
    
    
    //update THIS number to the number of pics (incl. 0)
    var numPics = 62;   
   
    //picking random # based on # on numPics
    var randNum = Math.floor(Math.random() * numPics); 
    
    
    //Setting opacity of all photos to 0 with loop
    for (i=0; i < numPics; i++){
        var fadePhoto = document.getElementById(i);
        fadePhoto.style.opacity = '0';
    }
    
    
    //selecting Photo by ID based on randNum
    var photo = document.getElementById(randNum);
    
    //Setting opacity of photo to 1
    photo.style.opacity = '1';
    
    
    
    
///------------QUOTES------------///
    
    
////////TEMPLATE//
    
//0
//    if(randNum == 0){
//                
//        //Quote
//        quote.innerHTML = "";
//        
//        //Name
//        name.innerHTML = "";
//        
//        //Details
//        info.innerHTML = "";
//        
//        //Link
//        var link = "";
//        
//        name.href = link;
//        imgLink.href = link;        
//    }
    
    
//0
    if(randNum == 0){
                
        //Quote
        quote.innerHTML = "There will always be someone whose better at whatever you're doing than you are; but you can always be the hardest working person in the room.";
        
        //Name
        name.innerHTML = "Casey Neistat";
        
        //Details
        info.innerHTML = "Casey Owen Neistat is an American YouTube personality, filmmaker, vlogger and co-founder of the multimedia company Beme, which was later acquired by CNN. In 2018, he founded 368, a creative space for creators to collaborate and influence each other.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Casey_Neistat";
        
        name.href = link;
        imgLink.href = link;        
    }

//1
    if(randNum == 1){
                
        //Quote
        quote.innerHTML = "The most dangerous thing you can do in life, is play it safe.";
        
        //Name
        name.innerHTML = "Casey Neistat";
        
        //Details
        info.innerHTML = "Casey Owen Neistat is an American YouTube personality, filmmaker, vlogger and co-founder of the multimedia company Beme, which was later acquired by CNN. In 2018, he founded 368, a creative space for creators to collaborate and influence each other.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Casey_Neistat";
        
        name.href = link;
        imgLink.href = link;        
    }

//2
    if(randNum == 2){
                
        //Quote
        quote.innerHTML = "Are you living for your resume or your eulogy?";
        
        //Name
        name.innerHTML = "Lecrae";
        
        //Details
        info.innerHTML = "Lecrae Devaughn Moore, mononymously known as Lecrae, is an American Christian hip hop recording artist, songwriter, music executive, and actor.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Lecrae";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
//3
    if(randNum == 3){
                
        //Quote
        quote.innerHTML = "Presure creates diamonds and fire refines the gold.";
        
        //Name
        name.innerHTML = "Lecrae";
        
        //Details
        info.innerHTML = "Lecrae Devaughn Moore, mononymously known as Lecrae, is an American Christian hip hop recording artist, songwriter, music executive, and actor.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Lecrae";
        
        name.href = link;
        imgLink.href = link;        
    } 
    
//4
    if(randNum == 4){
                
        //Quote
        quote.innerHTML = "Be your ancestors wildest dreams and your descendants biggest inspiration.";
        
        //Name
        name.innerHTML = "Lecrae";
        
        //Details
        info.innerHTML = "Lecrae Devaughn Moore, mononymously known as Lecrae, is an American Christian hip hop recording artist, songwriter, music executive, and actor.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Lecrae";
        
        name.href = link;
        imgLink.href = link;        
    }   
    
//5
    if(randNum == 5){
                
        //Quote
        quote.innerHTML = "Inhale courage, exhale fear.";
        
        //Name
        name.innerHTML = "Unknown";
        
        //Details
        info.innerHTML = "It is unknown what the origin of this quote is, but it sure is powerful.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//6
    if(randNum == 6){
                
        //Quote
        quote.innerHTML = "Forget managing the situation, manage your mind.";
        
        //Name
        name.innerHTML = "Will Smith";
        
        //Details
        info.innerHTML = "This quote comes from a vlog on Will's YouTube channel about conquering his fear of the Ocean. Will Smith is an American actor and rapper. In April 2007, Newsweek called him \"the most powerful actor in Hollywood\". Smith has been nominated for five Golden Globe Awards and two Academy Awards, and has won four Grammy Awards.";
        
        //Link
        var link = "https://www.youtube.com/watch?v=JfkO0XxAQZo";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//7
    if(randNum == 7){
                
        //Quote
        quote.innerHTML = "A ship is always safe at the shore, but that is not what it is built for.";
        
        //Name
        name.innerHTML = "Albert Einstein";
        
        //Details
        info.innerHTML = "Albert Einstein's name has become a synonym for 'Genius'. Einstein is possibly the most influential scientist of our generation, if not, of all time. Known famously for developing the theory or relativity.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Albert_Einstein";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//8
    if(randNum == 8){
                
        //Quote
        quote.innerHTML = "A foolish man sleeps when he's tired, a wise man sleeps when he can.";
        
        //Name
        name.innerHTML = "Dan Mace";
        
        //Details
        info.innerHTML = "Dan said this in Casey Neistat's vlog on April 12, 2018. He is a young South African film maker and youtuber.";
        
        //Link
        var link = "https://www.youtube.com/watch?v=ZWhfSmk3fSI&t=4m25s";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//9
    if(randNum == 9){
                
        //Quote
        quote.innerHTML = "Fool me once, shame on you. Fool me twice... nah, that's not happening.";
        
        //Name
        name.innerHTML = "Kevin Garnett";
        
        //Details
        info.innerHTML = "Kevin Garnett is a former professional basketball player and Hall Of Famer who played for 21 seasons in the NBA. Known for his intensity, defensive ability, and versatility, Garnett is considered one of the greatest power forwards of all time.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Kevin_Garnett";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//10
    if(randNum == 10){
                
        //Quote
        quote.innerHTML = "Can't take it when you die, but you can't live without it.";
        
        //Name
        name.innerHTML = "J Cole";
        
        //Details
        info.innerHTML = "Jermaine Cole is an American rapper, singer, songwriter, producer, and record executive. Here, Cole is referring to Money in his hit song ATM.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/J._Cole";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//11
    if(randNum == 11){
                
        //Quote
        quote.innerHTML = "God placed the best things in life on the other side of fear.";
        
        //Name
        name.innerHTML = "Will Smith";
        
        //Details
        info.innerHTML = "Will Smith is an American actor and rapper. In April 2007, Newsweek called him \"the most powerful actor in Hollywood\". Smith has been nominated for five Golden Globe Awards and two Academy Awards, and has won four Grammy Awards.";
        
        //Link
        var link = "https://www.youtube.com/watch?v=xFjsIfXvArQ";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//12
    if(randNum == 12){
                
        //Quote
        quote.innerHTML = "The effect you have on others is the most valuable currency there is.";
        
        //Name
        name.innerHTML = "Jim Carrey";
        
        //Details
        info.innerHTML = "Jim Carrey is a Canadian-American actor, comedian, writer, producer, author, and artist. He is known for his energetic slapstick performances.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Jim_Carrey";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//13
    if(randNum == 13){
                
        //Quote
        quote.innerHTML = "Your need for acceptance can make you invisible in this world.";
        
        //Name
        name.innerHTML = "Jim Carrey";
        
        //Details
        info.innerHTML = "Jim Carrey is a Canadian-American actor, comedian, writer, producer, author, and artist. He is known for his energetic slapstick performances.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Jim_Carrey";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//14
    if(randNum == 14){
                
        //Quote
        quote.innerHTML = "I don't believe in hope. Hope is a beggar. Hope walks through the fire and faith leaps over it.";
        
        //Name
        name.innerHTML = "Jim Carrey";
        
        //Details
        info.innerHTML = "Jim Carrey is a Canadian-American actor, comedian, writer, producer, author, and artist. He is known for his energetic slapstick performances.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Jim_Carrey";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//15
    if(randNum == 15){
                
        //Quote
        quote.innerHTML = "If you attempt life, you might die, but you'll live on.";
        
        //Name
        name.innerHTML = "Kurt Braunohler";
        
        //Details
        info.innerHTML = "Kurt said this on the show 'Drunk History', in which he was of course, drunk.";
        
        //Link
        var link = "https://www.facebook.com/drunkhistorytv/videos/eddie-aikau-drunk-history/715909268861277/";
        
        name.href = link;
        imgLink.href = link;        
    }
    
//16
    if(randNum == 16){
                
        //Quote
        quote.innerHTML = "Action is the antidote to despair.";
        
        //Name
        name.innerHTML = "Yes Theory";
        
        //Details
        info.innerHTML = "Yes Theory is a YouTube channel with ovr 5.5 million subscribers. Thier focus is on saying 'Yes' more in life, and 'Seeking Discomfort'.";
        
        //Link
        var link = "https://www.youtube.com/c/YesTheory";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //17
    if(randNum == 17){
                
        //Quote
        quote.innerHTML = "I hear and I forget. I see and I remember. I do and I understand.";
        
        //Name
        name.innerHTML = "Confucius";
        
        //Details
        info.innerHTML = "Confucius was a Chinese philosopher and politician of the Spring and Autumn period. The philosophy of Confucius, also known as Confucianism, emphasized personal and governmental morality, correctness of social relationships, justice, kindness, and sincerity.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Confucius";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //18
    if(randNum == 18){
                
        //Quote
        quote.innerHTML = "Whether you think you can or whether you think you can't, you're right.";
        
        //Name
        name.innerHTML = "Henry Ford";
        
        //Details
        info.innerHTML = "Henry Ford was an American industrialist and business magnate, founder of the Ford Motor Company and chief developer of the assembly line technique of mass production.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Henry_Ford";
        
        name.href = link;
        imgLink.href = link;        
    }

    //19
    if(randNum == 19){
                
        //Quote
        quote.innerHTML = "I wish everyone were told early on in life, that they're dying. That would allow a lot of people to live life to the fullest. Imagine that world.";
        
        //Name
        name.innerHTML = "Andreas Hem";
        
        //Details
        info.innerHTML = "Andreas Hem is a young filmmaker and youtuber from Norway.";
        
        //Link
        var link = "https://www.youtube.com/user/AndreasAHem/";
        
        name.href = link;
        imgLink.href = link;        
    }

    //20
    if(randNum == 20){
                
        //Quote
        quote.innerHTML = "You gotta ask yourself, is the juice worth the squeeze?";
        
        //Name
        name.innerHTML = "Dan Mace";
        
        //Details
        info.innerHTML = "Dan Mace is a young South African filmmaker and youtuber.";
        
        //Link
        var link = "https://www.youtube.com/channel/UCZfPrUL62TN74Mmrn-O_pZQ";
        
        name.href = link;
        imgLink.href = link;        
    }

    //21
    if(randNum == 21){
                
        //Quote
        quote.innerHTML = "The only way you lose at the game of life, is if you beat yourself.";
        
        //Name
        name.innerHTML = "Unknown";
        
        //Details
        info.innerHTML = "While the origin of this quote isn't fully known, there is a lot of truth to it.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }

    //22
    if(randNum == 22){
                
        //Quote
        quote.innerHTML = "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.";
        
        //Name
        name.innerHTML = "Henry Ford";
        
        //Details
        info.innerHTML = "Henry Ford was an American industrialist and business magnate, founder of the Ford Motor Company and chief developer of the assembly line technique of mass production.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Henry_Ford";
        
        name.href = link;
        imgLink.href = link;        
    }

    //23
    if(randNum == 23){
                
        //Quote
        quote.innerHTML = "Build your own dreams, or someone else will hire you to build theirs.";
        
        //Name
        name.innerHTML = "Farrah Gray";
        
        //Details
        info.innerHTML = "Farrah Gray is an American businessman, investor, author, columnist, and motivational speaker. Gray was raised on Chicago's South side. He began his entrepreneurial career at the age of six selling homemade lotion and hand-painted rocks door-to-door.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Farrah_Gray";
        
        name.href = link;
        imgLink.href = link;        
    }

    //24
    if(randNum == 24){
                
        //Quote
        quote.innerHTML = "Even if you're on the right track, you'll get run over if you just sit there.";
        
        //Name
        name.innerHTML = "Will Rogers";
        
        //Details
        info.innerHTML = "William Penn Adair Rogers was an American stage and film actor, vaudeville performer, cowboy, humorist, newspaper columnist, and social commentator from Oklahoma.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Will_Rogers";
        
        name.href = link;
        imgLink.href = link;        
    }

    //25
    if(randNum == 25){
                
        //Quote
        quote.innerHTML = "We deem those happy who from the experience of life have learned to bear its ills without being overcome by them.";
        
        //Name
        name.innerHTML = "Juvenal";
        
        //Details
        info.innerHTML = "Decimus Junius Juvenalis, known in English as Juvenal, was a Roman poet active in the late first and early second century AD. He is the author of the collection of satirical poems known as the Satires.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Juvenal";
        
        name.href = link;
        imgLink.href = link;        
    }

    //26
    if(randNum == 26){
                
        //Quote
        quote.innerHTML = "It ain't about how hard you hit; it's about how hard you can get hit, and keep moving forward. It's how much you can take, and keep moving forward. That's how winning is done.";
        
        //Name
        name.innerHTML = "Rocky Balboa";
        
        //Details
        info.innerHTML = "Robert Balboa, is the title character of the Rocky film series. The character was created by Sylvester Stallone, who has also portrayed him in all eight films in the franchise.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Rocky_Balboa";
        
        name.href = link;
        imgLink.href = link;        
    }

    //27
    if(randNum == 27){
                
        //Quote
        quote.innerHTML = "Your vibe attracts your tribe.";
        
        //Name
        name.innerHTML = "Unknown";
        
        //Details
        info.innerHTML = "We don't know who coined this term, but it's memorable.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }

    //28
    if(randNum == 28){
                
        //Quote
        quote.innerHTML = "Rules for happiness: something to do, someone to love, something to hope for.";
        
        //Name
        name.innerHTML = "Immanuel Kant";
        
        //Details
        info.innerHTML = "Immanuel Kant was an influential German philosopher in the Age of Enlightenment. In his doctrine of transcendental idealism, he argued that space, time, and causation are mere sensibilities; \"things-in-themselves\" exist, but their nature is unknowable.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }

    //29
    if(randNum == 29){
                
        //Quote
        quote.innerHTML = "It's not what happens to you, but how you react to it that matters.";
        
        //Name
        name.innerHTML = "Epictetus";
        
        //Details
        info.innerHTML = "Epictetus was a Greek Stoic philosopher. He was born a slave at Hierapolis, Phrygia and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Epictetus";
        
        name.href = link;
        imgLink.href = link;        
    }

    //30
    if(randNum == 30){
                
        //Quote
        quote.innerHTML = "Just because you are a character doesn't mean you have character.";
        
        //Name
        name.innerHTML = "The Wolf";
        
        //Details
        info.innerHTML = "This was spoken by a character in the classic Quentin Tarantino film, 'Pulp Fiction'.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Pulp_Fiction";
        
        name.href = link;
        imgLink.href = link;        
    }

    //31
    if(randNum == 31){
                
        //Quote
        quote.innerHTML = "Time is the enemy of the privileged few. Cost is the enemy of the masses.";
        
        //Name
        name.innerHTML = "Wendover Productions";
        
        //Details
        info.innerHTML = "Wendover Productions is a YouTube channel all about explaining how our world works. From travel, to economics, to geography, to marketing and more, every video will leave you with a little better understanding of our world.";
        
        //Link
        var link = "https://www.youtube.com/watch?v=n1QEj09Pe6k&feature=emb_title";
        
        name.href = link;
        imgLink.href = link;        
    }

    //32
    if(randNum == 32){
                
        //Quote
        quote.innerHTML = "At the end of the day, I'd rather be excluded for who I include than included for who I exclude.";
        
        //Name
        name.innerHTML = "Eston Williams";
        
        //Details
        info.innerHTML = "Eston Williams was the pastor of a Methodist Church in the United States.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }

//33
    if(randNum == 33){
                
        //Quote
        quote.innerHTML = "Besides the noble art of getting things done, there is the noble art of leaving things undone. The wisdom of life consists in the elimination of non-essentials.";
        
        //Name
        name.innerHTML = "Lin Yutang";
        
        //Details
        info.innerHTML = "Lin Yutang was a Chinese inventor, linguist, novelist, philosopher, and translator. His informal but polished style in both Chinese and English made him one of the most influential writers of his generation, and his compilations and translations of classic Chinese texts into English were bestsellers in the West.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Lin_Yutang";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //34
    if(randNum == 34){
                
        //Quote
        quote.innerHTML = "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us. We ask ourselves, Who am I to be brilliant, gorgeous, talented, fabulous? Actually, who are you not to be?";
        
        //Name
        name.innerHTML = "Marianne Williamson";
        
        //Details
        info.innerHTML = "This is often mistakenly attributed to Nelson Mandela, however, it was written by Marianne Williamson. Williamson is an American author, spiritual leader, politician, and activist.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Marianne_Williamson";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //35
    if(randNum == 35){
                
        //Quote
        quote.innerHTML = "Big men admit mistakes, bigger men apologize for them.";
        
        //Name
        name.innerHTML = "Unknown";
        
        //Details
        info.innerHTML = "Apologies are powerful.";
        
        //Link
        var link = "";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //36
    if(randNum == 36){
                
        //Quote
        quote.innerHTML = "With great power, comes great responsibility.";
        
        //Name
        name.innerHTML = "Uncle Ben (Spider-Man)";
        
        //Details
        info.innerHTML = "Said by Uncle Ben to Peter Parker in the movie 'Spider-Man (2002)', this quote has become known as the Peter Parker princliple.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/With_great_power_comes_great_responsibility";
        
        name.href = link;
        imgLink.href = link;        
    }

    //37
    if(randNum == 37){
                
        //Quote
        quote.innerHTML = "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.";
        
        //Name
        name.innerHTML = "Michael Jordan";
        
        //Details
        info.innerHTML = "Michael Jordan, also known by his initials MJ, is a former NBA player and legend. He played 15 seasons in the NBA, winning six championships with the Chicago Bulls. MJ is arguably the Greatest Of All Time.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Michael_Jordan";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //38
    if(randNum == 38){
                
        //Quote
        quote.innerHTML = "The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.";
        
        //Name
        name.innerHTML = "J.D. Salinger";
        
        //Details
        info.innerHTML = "J.D. Salinger was an American writer best known for his novel The Catcher in the Rye. He was also known for writing A Perfect Day for Bananafish.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/J._D._Salinger";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //39
    if(randNum == 39){
                
        //Quote
        quote.innerHTML = "If you wanna live a comfortable life make sure you never love nobody, be selfish and never sacrifice.";
        
        //Name
        name.innerHTML = "Andy Mineo";
        
        //Details
        info.innerHTML = "Andy is an acclaimed hiphop/rap artist from New York. This is a lyric from his hit 'Uncomfortable' which talks about the uncomfortable things that are necessary in life.";
        
        //Link
        var link = "https://www.youtube.com/watch?v=RhJ76rWvlQo";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //40
    if(randNum == 40){
                
        //Quote
        quote.innerHTML = "I am, somehow, less interested in the weight and convolutions of Einstein’s brain than in the near certainty that people of equal talent have lived and died in cotton fields and sweatshops.";
        
        //Name
        name.innerHTML = "Stephen Jay Gould";
        
        //Details
        info.innerHTML = "Stephen Jay Gould was an American paleontologist, evolutionary biologist, and historian of science. He was one of the most influential and widely read authors of popular science of his generation.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Stephen_Jay_Gould";
        
        name.href = link;
        imgLink.href = link;        
    }

    
    //41
    if(randNum == 41){
                
        //Quote
        quote.innerHTML = "Wisdom is the reward you get for a lifetime of listening when you would rather have talked.";
        
        //Name
        name.innerHTML = "Mark Twain";
        
        //Details
        info.innerHTML = "Mark was an American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the 'greatest humorist [the United States] has produced', and William Faulkner called him 'the father of American literature'.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Mark_Twain";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //42
    if(randNum == 42){
                
        //Quote
        quote.innerHTML = "Never let the fear of striking out get in your way.";
        
        //Name
        name.innerHTML = "Babe Ruth";
        
        //Details
        info.innerHTML = "Babe Ruth was possibly the greatest professional baseball player ever. His career in Major League Baseball spanned 22 seasons, from 1914 through 1935.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Babe_Ruth";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //43
    if(randNum == 43){
                
        //Quote
        quote.innerHTML = "Continuous effort, not strength or intelligence, is the key to unlocking our potential.";
        
        //Name
        name.innerHTML = "Winston Churchill";
        
        //Details
        info.innerHTML = "Churchill was a British statesman, army officer, and writer. He was Prime Minister of the United Kingdom from 1940 to 1945, when he led the country to victory in the Second World War, and again from 1951 to 1955.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Winston_Churchill";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    
    //44
    if(randNum == 44){
                
        //Quote
        quote.innerHTML = "We are continually faced by great opportunities brilliantly disguised as insoluble problems.";
        
        //Name
        name.innerHTML = "Lee Iacocca";
        
        //Details
        info.innerHTML = "Iacocca was an American automobile executive and legend best known for the development of Ford Mustang and Pinto cars, and for reviving the Chrysler Corporation as its CEO during the 1980s.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Lee_Iacocca";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //45
    if(randNum == 45){
                
        //Quote
        quote.innerHTML = "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.";
        
        //Name
        name.innerHTML = "Dr. Seuss";
        
        //Details
        info.innerHTML = "Theodor Seuss Geisel was an American children's author, political cartoonist, illustrator, poet, animator, screenwriter, and filmmaker. He is known for his work writing and illustrating more than 60 books under the pen name Dr. Seuss";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Dr._Seuss";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    //46
    if(randNum == 46){
                
        //Quote
        quote.innerHTML = "Perseverance is not a long race; it is many short races one after another.";
        
        //Name
        name.innerHTML = "Walter Elliot";
        
        //Details
        info.innerHTML = "Elliot was a British politician of Scotland's Unionist Party prominent in the interwar period. He was elected to the House of Commons of the United Kingdom in 1918, and besides an interval of months in 1923–24, remained in parliament until his death.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Walter_Elliot_(Scottish_politician)";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //47
    if(randNum == 47){
                
        //Quote
        quote.innerHTML = "Opportunity is missed by most people because it is dressed in overalls and looks like work.";
        
        //Name
        name.innerHTML = "Thomas Edison";
        
        //Details
        info.innerHTML = "Edison was an American inventor and businessman who has been described as America's greatest inventor. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Thomas_Edison";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //48
    if(randNum == 48){
                
        //Quote
        quote.innerHTML = "Many of life's failures are people who did not realize how close they were to success when they gave up.";
        
        //Name
        name.innerHTML = "Thomas Edison";
        
        //Details
        info.innerHTML = "Edison was an American inventor and businessman who has been described as America's greatest inventor. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Thomas_Edison";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //49
    if(randNum == 49){
                
        //Quote
        quote.innerHTML = "No man knows what he can do until he tries.";
        
        //Name
        name.innerHTML = "Publilius Syrus";
        
        //Details
        info.innerHTML = "Publilius Syrus, was a Latin writer, best known for his sententiae. He was a Syrian who was brought as a slave to Roman Italy. By his wit and talent, Syrus won the favour of his master, who granted him manumission and educated him.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Publilius_Syrus";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //50
    if(randNum == 50){
                
        //Quote
        quote.innerHTML = "People often say that motivation doesn't last. Well, neither does bathing that's why we recommend it daily.";
        
        //Name
        name.innerHTML = "Zig Ziglar";
        
        //Details
        info.innerHTML = "Hilary Hinton 'Zig' Ziglar was an American author, salesman, and motivational speaker.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Zig_Ziglar";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //51
    if(randNum == 51){
                
        //Quote
        quote.innerHTML = "You must learn from the mistakes of others. You can't possibly live long enough to make them all yourself.";
        
        //Name
        name.innerHTML = "Sam Levenson";
        
        //Details
        info.innerHTML = "Samuel Levenson was an American humorist, writer, teacher, television host, and journalist.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Sam_Levenson";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //52
    if(randNum == 52){
                
        //Quote
        quote.innerHTML = "A horse that consistently runs just a second faster than another horse is worth millions of dollars more. Be willing to give that extra effort that separates the winner from the one in second place.";
        
        //Name
        name.innerHTML = "H. Jackson Brown Jr.";
        
        //Details
        info.innerHTML = "Harriett Jackson Brown Jr. is an American author best known for his inspirational book, Life's Little Instruction Book, which was a New York Times bestseller.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/H._Jackson_Brown_Jr.";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //53
    if(randNum == 53){
                
        //Quote
        quote.innerHTML = "Problems cannot be solved at the same level of awareness that created them.";
        
        //Name
        name.innerHTML = "Albert Einstein";
        
        //Details
        info.innerHTML = "Albert Einstein's name has become a synonym for 'Genius'. Einstein is possibly the most influential scientist of our generation, if not, of all time. Known famously for developing the theory or relativity.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Albert_Einstein";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //54
    if(randNum == 54){
                
        //Quote
        quote.innerHTML = "It's easy to have faith in yourself and have discipline when you're a winner, when you're number one.  What you've got to have is faith and discipline when you are not yet a winner.";
        
        //Name
        name.innerHTML = "Vince Lombardi";
        
        //Details
        info.innerHTML = "VinceLombardi was an American football coach, and executive in the National Football League. You might also recognize his name from the famous Vince Lombardi Trophy which is awarded to the winner of the Super Bowl.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Vince_Lombardi";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //55
    if(randNum == 55){
                
        //Quote
        quote.innerHTML = "We must be the change we wish to see in the world.";
        
        //Name
        name.innerHTML = "Mahatma Gandhi";
        
        //Details
        info.innerHTML = "Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist, who employed nonviolent resistance to lead the successful campaign for India's independence from British rule, and in turn inspired movements for civil rights and freedom across the world.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Mahatma_Gandhi";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //56
    if(randNum == 56){
                
        //Quote
        quote.innerHTML = "When I despair, I remember that all throughout history the way of truth and love has always won.  There have been tyrants and murderers and for a time they seem invincible but in the end, they always fall.";
        
        //Name
        name.innerHTML = "Mahatma Gandhi";
        
        //Details
        info.innerHTML = "Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist, who employed nonviolent resistance to lead the successful campaign for India's independence from British rule, and in turn inspired movements for civil rights and freedom across the world.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Mahatma_Gandhi";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //57
    if(randNum == 57){
                
        //Quote
        quote.innerHTML = "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.";
        
        //Name
        name.innerHTML = "Mahatma Gandhi";
        
        //Details
        info.innerHTML = "Maya Angelou was an American poet, memoirist, and civil rights activist. She published seven autobiographies, three books of essays, several books of poetry, and is credited with a list of plays, movies, and television shows spanning over 50 years. She received dozens of awards and more than 50 honorary degrees.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Maya_Angelou";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //58
    if(randNum == 58){
                
        //Quote
        quote.innerHTML = "Be who you are and say what you feel because those who mind don’t matter and those who matter don't mind.";
        
        //Name
        name.innerHTML = "Dr. Seuss";
        
        //Details
        info.innerHTML = "Theodor Seuss Geisel was an American children's author, political cartoonist, illustrator, poet, animator, screenwriter, and filmmaker. He is known for his work writing and illustrating more than 60 books under the pen name Dr. Seuss";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Dr._Seuss";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //59
    if(randNum == 59){
                
        //Quote
        quote.innerHTML = "Not everything that can be counted counts, and not everything that counts can be counted.";
        
        //Name
        name.innerHTML = "Albert Einstein";
        
        //Details
        info.innerHTML = "Albert Einstein's name has become a synonym for 'Genius'. Einstein is possibly the most influential scientist of our generation, if not, of all time. Known famously for developing the theory or relativity.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Albert_Einstein";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    
    //60
    if(randNum == 60){
                
        //Quote
        quote.innerHTML = "Do, or do not. There is no 'try'.";
        
        //Name
        name.innerHTML = "Yoda";
        
        //Details
        info.innerHTML = "Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the instruction of Luke Skywalker, and unlocking the path to immortality.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Yoda";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    //61
    if(randNum == 61){
                
        //Quote
        quote.innerHTML = "If everything seems under control, you're just not going fast enough.";
        
        //Name
        name.innerHTML = "Mario Andretti";
        
        //Details
        info.innerHTML = "Mario Gabriele Andretti is an Italian-born American former racing driver and one of the most successful Americans in the history of the sport. He is one of only two drivers to have won races in Formula One, IndyCar, World Sportscar Championship, and NASCAR. He also won races in midget cars and sprint cars.";
        
        //Link
        var link = "https://en.wikipedia.org/wiki/Mario_Andretti";
        
        name.href = link;
        imgLink.href = link;        
    }
    
    
    
    
    
    
    
    
///------------End of Quotes----------------///
    

    quoteIn();
}












