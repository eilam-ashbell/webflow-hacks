(() => {
  const dueDate = new Date(`${$("[counter-time]").attr("counter-time")}`);
  const timer = setInterval(() => interval(dueDate), 1000);

  function interval(dueDate) {
    const now = new Date().getTime();
    const distance = dueDate - now;
    console.log(distance)
    distance <= 1000
      ? $("[counter]").each(function (i, e) {
          $(e).text("00");
          console.log("inside")
        })
      : () => {
          console.log("outside")
          $("[counter='dd']").text(Math.floor(distance / 86400000));
          $("[counter='hh']").text(Math.floor((distance % 86400000) / 3600000));
          $("[counter='mm']").text(Math.floor((distance % 3600000) / 60000));
          $("[counter='ss']").text(Math.floor((distance % 60000) / 1000));
          $("[counter]").each(function (i, e) {
            +$(e).text() < 10 ? $(e).text(`0${$(e).text()}`) : $(e);
          });
        };

    if (distance <= 1000) {
      $("[counter-show]").show();
      $("[counter-hide]").hide();
      $("[counter-add]").each(function (i, e) {
        $(e).addClass($(e).attr("counter-add"));
      });
      $("[counter-remove]").each(function (i, e) {
        $(e).removeClass($(e).attr("counter-remove"));
      });
      clearInterval(timer);
    }
  }
})();