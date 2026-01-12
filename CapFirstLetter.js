function capitalFirstLetter(c) {
    return c.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const s = "hello world";
let t = capitalFirstLetter(s);
console.log(t);