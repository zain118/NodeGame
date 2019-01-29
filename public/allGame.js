function buildList(dataAll){
	var builder='';
			if(dataAll.length !== 0){
				$.each(dataAll,function(index,item){
					builder += "<tr><td><a href='/games/"+item.id+"'>"+item.id+"</a></td><td><input type='button' value='Delete' class='Delete' id='"+item.id+"'></td></tr>";
				})
			}
			else{
				builder += "<tr><td>No Games added yet</td>";
				builder += "<td>Create games <a href='/'>here</a></td></tr>"
				}
				$('#AllGames').append(builder);
			
}