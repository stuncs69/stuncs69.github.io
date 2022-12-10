const gifs = [
            'https://media.tenor.com/NQfq1liFH-8AAAAM/byuntear-sad.gif',
            'https://media.tenor.com/-uMIofTxVWIAAAAd/cat-vibing-vibing-cat.gif',
            'https://media2.giphy.com/media/h5aBefdFqGCT4aIu67/giphy.gif',
            'https://media2.giphy.com/media/bV24m4La0Tybf1bh96/giphy.gif?cid=ecf05e47pbgvdfox3l7l8juepjxbdq07btu2euymba581eq6&rid=giphy.gif&ct=g',
            'https://res.cloudinary.com/dougsillars/image/upload/v1546606222/shaq_mtl6do.gif',
            'https://media.tenor.com/5Mp3rdZ37AwAAAAC/cat-balloon.gif'
        ];

const body = document.querySelector('body');

const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

body.style.backgroundImage = `url(${randomGif})`;