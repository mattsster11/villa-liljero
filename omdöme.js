
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




















let like = Number(localStorage.getItem("like")) || 0;
    let dislike = Number(localStorage.getItem("dislike")) || 0;
    let blank = Number(localStorage.getItem("blank")) || 0;

    const likeCount = document.getElementById("likeCount");
    const dislikeCount = document.getElementById("dislikeCount");
    const blankCount = document.getElementById("blankCount");
    const reviewList = document.getElementById("reviewList");

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    function updateVotes() {
      likeCount.textContent = like;
      dislikeCount.textContent = dislike;
      blankCount.textContent = blank;
    }

    function saveReviews() {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }

    function renderReviews() {
      reviewList.innerHTML = "";
      reviews.slice().reverse().forEach((review) => {
        const div = document.createElement("div");
        div.className = "review-item";
        div.innerHTML = `
          <div class="review-meta">${review.time}</div>
          <div>${review.text}</div>
        `;
        reviewList.appendChild(div);
      });
    }

    document.getElementById("likeBtn").addEventListener("click", () => {
      like++;
      localStorage.setItem("like", like);
      updateVotes();
    });

    document.getElementById("dislikeBtn").addEventListener("click", () => {
      dislike++;
      localStorage.setItem("dislike", dislike);
      updateVotes();
    });

    document.getElementById("blankBtn").addEventListener("click", () => {
      blank++;
      localStorage.setItem("blank", blank);
      updateVotes();
    });

    document.getElementById("sendReviewBtn").addEventListener("click", () => {
      const reviewText = document.getElementById("reviewText");
      const text = reviewText.value.trim();

      if (!text) {
        alert("Skriv gärna en recension först.");
        return;
      }

      reviews.push({
        text,
        time: new Date().toLocaleString("sv-SE")
      });

      saveReviews();
      renderReviews();
      reviewText.value = "";
    });

    updateVotes();
    renderReviews();













    
    
  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  const form = document.getElementById("reviewForm");
  const reviewText = document.getElementById("reviewText");
  const reviewList = document.getElementById("reviewList");

  function starsText(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  }

  function renderReviews() {
    reviewList.innerHTML = "";

    reviews.slice().reverse().forEach((review) => {
      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <div class="review-meta">${review.time}</div>
        <div class="stars">${starsText(review.rating)}</div>
        <div>${review.text}</div>
      `;
      reviewList.appendChild(item);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const selected = document.querySelector('input[name="rating"]:checked');
    const text = reviewText.value.trim();

    if (!selected || !text) {
      alert("Välj ett betyg och skriv en recension.");
      return;
    }

    reviews.push({
      rating: Number(selected.value),
      text,
      time: new Date().toLocaleString("sv-SE")
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));
    renderReviews();
    form.reset();
  });

  renderReviews();

