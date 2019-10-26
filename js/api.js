$(document).ready(function () {
  var url = "https://pixabay.com/api/?key=14010091-6fc887d8f179a5dc0fe818556&q=green+vegetable&image_type=photo&pretty=true";
  $.getJSON(
    url,
    function (data) {
      var result = "";
      data.hits.forEach(item => {
        result += `  
                <div class="card shadow-lg mb-5" id="card">
                  <div class ="card-body">
                  <img src= "${item.largeImageURL}" class ="img-fluid"> 
                </div>
                <div class="card-footer">
                    <i class="material-icons float-lift text-danger">favorite</i>
                    <img src= "${item.userImageURL}" class ="img-fluid rounded-circle" width="40" text-success>                    
                    ${item.tags}
                <button type="button" class="btn btn-warning float-right" data-toggle="modal" data-target="#myModal${item.id}">View</button>
                <div class="modal fade" id="myModal${item.id}" >
                <div class="modal-dialog">
                  <div class="modal-content">                         
                    <div class="modal-header text-info">
                       <img src= "${item.userImageURL}" class ="img-fluid rounded-circle" width="30"> &nbsp;                   
                       ${item.tags}
                       <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>     
            
                    <div class="modal-body">
                    <img src="${item.largeImageURL}" class ="img-fluid"> 
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item"><i class="material-icons text-success">thumb_up</i>${item.likes}</li>
                        <li class="list-group-item"><i class="material-icons text-danger">favorite</i>${item.favorites}</li>
                        <li class="list-group-item"><i class="material-icons text-primary">visibility</i>${item.views}</li>
                        <li class="list-group-item"><i class="material-icons text-warning">comments</i>${item.comments}</li>
                    </ul>
                    </div>
                  </div>
                </div>
              </div>  
            </div> 
          </div>                     
          `;
      });
      $('#card').append(result);
    }
  );
});