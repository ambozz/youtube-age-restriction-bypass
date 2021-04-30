
    var errorRenderer = document.getElementsByClassName("style-scope yt-button-renderer style-white-with-border size-default");
    var includes = document.body.innerHTML.toString().includes("http://www.youtube.com/t/community_guidelines");

    if(errorRenderer.length >= 0 && includes){
        if (confirm('Do you want to bypass the Age Restriction?')) {
            window.location.replace('https://invidious.xyz/watch?v=' + window.location.href.split('=')[1]);
        } else {

        }
    }

