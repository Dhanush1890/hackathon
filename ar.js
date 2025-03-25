async function startAR() {
    let constraints = { video: { facingMode: "environment" } };
    let stream = await navigator.mediaDevices.getUserMedia(constraints);
    
    let video = document.getElementById("ar-view");
    video.srcObject = stream;

    alert("Move your camera to locate e-waste bins!");

    let binLocations = [
        { x: 5, y: 10 }, 
        { x: 20, y: 15 }
    ];

    video.addEventListener("playing", () => {
        binLocations.forEach(location => {
            let marker = document.createElement("div");
            marker.style.position = "absolute";
            marker.style.background = "green";
            marker.style.width = "20px";
            marker.style.height = "20px";
            document.body.appendChild(marker);

            marker.style.left = `${Math.random() * window.innerWidth}px`;
            marker.style.top = `${Math.random() * window.innerHeight}px`;
        });
    });
}
