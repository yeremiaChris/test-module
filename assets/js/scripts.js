(function ($) {
  "use strict";
  $(window).on("load", function () {
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 1000);
  });
})(jQuery);

// confirm member button
const confirmMember = document.getElementById("confirm-member");

// handle confirm member is click
confirmMember.addEventListener("click", () => {
  // container of the team choosen
  const teamChoosen = document.getElementById("team-chosen");

  //   confirm team button
  const confirmTeamButton = document.getElementById("confirm-team");

  //   input element
  const input = document.getElementById("name-input");

  //   value of the input
  const value = input.value;

  //   conditional that check user is input value or not
  if (value) {
    //   new element for team choosen
    let h2 = document.createElement("h2");

    //   set value to element h2
    h2.innerText = "- " + value;

    //   put h2 element inside teamChoosen container
    teamChoosen.append(h2);

    //   reset input
    input.value = "";
  }

  //   conditional to enable submit button
  if (teamChoosen.childElementCount >= 3) {
    confirmTeamButton.className = "teams-ready";
    confirmTeamButton.innerText = "Team's Ready";
  }
});

// handle submit button
const confirmTeamButton = document.getElementById("confirm-team");
confirmTeamButton.addEventListener("click", () => {
  // hide header and input container
  const header = document.getElementById("masthead");
  header.style.visibility = "hidden";

  //   hide container team builder
  const teamBuilder = document.getElementById("team-builder");
  teamBuilder.style.visibility = "hidden";

  //   set position team builder to absolute so other element that visible will ignore this hidden element
  teamBuilder.style.position = "absolute";

  //   show congratulation modal
  const congratulationModalContainer = document.getElementById("congratulation-modal");
  congratulationModalContainer.style.visibility = "visible";
});
