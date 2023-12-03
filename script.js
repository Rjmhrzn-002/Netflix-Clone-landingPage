const app = {
  $: {
    questions: document.querySelectorAll(".ques-list li"),
    answer: document.querySelectorAll("#answer"),
  },

  init: () => {
    app.$.questions.forEach((event) => {
      event.addEventListener("click", () => {
        const answerSpan = event.querySelector(".list-answer");

        answerSpan.classList.toggle("hidden");
      });
    });
  },
};

window.onload = app.init;
