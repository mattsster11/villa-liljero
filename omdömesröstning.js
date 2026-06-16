
  let like = Number(localStorage.getItem("like")) || 0;
  let dislike = Number(localStorage.getItem("dislike")) || 0;
  let blank = Number(localStorage.getItem("blank")) || 0;

  const likeCount = document.getElementById("likeCount");
  const dislikeCount = document.getElementById("dislikeCount");
  const blankCount = document.getElementById("blankCount");

  function updateUI() {
    likeCount.textContent = like;
    dislikeCount.textContent = dislike;
    blankCount.textContent = blank;
  }

  document.getElementById("likeBtn").onclick = () => {
    like++;
    localStorage.setItem("like", like);
    updateUI();
  };

  document.getElementById("dislikeBtn").onclick = () => {
    dislike++;
    localStorage.setItem("dislike", dislike);
    updateUI();
  };

  document.getElementById("blankBtn").onclick = () => {
    blank++;
    localStorage.setItem("blank", blank);
    updateUI();
  };

  updateUI();
