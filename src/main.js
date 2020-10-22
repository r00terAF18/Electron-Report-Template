const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '980px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: false,
    plugins: ['gjs-preset-webpage', 'grapesjs-blocks-bootstrap4'],
    pluginsOpts: {

    },
    canvas: {
        styles: [
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
        ],
        scripts: [
            'https://code.jquery.com/jquery-3.3.1.slim.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
        ],
    }
});

// const btnSave = document.getElementById('btnSave');
// const frame = document.querySelector('#document');
// btnSave.onclick = saveFile;

// function saveFile(){
//     console.log(frame.innerHTML());
// }

