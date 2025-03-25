async function analyzeImage() {
    let input = document.getElementById("wasteImage");
    if (input.files.length === 0) {
        alert("Please upload an image.");
        return;
    }

    let model = await tf.loadLayersModel('model/model.json');
    let image = document.createElement("img");
    image.src = URL.createObjectURL(input.files[0]);

    image.onload = async function() {
        let tensor = tf.browser.fromPixels(image)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .expandDims();

        let predictions = await model.predict(tensor).data();
        let labels = ["Laptop", "Battery", "Phone", "Other"];

        let maxIndex = predictions.indexOf(Math.max(...predictions));
        document.getElementById("ai-result").innerText = `Detected: ${labels[maxIndex]}`;

        alert(`Correct disposal method: ${labels[maxIndex] === "Battery" ? "Battery bin" : "Electronics recycling"}`);
    };
}
