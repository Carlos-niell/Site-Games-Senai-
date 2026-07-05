$(document).ready(function () {
  $(".novidade-btn").on("click", function () {
    const item = $(this).data("item") || "novidade";
    showMessage(`Você selecionou: ${item}. Em breve teremos mais informações.`, "info");
  });

  $("#newsletter-form").on("submit", function (event) {
    event.preventDefault();
    subscribeNewsletter(event);
  });
});
