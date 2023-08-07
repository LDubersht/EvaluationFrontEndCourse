import React from 'react';
import Article from './Article';

const Wardrobe = () => {
    let wardrobe = [
        { type: "shirt", color: "red", size: "Medium" },
        { type: "shirt", color: "blue", size: "Medium" },
        { type: "pants", color: "blue", size: "Medium" },
        { type: "accessory", color: "sapphire", size: "" },
        { type: "accessory", color: "lilac", size: "" }
      ]
    return (
        <div>
            {wardrobe
            .filter(f => f.color === "blue")
            .map(c => <Article type={c.type} color={c.color} size={c.size} />)}
        </div>
    )
}

export default Wardrobe;