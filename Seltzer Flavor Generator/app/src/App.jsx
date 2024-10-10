import React, { useState } from 'react';
import './App.css';

// Arrays of flavor components
const adjectives = ['Funky', 'Wacky', 'Zesty', 'Sparkling', 'Tangy'];
const fruits = ['Raspberry', 'Strawberry', 'Lemon', 'Mango', 'Peach'];
const descriptors = ['Pineapple', 'Whipped Cream', 'Mint', 'Coconut', 'Vanilla'];

// Array of flavor descriptions
const descriptions = [
  'Refreshing and sweet with a tropical twist.',
  'A bold burst of fruit and cream.',
  'A lively blend of sweet and tangy flavors.',
  'Delightfully zesty with a creamy finish.',
  'A perfect harmony of fruit and freshness.'
];

// Object mapping fruits and descriptors to image URLs
const imageMap = {
  Raspberry: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/pret/493705980/0/ci5ra8AINs-493705980.png',
  Strawberry: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_BNps_3J7qSNmg-LIv3Hw7c9VbAHqW7nfA&s',
  Lemon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lemonlifeseltzer.com%2Fflavours%2Fmango%2F&psig=AOvVaw07IODcNFEDAXdzrjU1QuvG&ust=1726379644947000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCOo8DfwYgDFQAAAAAdAAAAABAE',
  Mango: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSz2GlMP3KZzpV1PtuBaSzKpqHNDxCcxX1g&s',
  Peach: 'https://images.ctfassets.net/tlircn1cnxbm/2wxFmUOcDfMgRkolhQUmO4/9c39be27e65917afcc1b0602af14344e/11733933_seltzer-peach-lemonade-can-mobile.jpg',
  Pineapple: 'https://wanabeverage.com/wp-content/uploads/2021/01/z2277370155367_607a3c13906773fb901169b5379fc64b-1.jpg',
  'Whipped Cream': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUMV9QVdMsdmbhImVvJAaS7DFZJNIU3wUhQ&s',
  Mint: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/pret/493705979/0/cd_dgPcr88-493705979.png',
  Coconut: 'https://www.boulevard.com/wp-content/uploads/2022/01/Quirk-Key-Lime-Coconut-12oz-can-e1643128264519.png',
  Vanilla: 'https://static.wixstatic.com/media/2fc3c5_525ec79448a24f7988cca7dfbb1e7b3c~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2fc3c5_525ec79448a24f7988cca7dfbb1e7b3c~mv2.jpg',
};

const SeltzerFlavorGenerator = () => {
  const [flavor, setFlavor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  // Function to generate a random flavor, description, and corresponding image
  const generateFlavor = () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    const randomDescriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];

    // Capitalized flavor
    const newFlavor = `${randomAdjective} ${randomFruit} ${randomDescriptor}`;
    setFlavor(newFlavor);
    setDescription(randomDescription);

    // Get the corresponding image for the fruit or descriptor
    setImage(imageMap[randomFruit] || imageMap[randomDescriptor]);
  };

  return (
    <div className="container">
      <h1 className="title">Seltzer Flavor Generator</h1>

      <div className="card">
        {image && <img src={image} alt={flavor} className="flavor-image" />}
        <p className="flavor">{flavor ? flavor : 'Click the button to generate a flavor!'}</p>
        {flavor && <p className="description">{description}</p>}
      </div>

      <button className="btn btn-primary" onClick={generateFlavor}>
        Generate Flavor
      </button>
    </div>
  );
};

export default SeltzerFlavorGenerator;
