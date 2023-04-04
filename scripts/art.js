export function changeVideo(name){
    if (window.innerWidth < 767){
        document.getElementById('videoDisplay').scrollIntoView();
    }
    

    let videoSrc = document.querySelector('#videoDescription video source');
    let video = document.querySelector('#videoDescription video');

    let title = document.querySelector('#videoDescription h3');
    let smallTitle = document.querySelector('#videoDescription h4');
    let description = document.querySelector('#videoDescription p');

    if(name == 'mv'){
        console.log('change to mv');
        videoSrc.setAttribute('src', './media/OneLastKissMV.webm');
        video.setAttribute('poster', './images/artGallery/MV.jpeg');
        title.innerText = 'One Last Kiss';
        smallTitle.innerHTML = 'Editing <br>Feb 10, 2021';
        description.innerHTML = '<strong>This is a fan made Music video for my art project — Color Stripes.</strong> \
        This art project consist of 3 types of art mediums: digital painting, photography and video. \
        I used all three mediums to explore the possibilities of color combinations, \
        while maintaining the signature colored stripes being painted across the canvas as well as the screens.';
    }
    else if(name == 'kitchen'){
        console.log('change to kitchen');
        videoSrc.setAttribute('src', './media/KevinsKitchen.webm');
        video.setAttribute('poster', './images/artGallery/Kitchen.jpg');
        title.innerText = 'Kevin\'s Kitchen';
        smallTitle.innerHTML = 'Filming · Editing <br>Feb 10, 2022';
        description.innerHTML = '<strong>A cinéma vérité that documents Kevin cooking a meal.</strong> \
        This is a documentary about my friend Kevin, and he is a Chinese international student stayed at UCSD dorm. \
        The documentary aimed to bring my audeinces closer to my subject by allowing thme to peek into Kevin\'s slice of life. ';
    }
    else if(name == 'danger'){
        console.log('change to danger');
        videoSrc.setAttribute('src', './media/Danger.webm');
        video.setAttribute('poster', './images/artGallery/danger.jpeg');
        title.innerText = 'Danger';
        smallTitle.innerHTML = 'Filming · Editing · Directing · Acting <br>Feb 10, 2021';
        description.innerHTML = '<strong>An experimental short film about danger.</strong> It is a short film that utilizes colors, \
        jump cuts, superimposing, slow motion and many other creative editing techniques to illustrate the abstract concepts of danger';
    }
    else if(name == 'family'){
        console.log('change to family');
        videoSrc.setAttribute('src', './media/HardFamily.webm');
        video.setAttribute('poster', './images/artGallery/family.jpg');
        title.innerText = 'Harder Family';
        smallTitle.innerHTML = 'Filming · Editing · Directing <br>Feb 10, 2020';
        description.innerHTML = '<strong>A documentary about Harder Family.</strong> It tells a heart-warming story about a family\
        that adopted two children with disabilities from China. This documentary was mde, because I was touched by their love and generosity'
    }
    video.load();
    
}