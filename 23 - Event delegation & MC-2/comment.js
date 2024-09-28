
document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.querySelector('#submitComment')
    const commentInput = document.querySelector('#commentInput');
    const commentsContainer = document.querySelector('#commentsContainer')

    // adding new comment...
    submitBtn.addEventListener('click', function () {
        const commentText = commentInput.value

        if (commentText) {
            addComment(commentText);
            commentInput.value = ''
        }

    })
    //handling rpely buttons event listners with evt delegation.
    commentsContainer.addEventListener('click', function (event) {
        const currentElem = event.target;
        if (currentElem.classList.contains('replyBtn')) {
            const parentComment = currentElem.parentElement;
            const replyInput = parentComment.querySelector('.replyInput')
            const replyText = replyInput.value;
            if (replyText) {
                addReply(parentComment, replyText);
                replyInput.value = '';
            }
        }

    })

    function addComment(text) {
        // adding new comment to commentscontainer.
        const commentElement = document.createElement('div');
        commentElement.classList.add('repliesContainer');
        commentElement.innerHTML = `
            <p>${text}</p>
            <button class="replyBtn">Reply</button>
            <textarea class="replyInput" placeholder="Write a reply...">
        `
        commentsContainer.appendChild(commentElement);

    }

    function addReply(parentComment, text) {
        // preparing html to add
        const replyElementDiv = document.createElement('div');
        replyElementDiv.className = 'repliesContainer';
        replyElementDiv.innerHTML = `<p>${text}</p>`;
        const btn = document.createElement('button');
        btn.className = 'replyBtn';
        btn.innerText = 'Reply'
        replyElementDiv.appendChild(btn);

        const replyInput = document.createElement('textarea');
        replyInput.placeholder = 'Write a reply...'
        replyInput.className = 'replyInput';
        replyElementDiv.appendChild(replyInput);

        // main line to append to the comment under which reply was clicked..
        parentComment.appendChild(replyElementDiv);



    }

})

