Layer naming (trait types)
Layer folder names MUST start with a number, representing the order in which the image will be rendered, followed by a separator - (dash) plus the layer name. For example:

01-background
02-shape
03-letter
Try to use a good name for your layers because this name will be used to fill in the Metadata trait_type value

Layer elements (trait values)
All images used to create the NFT MUST have the same dimensions (width and height). Subfolders are not supported.

Weighting
If you want to add weighting ability to your images, you can do so by adding weight as a suffix to the image filename.

Imagine the scenario where you have a hat layer and support 5 different hat colors. This is how you can weigh them:

hat_red+10.png
hat_orange+20.png
hat_yellow+20.png
hat_green+40.png
hat_blue.png
By using the plus sign (+) and a number (between 1-100), you are telling NFT.net the chances to choose images.

In this case, red has 10%. Orange and yellow have 20%. Green has 40%. And blue, since no suffix was added, will be treated as 100%.

Currently, only integers numbers are supported for setting weights!

If no weight is defined in the suffix, 100% is assumed by default!
