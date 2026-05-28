function generateColour() {
    return '#' + Math.floor (Math.random() * 16777215).toString(16).padStart(6, '0')
}

const swatches = document.querySelectorAll('.swatch')

function generatePalette() {
    swatches.forEach(function(swatch) {
        const colour = generateColour();
        swatch.style.backgroundColor = colour;
        swatch.querySelector('.swatch-colour').style.backgroundColor = colour;
        const { l } = hexToHSL(colour);
        const textColour = l < 50 ? '#f0ede8' : '#1a1a1a';
        swatch.querySelector('.swatch-name').style.color = textColour;
        swatch.querySelector('.swatch-hex').style.color = textColour;
        swatch.querySelector('.swatch-hex').textContent = colour;
        swatch.querySelector('.swatch-name').textContent = getColourName(colour);
})

}

function hexToHSL(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) /2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r -g ) / d + 4) / 6; break;
        }
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
}

function getColourName(hex) {
    const { h, s, l } = hexToHSL(hex);

    if (l > 90) return 'White';
    if (l < 10) return 'Black';
    if (s < 15) return 'Grey';
    if (h < 15 || h >= 345) {
        if (l < 25) return 'Maroon';
        if (l > 70) return 'Salmon';
        if (s > 70) return 'Crimson';
        return 'Red';
    }
    if (h < 45) {
        if (l < 25) return 'Brown';
        if (l > 70) return 'Peach';
        if (s > 70) return 'Tangerine';
        return 'Orange';
    }
    if (h < 65) {
        if (l < 25) return 'Dark Olive';
        if (l > 70) return 'Cream';
        if (s > 70) return 'Lemon';
        return 'Yellow';
    }
    if (h < 150) {
        if (l < 25 ) return 'Forest Green';
        if (l > 70 ) return 'Mint';
        if (s > 70 ) return 'Lime';
        return 'Green';
    }
    if (h < 195) {
        if (l < 25 ) return 'Teal';
        if (l > 70 ) return 'Ice Blue';
        if (s > 70 ) return 'Aqua';
        return 'Cyan';
    }
    if (h >= 195 && h < 260) {
        if (l < 25) return 'Navy';
        if (l > 70) return 'Sky Blue';
        if (s > 70) return 'Royal Blue';
        return 'Blue';
        }
    if (h < 290) {
        if (l < 25 ) return 'Indigo';
        if (l > 70 ) return 'Lavender';
        if (s > 70 ) return 'Violet';
        return 'Purple';
    }
    if (h < 345) {
        if (l < 25 ) return 'Burgundy';
        if (l > 70 ) return 'Blush';
        if (s > 70 ) return 'Hot Pink';
        return 'Pink';
    }
}

