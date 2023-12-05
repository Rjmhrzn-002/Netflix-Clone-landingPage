const app = {
  $: {
    questions: document.querySelectorAll(".ques-list li"),
    answer: document.querySelectorAll("#answer"),
  },

  init: () => {
    app.$.questions.forEach((liElement) => {
      liElement.addEventListener("click", () => {
        const answerSpan = liElement.querySelector(".list-answer");

        answerSpan.classList.toggle("hidden");
      });
    });
  },
};

window.onload = app.init;
