/* 
    This is the script that handles randomizing my images 
    everytime I open the startpage

    To add more images, simply drop them in the /images folder and 
    name them appropriately
    Example: If you're adding a fifth image, name it 'image5.jpg' and add it
    to the list below
*/


document.addEventListener('DOMContentLoaded', function() {
    var images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg',
        'images/image6.jpg',
        'images/image7.jpg',
        'images/image8.jpg',
        'images/image9.jpg',
        'images/image10.jpg',
        'images/image11.jpg',
        'images/image12.jpg',
        'images/image13.jpg',
        'images/image14.jpg',
        'images/image15.jpg',
        'images/image16.jpg',
        'images/image17.jpg',
        'images/image18.jpg',
        'images/image19.jpg',
        'images/image20.jpg',
        'images/image21.jpg',
        'images/image22.jpg',
        'images/image23.jpg',
        'images/image24.jpg',
        'images/image25.jpg',
        'images/image26.jpg',
        'images/image27.jpg',
        'images/image28.jpg',
        'images/image29.jpg',
        'images/image30.jpg',
        ];
  
    // Function to randomize image selection
    function getRandomImage() {
        var randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
        // var selectedImage = images[randomIndex];
    }
        
    var imgElement = document.getElementById('random-image');
    imgElement.src = getRandomImage();

    // Randomize the image when it is clicked on
    imgElement.addEventListener('click', function() {
        imgElement.src = getRandomImage();
    })
  });
