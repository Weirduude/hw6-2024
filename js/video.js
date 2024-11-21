var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

	video.volume = 1.0; // Full volume
    document.getElementById("volume").innerText = `${video.volume * 100}%`;

	// Play
    document.getElementById("play").addEventListener("click", function() {
        video.play();
        document.getElementById("volume").innerText = `${video.volume * 100}%`;
    });

	// Pause
	document.getElementById("pause").addEventListener("click", function() {
        video.pause();
    });

	// Slow down
    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9; // Decrease speed by 10%
        console.log(`New speed: ${video.playbackRate.toFixed(2)}`);
    });

    // Speed up
    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9; // Increase speed proportional to slow down
        console.log(`New speed: ${video.playbackRate.toFixed(2)}`);
    });

    // Skip ahead
    document.getElementById("skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0; // Reset to the beginning
        } else {
            video.currentTime += 10;
        }
        console.log(`Current time: ${video.currentTime.toFixed(2)}s`);
    });

    // Mute/unmute
    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.innerText = video.muted ? "Unmute" : "Mute"; // Update button text
    });

    // Volume slider
    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.getElementById("volume").innerText = `${video.volume * 100}%`;
    });

    // Apply oldSchool class
    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Remove oldSchool class
    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

