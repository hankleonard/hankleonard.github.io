# This script is to quickly add the image directory path to my images.js script

# Define the path to the images directory
image_directory = "images/"

# Define the starting and ending numbers for the images
start_number = 202
end_number = 246

# Iterate over the range of image numbers and print the corresponding lines
for i in range(start_number, end_number + 1):
    print(f"'{image_directory}image{i}.jpg',")
