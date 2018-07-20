'use strict';
// (function () {
//     let searchInput = document.querySelector('.search__input');
//     let searchBtn = document.querySelector('.search__btn');
//     let trackArr =[];
//     let trackData = {
//         tracks: []
//     };
//
//     searchBtn.addEventListener('click', searchTrack);
//
//     function searchTrack(event){
//         localStorage.removeItem("searchResultTracks");
//         trackData = {
//             tracks: []
//         };
//         trackArr =[];
//         event.preventDefault();
//         let searchQuery = searchInput.value;
//         let url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchQuery}&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json`;
//         fetch(url)
//             .then(response=> response.ok ? response.json():null)
//             .then(data=> {
//                 trackArr.push(data);
//                 console.log(trackArr);
//                 trackDataPreparation();
//                 function trackDataPreparation(){
//                     trackArr[0].results.trackmatches.track.forEach(function(item){
//                         let trackName = item.name;
//                         let trackArtist = item.artist;
//                         let trackImage = item.image[1]['#text'];
//                         let listeners = item.listeners;
//                         trackData.tracks.push(
//                             {
//                                 trackName: trackName,
//                                 trackArtist: trackArtist,
//                                 trackImage: trackImage,
//                                 listeners: listeners,
//                             }
//                         )
//                     });
//                     createTrackCard();
//                     console.log(trackData);
//                     searchInput.value ='';
//                     localStorage.setItem( "searchResultTracks", JSON.stringify(trackData) );
//                 }
//             });
//     }
//
//     function createTrackCard(){
//         const source = document.querySelector('#trackCard-template').innerHTML.trim();
//         const container = document.querySelector('.content');
//         const template = Handlebars.compile(source);
//         container.innerHTML = template(trackData);
//     }
// })();


(function () {
    let searchInput = document.querySelector('.search__input');
    let searchBtn = document.querySelector('.search__btn');
    let albumArr =[];
    let albumData = {
        albums: []
    };

    searchBtn.addEventListener('click', searchAlbum);

    function searchAlbum(event){
        event.preventDefault();
        localStorage.removeItem("searchResultAlbums");
        albumData = {
            albums: []
        };
        albumArr =[];
        let searchQuery = searchInput.value;
        let url = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchQuery}&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json`;
        fetch(url)
            .then(response=> response.ok ? response.json():null)
            .then(data=> {
                albumArr.push(data);
                console.log(albumArr);
                albumDataPreparation();
                function albumDataPreparation(){
                    albumArr[0].results.albummatches.album.forEach(function(item){
                        let albumName = item.name;
                        let albumArtist = item.artist;
                        let albumImage = item.image[2]['#text'];
                        albumData.albums.push(
                            {
                                albumName: albumName,
                                albumArtist: albumArtist,
                                albumImage: albumImage,
                            }
                        )
                    });
                    createAlbumCard();
                    console.log(albumData);
                    searchInput.value ='';
                    localStorage.setItem( "searchResultAlbums", JSON.stringify(albumData) );
                }
            });
    }

    function createAlbumCard(){
        const source = document.querySelector('#albums-list-template').innerHTML.trim();
        console.log(source);
        const container = document.querySelector('.content');
        const template = Handlebars.compile(source);
        container.innerHTML = template(albumData);
    }
})();




