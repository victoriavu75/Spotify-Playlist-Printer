var request = require("request");
var user_id = "vkvu";
var token = "Bearer BQBKf_Goqd3X4tz1tGAPwJB_Pr4_E7_fdBmZJVv4vLP9BPBucin5qhaoiBMesZIQ-p4N-V4ULp4PqIAyxGzZmRMOqxHAZBBlWB1HAe-FvngN_uRUFaAG4aYIpyazYh31UFSCz5xODwoK";
var playlist_url = "https://api.spotify.com/v1/users/"+user_id+"/playlists";

request({url:playlist_url, headers:{"Authorization":token}}, function(err,res){
	if (res){
		var playlists = JSON.parse(res.body);
		var playlist_url = playlists.items[0].href
		request({url:playlist_url, headers:{"Authorization":token}}, function(err, res){
			if (res){
				var playlist = JSON.parse(res.body);
				console.log("playlist: " + playlist.name);
				playlist.tracks.items.forEach(function(track){
					console.log(track.track.name);
				});
			}
		})
	}
})