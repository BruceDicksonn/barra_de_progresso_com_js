function progressoVideo(id){

    const video = document.getElementById(id);
    const progressoDiv = document.querySelector(`[progresso=${id}] > div`);

    document.querySelector(`[play=${id}]`).onclick = () => {
        video.play();
        progressoDiv.style.display = 'block';
        rodarProgresso();
    }

    document.querySelector(`[pause=${id}]`).onclick = () => video.pause();

    document.querySelector(`[voltar=${id}]`).onclick = () => {
        video.currentTime -= 10;
    };

    document.querySelector(`[avancar=${id}]`).onclick = () => {
        video.currentTime += 10;
    };

    document.querySelector(`[parar=${id}]`).onclick = () => {
        video.pause();
        video.currentTime = 0;
    };

    function rodarProgresso(){
        setInterval(()=>{
            const tempo = (video.currentTime / video.duration) * 100;
            progressoDiv.style.transitionDuration = '0.1s';
            progressoDiv.style.width = `${tempo}%`;
        },100);
    }
    
}

progressoVideo('video');

