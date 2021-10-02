function loadPosts() {
    $.get('/api/posts', (posts) => {
        for (let p of posts) {
            $('#posts-container').append(
                $(`
        <div class="col-4">
          <div class="card m-2">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
              <p class="card-text">
                ${p.body.substr(0,200)}
                <a href="http://localhost:5001/api/posts/comments/${p.id}/endpoint" class="card-link">...ReadMore</a>
               <a href="#"></a>
              </p>
              <a href="http://localhost:5001/api/posts/comments/${p.id}/endpoint" class="card-link">Comment</a>
              <a href="#" class="card-link"></a>
            </div>
          </div>
        </div>
        
        `)
            )
        }
    })
}
//<a href="#"></a>